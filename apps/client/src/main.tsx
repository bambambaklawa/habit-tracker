import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.tsx'
import NewHabit from './components/landing/newhabit.tsx';
import Progress from './components/landing/progress.tsx';
import SubmitDone from './components/landing/submit-done.tsx';
import ProgressTwo from './components/landing/progress-two.tsx';
import StartOver from './components/landing/start-over.tsx';
import Register from './components/landing/register.tsx';
import SignIn from './components/landing/sign-in.tsx';
import SignInDone from './components/landing/register-done.tsx';
import ProgressNone from './components/landing/progress-none.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/newhabit",
    element: <NewHabit/>,
  },
  {
    path: "/progress",
    element: <Progress/>,
  },
  {
    path: "/submit-done",
    element: <SubmitDone/>,
  },
  {
    path: "/progress-two",
    element: <ProgressTwo/>,
  },
  {
    path: "/start-over",
    element: <StartOver/>,
  },
  {
    path: "/sign-in",
    element: <SignIn/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/sign-in-done",
    element: <SignInDone/>,
  },
  {
    path: "/progress-none",
    element: <ProgressNone/>,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
