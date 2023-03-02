//endpoint for counting the visiters of the website with prisma client
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();


export default async function handler(req, res) {
  try {
    const result = await prisma.$executeRaw`
      UPDATE "USERDATA" SET "LOGINCOUNT" = "LOGINCOUNT" + 1;`;
    const result2 = await prisma.$executeRaw`
      SELECT "LOGINCOUNT" FROM "USERDATA";`;
    res.status(200).json({result2});
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: "failed" });
  }
}
