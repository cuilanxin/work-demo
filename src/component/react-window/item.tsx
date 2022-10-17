import React, { useState } from "react";
import { DataType, IsMouseMove } from "./";
import style from "./index.less";
import Icon from "./svg";
interface ItemProps extends Partial<DataType> {
  isIcon?: boolean;
  isMouseMove: React.MutableRefObject<IsMouseMove | undefined>;
}

export default function Item(props: ItemProps) {
  const { isMouseMove, disabled, isIcon, label } = props;
  const [isMove, setIsMove] = useState<boolean>(false);

  const onMouseMove = ({ screenX, screenY }: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isMouseMove.current?.screenX === screenX && isMouseMove.current?.screenY === screenY) {
      return;
    }
    isMouseMove.current = {
      screenX: screenX,
      screenY: screenY,
    };
    setIsMove(true);
  };
  const onMouseLeave = ({ screenX, screenY }: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isMouseMove.current?.screenX === screenX && isMouseMove.current?.screenY === screenY) {
      return;
    }
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
      onMouseEnter={disabled ? undefined : onMouseMove}
      onMouseLeave={disabled ? undefined : onMouseLeave}
      title={label as string}
    >
      <span className={style["item-container-span"]}>{label}</span>
      {isIcon && <Icon disabled={disabled!} />}
    </div>
  );
}
