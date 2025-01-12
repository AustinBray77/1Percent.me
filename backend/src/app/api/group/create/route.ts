import { addGroup } from "@/services/groupservice";
import { createGroupFromObj, Group } from "@/types/group";
import { NextResponse, NextRequest } from "next/server";

/**
 * Example Request
 *
 */

//Create a group with the provided information
async function POST(req: NextRequest) {
    //Gets filters from request
    return req
        .json()
        .then((data: any) => createGroupFromObj(data["group"]))
        .then(async (group: Group) => {
            console.log(group);

            //Add group to DB
            await addGroup(group);

            return NextResponse.json(
                { message: "Group created" },
                { status: 201 }
            );
        })
        .catch((err: any) => {
            console.error(err);
            return NextResponse.json(
                { error: "Error parsing group" },
                { status: 400 }
            );
        });
}

export { POST };
