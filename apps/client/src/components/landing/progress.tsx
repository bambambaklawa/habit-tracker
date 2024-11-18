import { Link } from "react-router-dom";
import Footer from "../shared/footer";
import Navbar from "../shared/navbar";
import ProgressBar from "./progress-bar";
import ProgressTimeline from "./progress-timeline";
import { useEffect, useState } from "react";
import { stringify } from "querystring";

const BASE_URL = "http://localhost:8080";


const Progress = () => {

useEffect( () => {
  fetchData()
}, [])

const [habits, setHabits] = useState({habits: []})

const fetchData = async() => {
  const response = await fetch(`${BASE_URL}/habits/5`);
  const data = await response.json()
  setHabits(data)
  console.log(data)
}

  return (
    <div>
      <Navbar />
      <div className="h-[800px] bg-[#fdfcfb] bg-opacity-80 [background-image:radial-gradient(#DEBA6F_0.5px,transparent_0.8px),radial-gradient(#DEBA6F_0.6px,#ebedee_0.5px)] [background-size:20px_20px] [background-position:0_0,10px_10px]">
        <div className="w-full h-screen flex flex-col justify-start items-center">
          <h1 className="text-6xl font-bold mt-10">see your progress here.</h1>

<div>
          {/* THIS DIV IS FOR ONE ENTIRE HABIT */}
          
          <div className="w-[420px]">
          <div className="w-full mt-10 flex flex-col justify-center items-center">
            <h2 className="w-full flex justify-center font-black text-2xl border-4 rounded-xl border-black p-3">
              {JSON.stringify(habits[1].habitName).toUpperCase()}
            </h2>
            <div className="flex items-center mt-3">
              <p className="font-bold mr-3 text-xs underline">start day:</p>
              <p className="font-medium text-gray-600"> {JSON.stringify(habits[1].startDay)}</p>
            </div>
            <div className="w-full mt-3 flex justify-center items-center gap-1 border-4 border-amber-300/80 p-3 rounded-xl">
              <p className="mr-2 font-medium text-gray-600">current streak:</p>
              <p className="mr-2 font-black">{JSON.stringify(habits[1].currentProgress)}</p>
              <p className="font-black text-gray-400 -mt-[2px]">|</p>
              <p className="ml-2 mr-2 font-medium text-gray-600">set goal:</p>
              <p className="mr-2 font-black">{habits[1].goal} DAYS</p>
            </div>
            <div className="w-full -mt-5 -mb-12">
                <ProgressBar
                  bgcolor={"#a7c957"}
                  completed={JSON.stringify(habits[1].currentProgress * 7)}
                />
            </div>
            <h2 className="mt-4 font-bold text-xl mr-2 text-gray-900 z-10">
              note for your future self:
            </h2>
            <div className="-mt-[14px] h-[120px] w-full bg-transparent border-4 border-amber-300 border-opacity-80 rounded-xl flex justify-center items-center">
              <p className="p-6 text-xs font-medium text-gray-600">
              {JSON.stringify(habits[1].habitNote)}
              </p>
            </div>
            <div className="w-full flex justify-center items-center mt-7">
            <button className="btn bg-[#a7c957] hover:bg-amber-300/80 text-white border-none text-xs">click here to log your todays progress 🚀</button>
            <Link to="/start-over"><button className="btn ml-2 bg-transparent hover:bg-red-500 hover:border-red-500 text-black border-red-500 text-xs">start over. 😞</button></Link>
            </div>
          </div>
          </div>

                    {/* THIS IS WHERE DIV FOR ONE ENTIRE HABIT ENDS */}

                    </div>
          <div className="m-8">
            <ProgressTimeline />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Progress;