import React from "react";
import style from "./index.less";
import RW, { DataType } from "@/component/react-window";

export default function VirtualRender() {
  const arr: Array<DataType> = [];
  for (let i = 0; i < 20000; i++) {
    const value = `${i.toString(36)}${i}`;
    arr.push({
      label: i === 19999 ? "ζεδΈζ‘" : value,
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
