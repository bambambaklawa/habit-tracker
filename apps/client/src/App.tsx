import Hero from "./components/landing/hero";
import "./index.css";
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import { useState } from "react";
import { UserContext } from "./UserContext";

function App() {
  const [user, setUser] = useState<number | null>(null);

  return (
    <>
      <UserContext.Provider value={{user, setUser}}>
        <Navbar />
        <Hero />
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;