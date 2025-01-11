import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
    message: string;
};

function GET(req: NextApiRequest) {
    return Response.json({ message: "Hello from Next.js!" });
}

export { GET };
