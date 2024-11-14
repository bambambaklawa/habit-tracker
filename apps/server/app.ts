import { Request, Response } from "express";

const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const serverApp = express();

serverApp.use(cors());
serverApp.use(express.json());

serverApp.get("/", async (req: Request, res: Response) => {
  res.json("Esasdasda");
});

module.exports = serverApp;
