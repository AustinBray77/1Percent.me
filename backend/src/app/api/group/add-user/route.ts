import { NextRequest, NextResponse } from "next/server";

//Adds a user to a group from a given group_name and user_id
async function POST(req: NextRequest) {
    return req
        .json()
        .then(async (data: any) => {
            const group = data["group_name"];
            const user = data["user_id"];

            await addUserToGroup(group, user);

            return NextResponse.json(
                { message: "User added to group" },
                { status: 201 }
            );
        })
        .catch((err: any) => {
            console.error(err);
            return NextResponse.json(
                { error: "Error in request" },
                { status: 400 }
            );
        });
}

export { POST };
