import { Request, Response } from "express";
import { sendUsers, addUser } from "../Models/usersModels";

export async function getUsers(req: Request, res: Response): Promise<void> {
  try {
    const users = await sendUsers();
    res.json(users);
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Error fetching users", details: error.message });
  }
}

export async function postUsers(req: Request, res: Response): Promise<void> {
  const { username } = req.body;
  try {
    await addUser({ username });
    res
      .status(201)
      .json({ statusCode: 201, message: "User created successfully" });
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Error creating user", details: error.message });
  }
}
