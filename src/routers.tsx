import { RouteObject } from "react-router-dom";
import React, { lazy } from "react";
import Layout from "./layout";
import RouterLoading from "./router-loading";
// import Home from "./pages/home";

const routes: Array<RouteObject> = [
  {
    path: "/",
    element: <Layout />,
    children: [
      // { index: true, element: RouterLoading(lazy(() => import("./pages/home"))) },
      {
        path: "home",
        id: "首页",
        element: RouterLoading(lazy(() => import("./pages/home"))),
      },
      {
        path: "about",
        id: "新闻",
        element: RouterLoading(lazy(() => import("./pages/about"))),
      },
    ],
  },
  { path: "*", element: <div>404</div> },
];

export default routes;
