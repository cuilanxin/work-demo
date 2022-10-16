import React from "react";
import { Outlet } from "react-router-dom";
import style from "./index.less";

export default function Content() {
  return (
    <div className={style["content-container"]}>
      <Outlet />
    </div>
  );
}
