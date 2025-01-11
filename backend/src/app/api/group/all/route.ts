import { getGroupCollection } from "@/services/groupservice";
import { createFiltersFromObj, Filters } from "@/types/filters";
import { Group } from "@/types/group";
import { WithId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

/**
 * Example Request
 * curl --header "Content-Type: application/json" --data "{\"filters\": { \"Distance\": \"100km\", \"Max_size\": \"30\" }}" --request POST http://localhost:3000/api/group/all
 */

//Gets all groups with provided filters
async function POST(req: NextRequest) {
    //Get all groups from the database
    const groups = await getGroupCollection();

    //Gets filters from request
    return req
        .json()
        .then((data: any) => {
            return createFiltersFromObj(data["filters"]);
        })
        .then((filters: Filters) => {
            console.log(filters);

            //Filters groups based on the provided filters
            if (filters.apply) {
                return groups
                    .filter((group) => {
                        for (const key in filters) {
                            if (groups[key] != filters[key]) {
                                return false;
                            }
                        }

                        return true;
                    })
                    .map((group) => group as Group);
            } else {
                return groups.map((group) => group as Group);
            }
        })
        .then((filteredGroups: Group[]) => {
            return NextResponse.json({ groups: filteredGroups });
        })
        .catch((err: any) => {
            console.error(err);
            return NextResponse.json(
                { error: "Error parsing filters" },
                { status: 400 }
            );
        });
}

export { POST };
