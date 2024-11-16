import Stats from "./stats.tsx";
import habitHero from "../assets/habitHero.png";
import Grid from "./grid.tsx";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-[70vh] bg-gradient-to-br from-[#fdfbfb] to-[#ebedee]">
        <div className="hero-content flex flex-col text-center">
          <div className="w-2/3 flex flex-col items-center">
            <img src={habitHero} className="w-1/2 my-6 z-0"></img>
            <h1 className="text-6xl font-bold">
              the first day
              <br />
              of your new habit.
            </h1>
            <p className="text-1xl py-6">the journey starts with one click .</p>
            <button className="btn btn-success">start habit.</button>
          </div>
          <div>
            <div className="my-4">
              <Grid />
            </div>
          </div>
          <div className="-mt-14 mb-10">
            <Stats />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
