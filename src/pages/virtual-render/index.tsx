import React from "react";
import style from "./index.less";
import RW, { DataType } from "@/component/react-window";

export default function VirtualRender() {
  const arr: Array<DataType> = [];
  for (let index = 0; index < 20000; index++) {
    arr.push({
      label: index === 19999 ? "最后一条" : `数据+${index}`,
      value: index,
      // disabled: !(index % 4),
    });
  }

  return (
    <div className={style["container"]}>
      <RW data={arr} />
    </div>
  );
}
