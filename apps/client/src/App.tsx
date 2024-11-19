import Hero from "./components/landing/hero";
import "./index.css";
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import { CurrentUserProvider } from "./components/shared/current-user";




function App() {


  return (
    <>
        <CurrentUserProvider>
      <Navbar />
        <Hero />
      <Footer />
      </CurrentUserProvider>
    </>
  );
}

export default App;
