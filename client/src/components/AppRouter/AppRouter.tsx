import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { ForgotPassword } from "../ForgotPassword/ForgotPassword";
import { SucessRegister } from "../SucessRegister/SucessRegister";
import { Posts } from "../Feed/FeedPage";
import { PageRequireAuth } from "./PageRequireAuth";
import { LoggedInUserCheck } from "./LoggedInUserCheck";
import { Profile } from "../Profile/Profile";
import { Friends } from "../Feed/Friends";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/reset-password", element: <ForgotPassword /> },
  { path: "/registration-complete", element: <SucessRegister /> },
  {
    path: "/",
    element: (
      <PageRequireAuth>
        <Posts />
      </PageRequireAuth>
    ),
  },
  {
    path: "/home",
    element: (
      <PageRequireAuth>
        <Posts />
      </PageRequireAuth>
    ),
  },
  {
    path: "/posts",
    element: (
      <PageRequireAuth>
        <Posts />
      </PageRequireAuth>
    ),
  },
  {
    path: "/profile", element: (
      <PageRequireAuth>
        <Profile />
      </PageRequireAuth>
    )
  },
  {
    path: "/friends", element: (
      <PageRequireAuth>
        <Friends />
      </PageRequireAuth>
    )
  }
]);

export function AppRouter() {
  return (
    <LoggedInUserCheck>
      <RouterProvider router={router} />
    </LoggedInUserCheck>
  );
}

