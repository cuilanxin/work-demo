import React, { useRef, useEffect, useState } from "react";
import Item from "./item";
import style from "./index.less";
export interface DataType {
  label: string | React.ReactNode;
  value: string | number;
  disabled?: boolean;
}
interface ReactWindowProps {
  data: Array<DataType>;
}

export interface IsMouseMove {
  screenX: number;
  screenY: number;
}
export default function ReactWindow(props: ReactWindowProps) {
  const { data } = props;
  const containerRef = useRef<HTMLDivElement | null>(); // 容器
  const scrollSentry = useRef<HTMLDivElement | null>(); // translateY的容器
  const sign = useRef<number>(0); // 标记
  const isMouseMove = useRef<IsMouseMove>();
  const [translateY, setTranslateY] = useState(0);
  const [list, setList] = useState<ReactWindowProps["data"]>([]);
  // -- 需要渲染的 dom
  const needDom = useRef<number>(10);

  useEffect(() => {
    // -- 设置内容高度
    scrollSentry.current!.style.height = data.length * 32 + "px";
    // --
    setList(data.slice(sign.current, needDom.current + sign.current));
    // --
  }, []);

  const onScroll = () => {
    // 滚动条距离
    let scrollTop = containerRef.current!.scrollTop;
    if (scrollTop < 32) {
      sign.current = 0;
    } else {
      sign.current = Math.floor(scrollTop / 32);
    }
    const newTranslateY = sign.current * 32;
    const deviation = Math.abs(translateY - newTranslateY);
    if (deviation < 32) return;
    setTranslateY(newTranslateY);
    const newList = data.slice(sign.current, sign.current + needDom.current);
    if (newList[0] === list[0]) return;
    setList(newList);
  };

  return (
    <div
      className={style["container"]}
      onScroll={onScroll}
      ref={(ref) => {
        containerRef.current = ref;
        if (ref) {
          needDom.current = Math.ceil(ref!.getClientRects()[0].height / 32) + 3;
        }
      }}
    >
      <div ref={(ref) => (scrollSentry.current = ref)}>
        <div
          style={{
            position: "absolute",
            right: 0,
            left: 0,
            top: 0,
            transform: `translateY(${translateY}px)`,
          }}
        >
          {list.map((it) => (
            <Item isMouseMove={isMouseMove} key={it.value} {...it} isIcon />
          ))}
        </div>
      </div>
    </div>
  );
}
