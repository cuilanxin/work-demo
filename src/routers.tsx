import { RouteObject } from "react-router-dom";
import React, { lazy } from "react";
import Layout from "./layout";
import RouterLoading from "./router-loading";
// import Home from "./pages/home";
import Suspense from "./pages/suspense";

const routes: Array<RouteObject> = [
  {
    path: "/",
    element: <Layout />,
    children: [
      // { index: true, element: RouterLoading(lazy(() => import("./pages/home"))) },
      {
        path: "home",
        id: "首页",
        // element: <Home />,
        element: RouterLoading(lazy(() => import("./pages/home"))),
      },
      {
        path: "suspense",
        id: "React.Suspense",
        element: <Suspense />,
        // element: RouterLoading(lazy(() => import("./pages/suspense"))),
      },
      {
        path: "life-cycle",
        id: "生命周期",
        element: RouterLoading(lazy(() => import("./pages/life-cycle"))),
      },
      {
        path: "virtual-render",
        id: "虚拟渲染",
        element: RouterLoading(lazy(() => import("./pages/virtual-render"))),
      },
      {
        path: "state",
        id: "setState",
        element: RouterLoading(lazy(() => import("./pages/state"))),
      },
    ],
  },
  { path: "*", element: <div>404</div> },
];

export default routes;
