import { getUserStreaks } from "@/services/streakservice";
import { User } from "@/types/user";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

/**
 * Example Request
 * curl --header "Content-Type: application/json" --data "{\"user_id\": \"user_id_13810498\"}" --request POST http://localhost:3000/api/profile/streaks
 */

//Gets the current streak information for a given user
async function POST(req: NextApiRequest) {
    return req
        .json()
        .then((data: any) => {
            //Get user
            const user = data["user_id"];

            if (user == undefined) {
                throw new Error("User not provided");
            }

            console.log(user);

            //Get streaks based on user from database
            const streaks = getUserStreaks(user);

            return NextResponse.json({ groups: streaks });
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
