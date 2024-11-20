import { useState } from "react";
import { UserContext } from "./UserContext";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import Landing from "./Landing.tsx";
import NewHabit from "./components/landing/newhabit.tsx";
import Progress from "./components/landing/progress.tsx";
import SubmitDone from "./components/landing/submit-done.tsx";
import ProgressTwo from "./components/landing/progress-two.tsx";
import StartOver from "./components/landing/start-over.tsx";
import Register from "./components/landing/register.tsx";
import SignIn from "./components/landing/sign-in.tsx";
import SignInDone from "./components/landing/sign-in-done.tsx";
import ProgressNone from "./components/landing/progress-none.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/newhabit",
    element: <NewHabit />,
  },
  {
    path: "/progress",
    element: <Progress />,
  },
  {
    path: "/submit-done",
    element: <SubmitDone />,
  },
  {
    path: "/progress-two",
    element: <ProgressTwo />,
  },
  {
    path: "/start-over",
    element: <StartOver />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/sign-in-done",
    element: <SignInDone />,
  },
  {
    path: "/progress-none",
    element: <ProgressNone />,
  },
]);

export default function App() {
  const [user, setUser] = useState<number | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}