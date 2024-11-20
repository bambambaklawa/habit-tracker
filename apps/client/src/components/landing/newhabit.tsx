import { useNavigate } from "react-router-dom";
import Footer from "../shared/footer";
import Navbar from "../shared/navbar";
import { BaseSyntheticEvent, useContext, useState } from "react";
import { UserContext } from "@/UserContext";
import { UserContextType } from "@/lib/types";


const BASE_URL = "http://localhost:8080";

const NewHabit = () => {

  const { user } = useContext(UserContext) as UserContextType;

  const [habits, setHabits] = useState([
    {
      habitName: "abc",
      goal: 0,
      habitNote: "acd",
    },
  ]);

  const [habitName, setHabitName] = useState("");
  const [goal, setGoal] = useState(15);
  const [habitNote, setHabitNote] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onRadioChange = (e:BaseSyntheticEvent) => {
    setGoal(Number(e.target.value))
  }


  const handleSubmit = async () => {
    if (habitName && goal && habitNote) {
      const newHabit = {
        habitName,
        goal,
        habitNote,
      };

      await fetch(`${BASE_URL}/habits/${user?.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newHabit),
      });

      setHabits([...habits, newHabit]);
      setGoal(0);
      setHabitNote("");
      setError("");
      navigate("/submit-done");
    } else {
      setError("Porfa fill out all of the three fields! 🐽");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#fdfcfb] bg-opacity-80 [background-image:radial-gradient(#DEBA6F_0.5px,transparent_0.8px),radial-gradient(#DEBA6F_0.6px,#ebedee_0.5px)] [background-size:20px_20px] [background-position:0_0,10px_10px]">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-6xl font-bold border-4 border-black rounded-xl p-4 px-10">
            start your new habit here.
          </h1>{" "}
          <div className="mt-12">
            {error && (
              <p className="text-red-500 font-semibold flex justify-center mb-2">
                {error}
              </p>
            )}
            <label className="p-3 rounded-sm bg-amber-300 bg-opacity-35 flex items-center gap-2">
              <p className="text-black mr-2 font-semibold p-3">habit:</p>
              <input
                type="text"
                className="grow bg-transparent ml-14"
                placeholder="100 push ups every day ..."
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
              />
            </label>
            <label className="p-3 rounded-sm  bg-amber-300 bg-opacity-35 flex gap-2 mt-2">
              <p className="text-black font-semibold p-3">set goal:</p>
              <div className="flex items-center gap-4 mx-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="goal"
                    value="15"
                    checked={goal === 15}
                    onChange={onRadioChange}
                    className="radio"
                  />
                  <span className="text-xs">15 days</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="goal"
                    value="30"
                    checked={goal === 30}
                    onChange={onRadioChange}
                    className="radio"
                  />
                  <span className="text-xs">30 days</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="goal"
                    value="100"
                    checked={goal === 100}
                    onChange={onRadioChange}
                    className="radio"
                  />
                  <span className="text-xs">100 days</span>
                </label>
              </div>
            </label>
            <p className="p-2 mt-3 -mb-3 text-xs font-bold text-gray-700">
              write a note to your future self:
            </p>
            <textarea
              className="p-3 rounded-sm w-full h-40 mt-2  bg-amber-300 bg-opacity-35"
              placeholder="I'm going to stick to this habit because..."
              value={habitNote}
              onChange={(e) => setHabitNote(e.target.value)}
            ></textarea>
            <div className="flex justify-end mt-2">
              <button
                onClick={handleSubmit}
                className="btn btn-outline bg-[#a7c957] hover:bg-amber-300/80 text-white border-none"
              >
                submit.
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewHabit;
