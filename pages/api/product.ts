import { NextApiRequest, NextApiResponse } from "next";

export default async function name(req: NextApiRequest, res: NextApiResponse) {
  return res.json({ msg: "Hola" });
}
