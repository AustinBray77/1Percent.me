import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

/**
 * Example Request
 * curl --header "Content-Type: application/json" --data "{\"user\": \"💯\"}" --request POST http://localhost:3000/api/group/from-user
 */
//Gets all groups that the user is a part of
async function POST(req: NextApiRequest) {
    return req
        .json()
        .then((data: any) => {
            //Get user
            const user = data["user"];

            if (user == undefined) {
                throw new Error("User not provided");
            }

            console.log(user);

            //Get groups based on user from database
            const groups = { Data: "Groups from user" };

            return NextResponse.json({ groups: groups });
        })
        .catch((err: any) => {
            console.error(err);
            return NextResponse.json(
                { error: "Error parsing request" },
                { status: 400 }
            );
        });
}

export { POST };
