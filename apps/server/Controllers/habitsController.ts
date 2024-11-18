import { Request, Response } from "express";
import {
  getHabitsByUserId,
  addHabit,
  updateHabitProgress,
  deleteHabit,
} from "../Models/habitsModels";

export async function getHabits(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  try {

  const habits = await getHabitsByUserId(Number(id));
  if (!!habits) {
    res.json(habits);
  }

  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Error fetching habits", details: error.message })
  }
}

export async function postHabits(req: Request, res: Response): Promise<void> {
  const { habitName, goal, habitNote } = req.body;

  try {
    await addHabit({ habitName, goal, habitNote });
    res
      .status(201)
      .json({ statusCode: 201, message: "Habit created successfully" });
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Error creating habit", details: error.message });
  }
}

export async function updateHabits(req: Request, res: Response): Promise<void> {
  const { habitId } = req.body;

  try {
    const updatedHabit = await updateHabitProgress(habitId);
    res.status(200).json({
      statusCode: 200,
      message: "Habit updated successfully",
      habit: updatedHabit,
    });
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Error updating habit", details: error.message });
  }
}

export async function deleteHabits(req: Request, res: Response): Promise<void> {
  const { habitId } = req.body;

  try {
    await deleteHabit(habitId);
    res
      .status(200)
      .json({ statusCode: 200, message: "Habit deleted successfully" });
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Error deleting habit", details: error.message });
  }
}
