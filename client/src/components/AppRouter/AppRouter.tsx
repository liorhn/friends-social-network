import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { ForgotPassword } from "../ForgotPassword/ForgotPassword";
import { SucessRegister } from "../SucessRegister/SucessRegister";
import { Posts } from "../Posts/Posts";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/home", element: <Login /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/reset-password", element: <ForgotPassword /> },
  { path: "/registration-complete", element: <SucessRegister /> },
  { path: "/posts", element: <Posts /> },
  {},
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
