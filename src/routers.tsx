import { RouteObject } from "react-router-dom";
import React, { lazy } from "react";
import Layout from "./layout";
import RouterLoading from "./router-loading";
// import Home from "./pages/home";

export default [
  {
    path: "/",
    element: <Layout />,
    children: [
      // { index: true, element: RouterLoading(lazy(() => import("./pages/home"))) },
      {
        path: "home",
        element: RouterLoading(lazy(() => import("./pages/home"))),
      },
      {
        path: "about",
        element: RouterLoading(lazy(() => import("./pages/about"))),
      },
    ],
  },
  { path: "*", element: <div>404</div> },
] as Array<RouteObject>;

// export default arr;
