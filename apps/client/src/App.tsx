import Hero from "./components/landing/hero";
import "./index.css";
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
// import { CurrentUserProvider } from "./components/shared/current-user";
// import { useContext } from "react";
import { useState } from "react";
import { MyContext as UserContext } from "./MyContext";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Hero />
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
