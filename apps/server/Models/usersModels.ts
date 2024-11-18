import { PrismaClient } from "@prisma/client";

interface NewUser {
  username: string;
  password: string;
  email: string
}

const prisma = new PrismaClient();

export async function sendUsers() {
  return await prisma.user.findMany();
}

export async function addUser({ username, password, email }: NewUser) {
  await prisma.user.create({ data: {
    username: username,
    password: password,
    email: email
  }  });
  return true;
}
