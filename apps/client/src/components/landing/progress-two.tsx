import { Link } from "react-router-dom";
import Footer from "../shared/footer";
import Navbar from "../shared/navbar";
import ProgressBar from "./progress-bar";
import ProgressTimeline from "./progress-timeline";



const ProgressTwo = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[800px] bg-[#fdfcfb] bg-opacity-80 [background-image:radial-gradient(#DEBA6F_0.5px,transparent_0.8px),radial-gradient(#DEBA6F_0.6px,#ebedee_0.5px)] [background-size:20px_20px] [background-position:0_0,10px_10px]">
        <div className="w-full h-screen flex flex-col justify-start items-center">
          <div className="flex items-center justify-center mt-8">
        <Link to="/newhabit"><button className="btn btn-outline mr-8 bg-transparent border-2 border-amber-300/60 hover:border-amber-300 hover:bg-transparent text-black/40">add new habit.</button></Link>
          <h1 className="text-6xl font-bold mb-3">see your progress here.</h1>
          </div>
<div className="flex gap-x-16">
          {/* THIS DIV IS FOR ONE ENTIRE HABIT */}
          
          <div className="w-[420px]">
          <div className="w-full mt-10 flex flex-col justify-center items-center">
            <h2 className="w-full flex justify-center font-black text-2xl border-4 rounded-xl border-black p-3">
              100 PUSH UPS EVERY DAY
            </h2>
            <div className="flex items-center mt-3">
              <p className="font-bold mr-3 text-xs underline">start day:</p>
              <p className="font-medium text-gray-600"> November 19th 2024</p>
            </div>
            <div className="w-full mt-3 flex justify-center items-center gap-1 border-4 border-[#a7c957] p-3 rounded-xl">
              <p className="mr-2 font-medium text-gray-600">current streak:</p>
              <p className="mr-2 font-black">17 DAYS</p>
              <p className="font-black text-gray-400 -mt-[2px]">|</p>
              <p className="ml-2 mr-2 font-medium text-gray-600">set goal:</p>
              <p className="mr-2 font-black">30 DAYS</p>
            </div>
            <div className="w-full -mt-5 -mb-12">
                <ProgressBar
                  bgcolor={"#FCD34Dcc"}
                  completed={35}
                />
            </div>
            <h2 className="mt-4 font-bold text-xl mr-2 text-gray-900 z-10">
              note for your future self:
            </h2>
            <div className="-mt-[14px] h-[120px] w-full bg-transparent border-4 border-amber-300 border-opacity-80 rounded-xl flex justify-center items-center">
              <p className="p-6 text-xs font-medium text-gray-600">
                I do this because I'm tired of not being the strongest person in
                the room. I want to have arms bigger than Mike T. in his prime.
              </p>
            </div>
            <div className="w-full flex justify-center items-center mt-7">
            <button className="btn bg-[#a7c957] hover:bg-amber-300/80 text-white border-none">click here to log your todays progress. 🚀</button>
            </div>
          </div>
          </div>

          <div className="w-[3px] h-[470px] bg-black/40 mt-8 rounded-full"></div>

                    {/* THIS IS WHERE DIV FOR ONE ENTIRE HABIT ENDS */}

                    <div className="w-[420px]">
          <div className="w-full mt-10 flex flex-col justify-center items-center">
            <h2 className="w-full flex justify-center font-black text-2xl border-4 rounded-xl border-black p-3">
              READ 20 PAGES EVERY DAY
            </h2>
            <div className="flex items-center mt-3">
              <p className="font-bold mr-3 text-xs underline">start day:</p>
              <p className="font-medium text-gray-600"> October 21st 2024</p>
            </div>
            <div className="w-full mt-3 flex justify-center items-center gap-1 border-4 border-amber-300/80 p-3 rounded-xl">
              <p className="mr-2 font-medium text-gray-600">current streak:</p>
              <p className="mr-2 font-black">7 DAYS</p>
              <p className="font-black text-gray-400 -mt-[2px]">|</p>
              <p className="ml-2 mr-2 font-medium text-gray-600">set goal:</p>
              <p className="mr-2 font-black">15 DAYS</p>
            </div>
            <div className="w-full -mt-5 -mb-12">
                <ProgressBar
                  bgcolor={"#a7c957"}
                  completed={68}
                />
            </div>
            <h2 className="mt-4 font-bold text-xl mr-2 text-gray-900 z-10">
              note for your future self:
            </h2>
            <div className="-mt-[14px] h-[120px] w-full bg-transparent border-4 border-[#a7c957] border-opacity-80 rounded-xl flex justify-center items-center">
              <p className="p-6 text-xs font-medium text-gray-600">
                I do this because I'm tired of not being the strongest person in
                the room. I want to have arms bigger than Mike T. in his prime.
              </p>
            </div>
            <div className="w-full flex justify-center items-center mt-7">
            <button className="btn bg-amber-300/80 hover:bg-[#a7c957] text-white border-none">click here to log your todays progress. 🚀</button>
            </div>
          </div>
          </div>
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

export default ProgressTwo;