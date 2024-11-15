import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function sendUsers() {
  return await prisma.user.findMany();
}

export async function addUser(newUser: { username: string }) {
  await prisma.user.create({ data: newUser });
  return true;
}
