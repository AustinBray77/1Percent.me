import { createUser } from "@/services/profileservice";
import { createStreak } from "@/services/streakservice";
import { createBlankStreak } from "@/types/streak";
import { createUserFromObj, User } from "@/types/user";
import { NextRequest, NextResponse } from "next/server";

//Creates a user with the provided information
async function POST(req: NextRequest) {
    //Gets filters from request
    return req
        .json()
        .then((data: any) => createUserFromObj(data["user"]))
        .then(async (user: User) => {
            console.log(user);

            //Add user to DB and create streak object for user
            const result = await createUser(user);

            if (result) {
                createStreak(createBlankStreak(user.id));
            }

            return NextResponse.json(
                { message: "User created", user_id: user.id },
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
