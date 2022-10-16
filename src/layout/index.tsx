import React from "react";
import Side from "./side";
import Header from "./header";
import Content from "./content";
import "./index.less";
interface LayoutProps {
  // menu: [];
  // children: JSX.Element;
}

export default function Layout(props: LayoutProps) {
  props;
  return (
    <div className="layout-container">
      <Header />
      <Side />
      <Content />
      <div className="footer-container">footer</div>
    </div>
  );
}
