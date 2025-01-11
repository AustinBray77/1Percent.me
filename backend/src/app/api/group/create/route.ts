import { createGroupFromObj, Group } from "@/app/group";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

/**
 * Example Request
 *
 */

{
    name: "Name";
    description: "🔥🔥🔥";
    creator_id: "user_id_121431";
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg00.deviantart.net%2Fbe78%2Fi%2F2014%2F115%2F7%2F0%2Frock_hyrax_by_dellboyy-d7fwfi0.jpg&f=1&nofb=1&ipt=57474855809d1666df8da1b9ba513382513aba98e7f198b9420813e623196f5d&ipo=images";
    location: "Hamilton, ON";
}

//Create a group with the provided information
async function POST(req: NextApiRequest) {
    //Gets filters from request
    return req
        .json()
        .then((data: any) => createGroupFromObj(data["group"]))
        .then((group: Group) => {
            console.log(group);

            //Add group to DB
            //Do something

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
