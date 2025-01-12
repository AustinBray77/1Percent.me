import { incrementStreak } from "@/services/streakservice";
import { Streak } from "@/types/streak";
import { NextRequest, NextResponse } from "next/server";

//Gets the current streak information for a given user
async function POST(req: NextRequest) {
    return req
        .json()
        .then(async (data: any) => {
            //Get user
            const user = data["user_id"];
            const streak = data["streak"];

            if (user == undefined) {
                throw new Error("User not provided");
            }

            if (streak == undefined) {
                throw new Error("Streak not provided");
            }

            console.log(user);

            //Get streaks based on user from database
            return incrementStreak(user, streak);
        })
        .then((streak: Streak) => {
            return NextResponse.json({ updated: streak });
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
