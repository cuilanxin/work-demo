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
        path: "virtual-render",
        id: "虚拟渲染",
        element: RouterLoading(lazy(() => import("./pages/virtual-render"))),
      },
    ],
  },
  { path: "*", element: <div>404</div> },
];

export default routes;
