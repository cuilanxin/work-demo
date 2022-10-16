import React from "react";
import Side from "./side";
import Header from "./header";
import Content from "./content";
import style from "./index.less";
import Footer from "./footer";
interface LayoutProps {
  // menu: [];
  // children: JSX.Element;
}

export default function Layout(props: LayoutProps) {
  props;
  return (
    <div className={style["layout-container"]}>
      <Header />
      <Side />
      <Content />
      <Footer />
      <div style={{ clear: "both" }}></div>
    </div>
  );
}
