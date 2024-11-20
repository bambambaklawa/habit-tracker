import { UserContext } from "../../UserContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

type LoggedUser = {
  userLoggedIn: boolean;
  username?: string;
};

type UserContextType = {
  user: number;
  setUser: (value: number) => void;
};

const Navbar = () => {
  // const mockUser: LoggedUser = {
  //   userLoggedIn: true,
  //   username: "Big Boy Lukas",
  // };

  // const [loggedUser, setLoggedUser] = useState<LoggedUser | null>(mockUser);

  const { user } = useContext(UserContext) as UserContextType;

  return (
    <div className="navbar bg-gradient-to-br from-amber-300/35 via-yellow-300/60 to-yellow-500/70">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm bg-warning dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <Link to="/progress">
              <li>
                <p className="hover:underline">progress.</p>
              </li>
            </Link>
            <li>
              <p className="hover:bg-none font-bold cursor-default">
                choose a habit
              </p>
              <ul className="p-2">
                <li>
                  <p className="p-2 rounded-md hover:bg-none line-through">
                    eat one rabbit a day
                  </p>
                </li>
                <Link to="/newhabit">
                  <li>
                    <p className="p-2 border-2 font-bold border-black rounded-md hover:bg-green-500">
                      custom yours.
                    </p>
                  </li>
                </Link>
              </ul>
            </li>
          </ul>
        </div>
        <Link to="/">
          <p className="btn btn-ghost text-xl hover:border-2 hover:border-none hover:bg-transparent">
            habitTracker.
          </p>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to="/progress">
            <li>
              <p className="hover:bg-[#a7c957]">your progress</p>
            </li>
          </Link>
          <li>
            <details>
              <summary className="hover:bg-amber-300 z-10">
                choose a habit
              </summary>
              <ul className="p-2 bg-warning z-10">
                <li>
                  <p className="p-2 rounded-md hover:bg-none line-through">
                    step on a lego cube every morning
                  </p>
                </li>
                <Link to="/newhabit">
                  <li>
                    <p className="p-2 border-2 font-bold border-black rounded-md hover:bg-green-500">
                      custom yours.
                    </p>
                  </li>
                </Link>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {user !== null ? (
          <div>
            <p className="btn bg-transparent text-black hover:bg-[#a7c957] mr-1">
              user: {user || "User"}
            </p>
            <button
              className="btn btn-warning mr-1"
              onClick={() => setLoggedUser(null)}
            >
              Log out
            </button>
          </div>
        ) : (
          <div>
            <Link to="/sign-in">
              <p className="btn bg-transparent text-black hover:bg-[#a7c957] mr-1">
                sign in
              </p>
            </Link>
            <Link to="/register">
              <p className="btn btn-warning mr-1">register.</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
