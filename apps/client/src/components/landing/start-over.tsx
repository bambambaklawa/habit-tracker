import { Link } from "react-router-dom";
import Footer from "../shared/footer";
import Navbar from "../shared/navbar";

const StartOver = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#fdfcfb] bg-opacity-80 [background-image:radial-gradient(#DEBA6F_0.5px,transparent_0.8px),radial-gradient(#DEBA6F_0.6px,#ebedee_0.5px)] [background-size:20px_20px] [background-position:0_0,10px_10px]">
        <div className="w-full flex flex-col items-center gap-8">
          <h1 className="text-4xl font-bold border-4 border-black rounded-xl p-4 px-10">
            don't worry if you have to start over.
          </h1>
          <div className="flex flex-col items-end">
            <h2 className="text-2xl font-bold mt-12 text-gray-600">
              Greatness comes by standing up after every fall
            </h2>
            <h3 className="text-xs font-medium text-gray-500">now choose whether you want to start the same habit over or remove it 👇</h3>
            <div className="flex gap-2">
            <Link to="/newhabit">
              <button className="btn bg-[#a7c957] hover:bg-amber-300/80 text-white border-none mt-5">start over.</button>
            </Link>
            <Link to="/">
              <button className="btn bg-transparent hover:bg-red-500 text-black hover:border-red-500 border-red-500 mt-5">remove habit</button>
            </Link>
            </div>
          </div>
          <div className="mt-12">
            <p className="text-xl italic bg-amber-300 bg-opacity-60">"You f*cked up? You deal with it. You pick up the pieces and you go on from there."</p>
            <p className="text-right pr-2 mt-1 font-bold"> - Tony Soprano</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StartOver;
