import { PrismaClient, Habit, User } from "@prisma/client";

const prisma = new PrismaClient();

interface NewHabit {
  habitName: string;
  goal: number;
  habitNote: string;
}

export async function getHabitsByUserId(userId: number): Promise<User | undefined | null> {
  return await prisma.user.findUnique({
    where: { id: userId },
    include:{ 
      habits: true
    }
  });
}

export async function addHabit(newHabit: NewHabit): Promise<boolean> {
  const user = await prisma.user.findUnique({
    where: { username: "koko" },
  });

  if (!user || user === null) {
    throw new Error(`This user does not exist.`);
  }

  await prisma.habit.create({
    data: {
      habitName: newHabit.habitName,
      goal: newHabit.goal,
      currentProgress: 0,
      habitNote: newHabit.habitNote,
      user: { connect: user },
    },
  });

  return true;
}

export async function updateHabitProgress(
  habitId: number
): Promise<Habit | null> {
  const habit = await prisma.habit.findUnique({
    where: { id: habitId },
  });

  if (!habit) {
    throw new Error(`Habit with ID ${habitId} does not exist.`);
  }

  const now = new Date();
  const startDay = habit.startDay;
  const currentProgress = Math.floor(
    (now.getTime() - startDay.getTime()) / (1000 * 60 * 60 * 24)
  );

  return await prisma.habit.update({
    where: { id: habitId },
    data: { currentProgress },
  });
}

export async function deleteHabit(habitId: number): Promise<boolean> {
  try {
    await prisma.habit.delete({
      where: { id: habitId },
    });
    return true;
  } catch (error: any) {
    throw new Error(
      `Error deleting habit with ID ${habitId}: ${error.message}`
    );
  }
}
