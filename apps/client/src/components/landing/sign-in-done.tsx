import { Link } from "react-router-dom";
import Footer from "../shared/footer";
import Navbar from "../shared/navbar";

const SignInDone = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdfcfb] bg-opacity-80 [background-image:radial-gradient(#DEBA6F_0.5px,transparent_0.8px),radial-gradient(#DEBA6F_0.6px,#ebedee_0.5px)] [background-size:20px_20px] [background-position:0_0,10px_10px]">
        <div className="flex flex-col justify-start items-center px-6">
          <h1 className="text-3xl font-bold border-4 border-black rounded-xl p-4 px-6 mt-8">
            congratulations for starting your journey with habitTracker!
          </h1>

          <div className="flex flex-col items-end mt-12 mb-4">
            <h2 className="text-2xl font-bold text-gray-600">
              You can now create your first habit here 👇
            </h2>
            <Link to="/newhabit">
              <button className="btn bg-[#a7c957] hover:bg-amber-300/80 text-white border-none px-4 py-2 mt-5">
                create habit.
              </button>
            </Link>
          </div>

          <div className="mt-12 p-8">
            <p className="text-xl italic bg-amber-300 bg-opacity-60">
              “I'm not a businessman, I'm a BUSINESS, MAN.”
            </p>
            <p className="text-right pr-2 mt-1 font-bold"> - Kanye West</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignInDone;
