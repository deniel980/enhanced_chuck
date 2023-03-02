//endpoint for counting the visiters of the website with prisma client
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const result = await prisma.$queryRaw`
      SELECT "LOGINCOUNT" FROM "USERDATA";`;
    console.log(result);
    res.status(200).json(result[0]);
    return(result);
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: "failed" });
  }
}
