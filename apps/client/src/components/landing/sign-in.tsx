import { Link } from "react-router-dom";
import Footer from "../shared/footer";
import Navbar from "../shared/navbar";

const SignIn = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#fdfcfb] bg-opacity-80 [background-image:radial-gradient(#DEBA6F_0.5px,transparent_0.8px),radial-gradient(#DEBA6F_0.6px,#ebedee_0.5px)] [background-size:20px_20px] [background-position:0_0,10px_10px]">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-6xl font-bold border-4 border-black rounded-xl p-4 px-10">
            login to see your progress.
          </h1>{" "}
          <div className="mt-8">
            <label className="p-3 rounded-sm bg-amber-300 bg-opacity-35 flex items-center gap-2">
              <p className="text-black mr-2 font-semibold p-3">username:</p>
              <input
                type="text"
                className="grow bg-transparent ml-6 pr-6"
                placeholder="RockyBalboa892"
              />
        </label>
        <label className="p-3 rounded-sm bg-amber-300 bg-opacity-35 flex items-center gap-2 mt-2">
              <p className="text-black mr-2 font-semibold p-3">password:</p>
              <input
                type="text"
                className="grow bg-transparent ml-6 pr-6"
                placeholder="yourPaswrd123"
              />
        </label>
            <div className="flex justify-end mt-2">
              <Link to="/progress"><button className="btn btn-outline bg-[#a7c957] hover:bg-amber-300/80 text-white border-none">sign in.</button></Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
