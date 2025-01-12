import { filterGroups, getGroupCollection } from "@/services/groupservice";
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
    //Gets filters from request
    return req
        .json()
        .then((data: any) => {
            return createFiltersFromObj(data["filters"]);
        })
        .then((filters: Filters) => {
            console.log(filters);

            if (!filters.apply) {
                //Get all groups from the database
                return getGroupCollection();
            } else {
                //Get filtered groups from the database
                return filterGroups(filters["filters"]);
            }
        })
        .then((groups: Group[]) => {
            return groups.map((group) => group as Group);
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
