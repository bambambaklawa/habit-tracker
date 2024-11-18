// import Stats from "./stats.tsx";
import habitHero from "../../assets/habitHero.png";
import Grid from "./grid.tsx";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-[70vh] bg-[#fdfcfb] bg-opacity-80 [background-image:radial-gradient(#DEBA6F_0.5px,transparent_0.8px),radial-gradient(#DEBA6F_0.6px,#ebedee_0.5px)] [background-size:20px_20px] [background-position:0_0,10px_10px]">
        <div className="hero-content flex flex-col text-center">
          <div className="w-2/3 flex flex-col items-center">
            <img src={habitHero} className="w-1/2 my-6 z-0"></img>
            <h1 className="text-6xl font-bold">
              the first day
              <br />
              of your new habit
            </h1>
            <div className="flex justify-center items-center mt-2">
            <p className="text-1xl py-6">this journey starts with one click</p>
            <p className="ml-2">👉</p>
            <Link to="/newhabit"><button className="btn bg-[#a7c957] hover:bg-amber-300/80 text-white border-none ml-2">start habit.</button></Link>
            </div>
            <h1 className="text-2xl font-bold mt-12 -mb-6 text-amber-500/70">
              why stick to your habits? Well, let's see:
            </h1>
          </div>
          <div>
            <div className="my-4">
              <Grid />
            </div>
          </div>
          {/* <div className="-mt-14 mb-10">
            <Stats />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
