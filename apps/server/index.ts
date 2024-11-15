import express from "express";
import { getUsers, postUsers } from "./Controllers/usersController";
import {
  getHabits,
  postHabits,
  updateHabits,
  deleteHabits,
} from "./Controllers/habitsController";

const app = express();
app.use(express.json());

app.get("/users", getUsers);
app.post("/users", postUsers);

app.get("/users/:userId/habits", getHabits);
app.post("/users/:userId/habits", postHabits);
app.patch("/users/:userId/habits/:habitId", updateHabits);
app.delete("/users/:userId/habits/:habitId", deleteHabits);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`💵 Server running and listening on http://localhost:${PORT}/ …`);
});
