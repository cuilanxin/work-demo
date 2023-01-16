import React from "react";
import style from "./index.less";
import RW, { DataType } from "@/component/react-window";

export default function VirtualRender() {
  const arr: Array<DataType> = [];
  for (let i = 0; i < 50; i++) {
    const value = `${i.toString(36)}${i}`;
    arr.push({
      label: i === 19999 ? "最后一条" : value,
      value: i,
      // disabled: !(index % 4),
    });
  }

  return (
    <div className={style["container"]}>
      <RW data={arr} />
    </div>
  );
}
