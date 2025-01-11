import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

/**
 * Example Request
 * curl --header "Content-Type: application/json" --data "{\"filters\": { \"Distance\": \"100km\", \"Max_size\": \"30\" }}" --request POST http://localhost:3000/api/group/all
 */

//Gets all groups with provided filters
async function POST(req: NextApiRequest) {
    //Get all groups from the database
    const groups = { Data: "All groups" };

    //Gets filters from request
    return req
        .json()
        .then((data: any) => {
            return data["filters"] ?? undefined;
        })
        .then((filters: [string] | undefined) => {
            console.log(filters);

            //Filters groups based on the provided filters
            if (filters != undefined) {
                return groups;
            } else {
                return groups;
            }
        })
        .then((filteredGroups: [string]) => {
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
