import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type ResponseData = {
    message: string;
};

function GET(req: NextApiRequest) {
    return NextResponse.json({ status: "Running" });
}

export { GET };
