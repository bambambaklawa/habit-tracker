import { Link } from "react-router-dom";
import Footer from "../shared/footer";
import Navbar from "../shared/navbar";
import ProgressBar from "./progress-bar";
import ProgressTimeline from "./progress-timeline";
import { useContext, useEffect, useState } from "react";
import moment from "moment";
import { UserContext } from "../../UserContext";
import { UserContextType } from "@/lib/types";
import ConfettiEffect from "./confetti";

const BASE_URL = "http://localhost:8080";

const Progress = () => {
  const { user } = useContext(UserContext) as UserContextType;

  useEffect(() => {
    fetchData();
  }, []);

  type SingleHabit = {
    habitName: string;
    startDay: string;
    currentProgress: number;
    goal: number;
    habitNote: string;
  };

  type HabitsList = {
    habits: SingleHabit[];
  };

  const [habitsList, setHabitsList] = useState<HabitsList>({ habits: [] });
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [daysSet, setDaysSet] = useState(0);
  const [daysSet2, setDaysSet2] = useState(0);

  const fetchData = async () => {
    const response = await fetch(`${BASE_URL}/habits/${user?.id}`);
    const data = await response.json();
    setHabitsList(data);

    if (data && Array.isArray(data.habits) && data.habits.length === 1) {
      setDaysSet(data.habits?.length ? data.habits[0]?.goal : 0);
    }

    if (data && Array.isArray(data.habits) && data.habits.length === 2) {
      setDaysSet(data.habits?.length ? data.habits[0]?.goal : 0);
      setDaysSet2(data.habits?.length ? data.habits[1]?.goal : 0);
    }
  };

  const incrementProgress = (
    progressSetter: React.Dispatch<React.SetStateAction<number>>,
    progressType: "progress1" | "progress2"
  ) => {


    const speed =
      progressType === "progress1"
        ? Math.round(100 / daysSet)
        : Math.round(100 / daysSet2);
    
    console.log({speed, daysSet})
    console.log({speed, daysSet2})


    progressSetter((prev) => (prev >= 100 ? prev : prev + speed));
  };

  const incrementStreak = (index: number) => {
    setHabitsList((prevHabitsList) => {
      const updatedHabits = prevHabitsList.habits.map((habit, i) =>
        i === index
          ? { ...habit, currentProgress: habit.currentProgress + 1 }
          : habit
      );
      return { habits: updatedHabits };
    });
  };

  const commonBackgroundStyles =
    "min-h-screen flex flex-col justify-center items-center bg-[#fdfcfb] bg-opacity-80 [background-image:radial-gradient(#DEBA6F_0.5px,transparent_0.8px),radial-gradient(#DEBA6F_0.6px,#ebedee_0.5px)] [background-size:20px_20px] [background-position:0_0,10px_10px]";

  if (user === null) {
    return (
      <>
        <Navbar />
        <div className={commonBackgroundStyles}>
          <div className="w-full flex flex-col justify-start items-center gap-8">
            <h1 className="text-6xl font-bold mt-10 border-4 border-black rounded-xl p-4 px-6">
              sign in to see your progress.
            </h1>
            <div className="flex flex-col items-end">
              <h2 className="text-2xl font-bold mt-10 text-gray-600">
                You can register/sign in using the beautiful navbar buttons on
                the top 👆
              </h2>
            </div>
            <div className="m-12">
              <ProgressTimeline />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (habitsList.habits.length === 0) {
    return (
      <>
        <Navbar />
        <div className={commonBackgroundStyles}>
          <div className="w-full flex flex-col justify-start items-center gap-8">
            <h1 className="text-6xl font-bold mt-10 border-4 border-black rounded-xl p-4 px-6">
              you don't have any habits to track.
            </h1>
            <div className="flex flex-col items-end">
              <h2 className="text-2xl font-bold mt-10 text-gray-600">
                you can create your first habit here 👇
              </h2>
              <Link to="/newhabit">
                <button className="btn bg-[#a7c957] hover:bg-amber-300/80 text-white border-none mt-5">
                  create habit.
                </button>
              </Link>
            </div>
            <div className="m-12">
              <ProgressTimeline />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (habitsList.habits.length === 1) {
    return (
      <div>
        <Navbar />
        <div className={commonBackgroundStyles}>
          <div className="w-full flex flex-col items-center">
            <h1 className="text-6xl font-bold mt-10 underline text-gray-500">
              see your progress here.
            </h1>
            <div className="w-[420px]">
              <div className="w-full mt-10 flex flex-col justify-center items-center">
                <h2 className="w-full flex justify-center font-black text-2xl border-4 rounded-xl border-black p-3">
                  {habitsList.habits[0].habitName.toUpperCase()}
                </h2>
                <div className="flex items-center mt-3">
                  <p className="font-bold mr-3 text-xs underline">start day:</p>
                  <p className="font-medium text-gray-600">
                    {moment(habitsList.habits[0].startDay).format(
                      "MMMM Do, YYYY"
                    )}
                  </p>
                </div>
                <div className="w-full mt-3 flex justify-center items-center gap-1 border-4 border-amber-300/80 p-3 rounded-xl">
                  <p className="mr-2 font-medium text-gray-600">
                    current streak:
                  </p>
                  <p className="mr-2 font-black">
                    {habitsList.habits[0].currentProgress}
                  </p>
                  <p className="font-black text-gray-400 -mt-[2px]">|</p>
                  <p className="ml-2 mr-2 font-medium text-gray-600">
                    set goal:
                  </p>
                  <p className="mr-2 font-black">
                    {habitsList.habits[0].goal} DAYS
                  </p>
                </div>
                <div className="w-full -mt-5 -mb-12">
                  <ProgressBar
                    bgcolor={"#a7c957"}
                    completed={Math.min(progress1, 100)}
                  />
                  {progress1 >= 100 && <ConfettiEffect />}
                </div>
                <h2 className="mt-4 font-bold text-xl mr-2 text-gray-900 z-10">
                  note for your future self:
                </h2>
                <div className="-mt-[14px] h-[120px] w-full bg-transparent border-4 border-amber-300 border-opacity-80 rounded-xl flex justify-center items-center">
                  <p className="p-6 text-xs font-medium text-gray-600">
                    {habitsList.habits[0].habitNote}
                  </p>
                </div>
                <div className="w-full flex justify-center items-center mt-7">
                  <button
                    className="btn bg-[#a7c957] hover:bg-amber-300/80 text-white border-none text-xs"
                    onClick={() => {
                      incrementProgress(setProgress1, "progress1");
                      incrementStreak(0);
                    }}
                    disabled={progress1 >= 100}
                  >
                    click here to log your today's progress 🚀
                  </button>
                  {progress1 <= 100 ? (
                    <Link to="/start-over">
                      <button className="btn ml-2 bg-transparent hover:bg-red-500 hover:border-red-500 text-black border-red-500 text-xs">
                        start over. 😞
                      </button>
                    </Link>
                  ) : (
                    <Link to="/">
                      <button className="btn ml-2 bg-transparent hover:bg-green-500 hover:border-green-500 text-black border-green-500 text-xs">
                        continue. 🌝
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="my-11">
              <ProgressTimeline />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (habitsList.habits.length === 2) {
    return (
      <div>
        <Navbar />
        <div className={commonBackgroundStyles}>
          <div className="w-full flex flex-col items-center">
            <h1 className="text-6xl font-bold mt-10 underline text-gray-500 mb-5">
              see your progress here.
            </h1>
            <div className="flex gap-x-16">
              <div className="w-[420px]">
                <div className="w-full mt-10 flex flex-col justify-center items-center">
                  <h2 className="w-full flex justify-center font-black text-2xl border-4 rounded-xl border-black p-3">
                    {habitsList.habits[0].habitName.toUpperCase()}
                  </h2>
                  <div className="flex items-center mt-3">
                    <p className="font-bold mr-3 text-xs underline">
                      start day:
                    </p>
                    <p className="font-medium text-gray-600">
                      {moment(habitsList.habits[0].startDay).format(
                        "MMMM Do, YYYY"
                      )}
                    </p>
                  </div>
                  <div className="w-full mt-3 flex justify-center items-center gap-1 border-4 border-amber-300/80 p-3 rounded-xl">
                    <p className="mr-2 font-medium text-gray-600">
                      current streak:
                    </p>
                    <p className="mr-2 font-black">
                      {habitsList.habits[0].currentProgress}
                    </p>
                    <p className="font-black text-gray-400 -mt-[2px]">|</p>
                    <p className="ml-2 mr-2 font-medium text-gray-600">
                      set goal:
                    </p>
                    <p className="mr-2 font-black">
                      {habitsList.habits[0].goal} DAYS
                    </p>
                  </div>
                  <div className="w-full -mt-5 -mb-12">
                    <ProgressBar
                      bgcolor={"#a7c957"}
                      completed={Math.min(progress1, 100)}
                    />
                    {progress1 >= 100 && <ConfettiEffect />}
                  </div>
                  <h2 className="mt-4 font-bold text-xl mr-2 text-gray-900 z-10">
                    note for your future self:
                  </h2>
                  <div className="-mt-[14px] h-[120px] w-full bg-transparent border-4 border-amber-300 border-opacity-80 rounded-xl flex justify-center items-center">
                    <p className="p-6 text-xs font-medium text-gray-600">
                      {habitsList.habits[0].habitNote}
                    </p>
                  </div>
                  <div className="w-full flex justify-center items-center mt-7">
                    <button
                      className="btn bg-[#a7c957] hover:bg-amber-300/80 text-white border-none text-xs"
                      onClick={() => {
                        incrementProgress(setProgress1, "progress1");
                        incrementStreak(0);
                      }}
                      disabled={progress1 >= 100}
                    >
                      click here to log your today's progress 🚀
                    </button>
                    {progress1 <= 100 ? (
                      <Link to="/start-over">
                        <button className="btn ml-2 bg-transparent hover:bg-red-500 hover:border-red-500 text-black border-red-500 text-xs">
                          start over. 😞
                        </button>
                      </Link>
                    ) : (
                      <Link to="/">
                        <button className="btn ml-2 bg-transparent hover:bg-green-500 hover:border-green-500 text-black border-green-500 text-xs">
                          continue. 🌝
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              <div className="w-[3px] h-[470px] bg-black/40 mt-8 rounded-full"></div>

              <div className="w-[420px]">
                <div className="w-full mt-10 flex flex-col justify-center items-center">
                  <h2 className="w-full flex justify-center font-black text-2xl border-4 rounded-xl border-black p-3">
                    {habitsList.habits[1].habitName.toUpperCase()}
                  </h2>
                  <div className="flex items-center mt-3">
                    <p className="font-bold mr-3 text-xs underline">
                      start day:
                    </p>
                    <p className="font-medium text-gray-600">
                      {moment(habitsList.habits[1].startDay).format(
                        "MMMM Do, YYYY"
                      )}
                    </p>
                  </div>
                  <div className="w-full mt-3 flex justify-center items-center gap-1 border-4 border-[#a7c957] p-3 rounded-xl">
                    <p className="mr-2 font-medium text-gray-600">
                      current streak:
                    </p>
                    <p className="mr-2 font-black">
                      {habitsList.habits[1].currentProgress}
                    </p>
                    <p className="font-black text-gray-400 -mt-[2px]">|</p>
                    <p className="ml-2 mr-2 font-medium text-gray-600">
                      set goal:
                    </p>
                    <p className="mr-2 font-black">
                      {habitsList.habits[1].goal} DAYS
                    </p>
                  </div>
                  <div className="w-full -mt-5 -mb-12">
                    <ProgressBar
                      bgcolor={"#FCD34Dcc"}
                      completed={Math.min(progress2, 100)}
                    />
                    {progress2 >= 100 && <ConfettiEffect />}
                  </div>
                  <h2 className="mt-4 font-bold text-xl mr-2 text-gray-900 z-10">
                    note for your future self:
                  </h2>
                  <div className="-mt-[14px] h-[120px] w-full bg-transparent border-4 border-[#a7c957] border-opacity-80 rounded-xl flex justify-center items-center">
                    <p className="p-6 text-xs font-medium text-gray-600">
                      {habitsList.habits[1].habitNote}
                    </p>
                  </div>
                  <div className="w-full flex justify-center items-center mt-7">
                    <button
                      className="btn bg-amber-300/80 hover:bg-[#a7c957] text-white border-none text-xs"
                      onClick={() => {
                        incrementProgress(setProgress2, "progress2");
                        incrementStreak(1);
                      }}
                      disabled={progress2 >= 100}
                    >
                      click here to log your today's progress 🚀
                    </button>
                    {progress2 <= 100 ? (
                      <Link to="/start-over">
                        <button className="btn ml-2 bg-transparent hover:bg-red-500 hover:border-red-500 text-black border-red-500 text-xs">
                          start over. 😞
                        </button>
                      </Link>
                    ) : (
                      <Link to="/">
                        <button className="btn ml-2 bg-transparent hover:bg-green-500 hover:border-green-500 text-black border-green-500 text-xs">
                          continue. 🌝
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="my-12">
              <ProgressTimeline />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (habitsList.habits.length > 2) {
    return (
      <>
        <Navbar />
        <div className={commonBackgroundStyles}>
          <div className="w-full flex flex-col justify-start items-center gap-8">
            <h1 className="text-6xl font-bold mt-10 border-4 border-black rounded-xl p-4 px-6">
              now you trying to do just too much.
            </h1>
            <div className="flex flex-col items-end">
              <h2 className="text-2xl font-bold mt-10 text-gray-600">
                take a chill pill and stick to two habits only 👇
              </h2>
              <Link to="">
                <button className="btn bg-[#a7c957] hover:bg-amber-300/80 text-white border-none mt-5">
                  this button aint doin sh#t.
                </button>
              </Link>
            </div>
            <div className="m-12">
              <ProgressTimeline />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default Progress;
