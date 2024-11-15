import express, { Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const serverApp = express();

serverApp.use(cors());
serverApp.use(express.json());

serverApp.get("/", async (req: Request, res: Response) => {
  res.json("Welcome to the server!");
});

export default serverApp;
