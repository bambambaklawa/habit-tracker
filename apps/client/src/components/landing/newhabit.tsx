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
            </h1>          <div className="mt-12">
            <label className="p-3 rounded-sm bg-gradient-to-br from-[rgba(241,233,225,0.98)] to-[rgba(239,199,160,0.98)] flex items-center gap-2">
              <p className="text-black mr-2 font-semibold">Habit</p>
              <input type="text" className="grow bg-transparent" placeholder="100 push ups every day" />
            </label>
            <label className="p-3 rounded-sm bg-gradient-to-br from-[#f1e9e1fb] to-[#efc7a0f0] flex items-center gap-2 mt-2">
              <p className="text-black mr-2 font-semibold">Start day</p>
              <input type="text" className="bg-transparent" placeholder="Today"/>
            </label>
            <p className="p-2 mt-3 -mb-3 text-xs font-semibold text-gray-700">Write a note to your future self:</p>
            <textarea className="p-3 rounded-sm w-full h-40 mt-2 bg-gradient-to-br from-[#f1e9e1fb] to-[#efc7a0f0]" placeholder="I'm going to stick to this habit because..."></textarea>
           <div className="flex justify-end mt-2">
            <button className="btn btn-outline btn-success">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewHabit;
