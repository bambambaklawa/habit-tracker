import Hero from "./components/landing/hero";
import "./index.css";
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import { useState } from "react";
import  { MyContext } from "./MyContext";



function App() {
  const [user, setUser] = useState<number | null>(null);

  return (
    <>
      <MyContext.Provider value={{user, setUser}}>
        <Navbar />
        <Hero />
        <Footer />
      </MyContext.Provider>
    </>
  );
}

export default App;