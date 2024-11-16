import { Link } from "react-router-dom";
import Footer from "../shared/footer";
import Navbar from "../shared/navbar";

const NewHabit = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[600px] bg-[#fdfcfb] bg-opacity-80 [background-image:radial-gradient(#DEBA6F_0.5px,transparent_0.8px),radial-gradient(#DEBA6F_0.6px,#ebedee_0.5px)] [background-size:20px_20px] [background-position:0_0,10px_10px]">
        <div className="w-full h-screen flex flex-col justify-start items-center">
          <h1 className="text-6xl font-bold mt-10">
            Start your first habit here
          </h1>{" "}
          <div className="mt-12">
            <label className="p-3 rounded-sm bg-amber-300 bg-opacity-35 flex items-center gap-2">
              <p className="text-black mr-2 font-semibold p-3">habit:</p>
              <input
                type="text"
                className="grow bg-transparent ml-14"
                placeholder="100 push ups every day ..."
              />
            </label>
            <label className="p-3 rounded-sm  bg-amber-300 bg-opacity-35 flex gap-2 mt-2">
              <p className="text-black font-semibold p-3">set goal:</p>
              <div className="flex items-center gap-4 mx-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="goal"
                    value="15 days"
                    className="radio"
                  />
                  <span className="text-xs">15 days</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="goal"
                    value="30 days"
                    className="radio"
                  />
                  <span className="text-xs">30 days</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="goal"
                    value="100 days"
                    className="radio"
                  />
                  <span className="text-xs">100 days</span>
                </label>
              </div>
            </label>
            <p className="p-2 mt-3 -mb-3 text-xs font-bold text-gray-700">
              Write a note to your future self:
            </p>
            <textarea
              className="p-3 rounded-sm w-full h-40 mt-2  bg-amber-300 bg-opacity-35"
              placeholder="I'm going to stick to this habit because..."
            ></textarea>
            <div className="flex justify-end mt-2">
              <Link to="/submit-done"><button className="btn btn-outline bg-[#a7c957] hover:bg-amber-300/80 text-white border-none">submit.</button></Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewHabit;
