import { useNavigate } from "react-router-dom";
import Footer from "../shared/footer";
import Navbar from "../shared/navbar";
import { useState } from "react";

const BASE_URL = 'http://localhost:8080'

const Register = () => {
  const [users, setUsers] = useState([
    {
      username: "abcdeg",
      password: "password",
      email: "ba@gmail.com",
    },
  ]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (username && password && email) {
      const newUser = {
        username,
        password,
        email,
      };
      
      await fetch (`${BASE_URL}/users`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser) 
      })

      setUsers([...users, newUser]);
      setUsername("");
      setPassword("");
      setEmail("");
      setError("");
      navigate("/sign-in-done");
    } else {
      setError("Porfa fill out all of the three fields! 🐽");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="h-[600px] bg-[#fdfcfb] bg-opacity-80 [background-image:radial-gradient(#DEBA6F_0.5px,transparent_0.8px),radial-gradient(#DEBA6F_0.6px,#ebedee_0.5px)] [background-size:20px_20px] [background-position:0_0,10px_10px]">
        <div className="w-full h-screen flex flex-col justify-start items-center">
          <h1 className="text-6xl mt-10 font-bold border-4 border-black rounded-xl p-4 px-10">
            register new user.
          </h1>{" "}
          <div className="mt-8">
            {error && (
              <p className="text-red-500 font-semibold flex justify-center mb-2">
                {error}
              </p>
            )}
            <label className="p-3 rounded-sm bg-amber-300 bg-opacity-35 flex items-center gap-2">
              <p className="text-black mr-2 font-semibold p-3">username:</p>
              <input
                type="text"
                className="grow bg-transparent ml-6 pr-6"
                placeholder="RockyBalboa892"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label className="p-3 rounded-sm bg-amber-300 bg-opacity-35 flex items-center gap-2 mt-2">
              <p className="text-black mr-2 font-semibold p-3">password:</p>
              <input
                type="password"
                className="grow bg-transparent ml-6 pr-6"
                placeholder="chooseStrngPaswrd123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label className="p-3 rounded-sm bg-amber-300 bg-opacity-35 flex items-center gap-2 mt-2">
              <p className="text-black mr-2 font-semibold p-3">email:</p>
              <input
                type="text"
                className="grow bg-transparent ml-6 pr-2"
                placeholder="allEmailsAreGucci@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <div className="flex justify-end mt-2">
              <button
                onClick={handleRegister}
                className="btn btn-outline bg-[#a7c957] hover:bg-amber-300/80 text-white border-none"
              >
                register.
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
