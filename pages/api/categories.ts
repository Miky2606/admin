import { NextApiRequest, NextApiResponse } from "next";

export default async function Categories(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    res.status(200).json({
      status: true,
      msg: "yes",
    });
  }

  return res.status(404).json({
    status: false,
    msg: "Error no method",
  });
}
