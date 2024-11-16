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
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
