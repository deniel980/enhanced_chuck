//endpoint for counting the visiters of the website with prisma client
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const update = await prisma.$executeRaw`
      UPDATE "USERDATA" SET "LOGINCOUNT" = "LOGINCOUNT" +1;`;
    res.status(200).json({ update: "success" });
    return(update);
  } catch (error) {
    console.log(error);
    res.status(200).json({ update: "failed" });
  }
}
