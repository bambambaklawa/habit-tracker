/*
  Warnings:

  - You are about to drop the `Transaction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Transaction";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Habit" (
    "id" SERIAL NOT NULL,
    "habitName" TEXT NOT NULL,
    "habitIcon" TEXT NOT NULL,
    "startDay" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "currentProgress" INTEGER NOT NULL,
    "habitNote" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Habit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
