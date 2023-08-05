import { lazy } from "react";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { BaseLayout } from "../Layout/BaseLayout";
import CreateContainer from "../pages/CreateContainer";
 export const router = [
   {
    path: "/",
    element: <BaseLayout />,
    children: [
        { path: "", element: <Home /> },
        { path: "createItem", element: <CreateContainer /> },

 
    ]
},
  { path: "*", element: <NotFound /> },
];
