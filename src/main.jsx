import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Home, About, Layout, Exercise } from "./pages";

import { ExerciseContextProvider } from "./context/ExerciseContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="exercise/:id" element={<Exercise />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ExerciseContextProvider>
      <RouterProvider router={router} />
    </ExerciseContextProvider>
  </React.StrictMode>
);
