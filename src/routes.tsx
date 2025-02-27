import { RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";
import ProfilePage from "./pages/ProfilePage";
import RootLayout from "./layouts/RootLayout";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "form",
        element: <FormPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
];
