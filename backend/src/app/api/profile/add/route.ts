import { createUser } from "@/services/profileservice";
import { createUserFromObj, User } from "@/types/user";
import { NextRequest, NextResponse } from "next/server";

//Creates a user with the provided information
async function POST(req: NextRequest) {
    //Gets filters from request
    return req
        .json()
        .then((data: any) => createUserFromObj(data["user"]))
        .then((user: User) => {
            console.log(user);

            //Add group to DB
            createUser(user);

            return NextResponse.json(
                { message: "User created" },
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
