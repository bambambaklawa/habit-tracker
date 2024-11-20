import { Link } from "react-router-dom";
import Footer from "../shared/footer";
import Navbar from "../shared/navbar";
import ProgressTimeline from "./progress-timeline";


const ProgressNone = () => {
  
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#fdfcfb] bg-opacity-80 [background-image:radial-gradient(#DEBA6F_0.5px,transparent_0.8px),radial-gradient(#DEBA6F_0.6px,#ebedee_0.5px)] [background-size:20px_20px] [background-position:0_0,10px_10px]">
        <div className="w-full flex flex-col justify-start items-center">
          <h1 className="text-6xl font-bold mt-10 border-4 border-black rounded-xl p-4 px-6">you don't have any habits to track.</h1>

<div>
<div className="flex flex-col items-end">
            <h2 className="text-2xl font-bold mt-10 text-gray-600">
              You can create your first habit here 👇
            </h2>
            <Link to="/newhabit">
              <button className="btn bg-[#a7c957] hover:bg-amber-300/80 text-white border-none mt-5">create habit.</button>
            </Link>
          </div>


                    </div>
          <div className="m-12">
            <ProgressTimeline />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgressNone;