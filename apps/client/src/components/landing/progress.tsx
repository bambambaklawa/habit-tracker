import Footer from "../shared/footer";
import Navbar from "../shared/navbar";
import ProgressTimeline from "./progress-timeline";

const Progress = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[600px] bg-[#fdfcfb] bg-opacity-80 [background-image:radial-gradient(#DEBA6F_0.5px,transparent_0.8px),radial-gradient(#DEBA6F_0.6px,#ebedee_0.5px)] [background-size:20px_20px] [background-position:0_0,10px_10px]">
        <div className="w-full h-screen flex flex-col justify-start items-center">
          <h1 className="text-6xl font-bold mt-10">
            See your progress here
          </h1>
          <div className="mt-10 flex flex-col justify-center items-center">
            <h2 className="font-black text-2xl border-4 rounded-xl border-black p-2">100 PUSH UPS EVERY DAY</h2>
            <h2 className="flex mt-3"><p className="font-bold mr-2">start day:</p> November 19th 2024</h2>
            <h2 className="mt-1 font-bold text-xl mr-2 text-gray-900 z-10">note for your future self:</h2>
            <div className="-mt-[14px] h-[120px] w-[400px] bg-transparent border-4 border-amber-500 border-opacity-40 rounded-xl flex justify-center items-center">
            <p className="p-6 text-xs font-medium text-gray-600">I do this because I'm tired of not being the strongest person in the room. 
                I want to have arms bigger than Mike T. in his prime.</p>
            </div>
          </div>
          <div className="m-8">
          <ProgressTimeline/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Progress;
