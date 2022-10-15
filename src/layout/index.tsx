import React from "react";
import Side from "./side";
import Nav from "./nav";
import "./index.css";
import { Outlet } from "react-router-dom";
interface LayoutProps {
  // menu: [];
  // children: JSX.Element;
}

export default function Layout(props: LayoutProps) {
  console.log("props: ", props);
  // const { children } = props;
  props;
  return (
    <div className="layout-container">
      <Nav />
      <Side />
      <div>22</div>
      <Outlet />
    </div>
  );
}
