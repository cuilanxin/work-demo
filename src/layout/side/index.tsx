import React from "react";
import {
  // useNavigate,
  NavLink,
} from "react-router-dom";
import routers from "@/routers";
import style from "./index.less";

export default function Side() {
  // let navigate = useNavigate(); navigate(it.path!, { replace: true });
  const actived = ({ isActive }: { isActive: boolean; isPending: boolean }) => {
    const style: React.CSSProperties = { color: "#00000073", backgroundColor: "transparent" };
    if (isActive) {
      style.color = "#1890ff";
      style.backgroundColor = " #e6f7ff";
      style.position = "relative";
    }
    return style;
  };
  return (
    <div className={style["side-container"]}>
      {routers[0].children!.map((it) => {
        return (
          <div className={style["side-container-item"]} key={it.path}>
            <NavLink style={actived} to={it.path!}>
              {it.id}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}
