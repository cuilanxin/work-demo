import React, { useState } from "react";
import { DataType } from "./";
import style from "./index.less";
import Icon from "./svg";
interface ItemProps extends Partial<DataType> {
  isIcon?: boolean;
}

export default function Item(props: ItemProps) {
  const [isMove, setIsMove] = useState<boolean>(false);

  const onMouseMove = () => {
    setIsMove(true);
  };
  const onMouseLeave = () => {
    setIsMove(false);
  };
  const onClick = () => {
    setIsMove(true);
  };
  const cls = [style["item-container"], isMove && style["item-move"], props.disabled && style["item-disabled"]]
    .filter((it) => it)
    .join(" ");
  return (
    <div
      className={cls}
      onClick={onClick}
      // onMouseOver={onMouseMove}
      // onMouseOut={onMouseLeave}
      onMouseEnter={onMouseMove}
      onMouseLeave={onMouseLeave}
      title={props.label as string}
    >
      <span className={style["item-container-span"]}>{props.label}</span>
      {props.isIcon && <Icon disabled={props.disabled!} />}
    </div>
  );
}
