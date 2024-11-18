import express from "express";
import { getUsers, postUsers } from "./Controllers/usersController";
import {
  getHabits,
  postHabits,
  updateHabits,
  deleteHabits,
} from "./Controllers/habitsController";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/users", getUsers);
app.post("/users", postUsers);

app.get("/habits/:id", getHabits);
app.post("/habits", postHabits);
app.patch("/habits", updateHabits);
app.delete("/habits", deleteHabits);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`💵 Server running and listening on http://localhost:${PORT}/ …`);
});
