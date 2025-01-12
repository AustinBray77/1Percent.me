import { createUser, getUserFromId } from "@/services/profileservice";
import { createUserFromObj, User } from "@/types/user";
import { NextRequest, NextResponse } from "next/server";

//Gets a user from the provided ID
async function POST(req: NextRequest) {
    //Gets filters from request
    return req
        .json()
        .then((data: any) => {
            const user = data["user_id"];

            if (user == undefined) {
                throw new Error("User not provided");
            }

            console.log(user);

            return getUserFromId(user);
        })
        .then((user: User) => {
            return NextResponse.json({ user: user });
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
