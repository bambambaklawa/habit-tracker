import { Link } from "react-router-dom";
import Footer from "../shared/footer";
import Navbar from "../shared/navbar";

const SubmitDone = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#fdfcfb] bg-opacity-80 [background-image:radial-gradient(#DEBA6F_0.5px,transparent_0.8px),radial-gradient(#DEBA6F_0.6px,#ebedee_0.5px)] [background-size:20px_20px] [background-position:0_0,10px_10px]">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-4xl font-bold border-4 border-black rounded-xl p-4 px-10">
            congratulations for starting your first habit!
          </h1>
          <div className="flex flex-col items-end">
            <h2 className="text-2xl font-bold mt-6 text-gray-600">
              You can now see your current progress here 👇
            </h2>
            <Link to="/progress">
              <button className="btn bg-[#a7c957] hover:bg-amber-300/80 text-white border-none mt-5">progress.</button>
            </Link>
          </div>
          <div className="mt-8 p-8">
            <p className="text-xl italic bg-amber-300 bg-opacity-60">“Going in one more round when you don’t think you can. That’s what makes all the difference in your life.”</p>
            <p className="text-right pr-2 mt-1 font-bold"> - Rocky Balboa</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubmitDone;
