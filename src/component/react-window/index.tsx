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
const itemHeight = 32;
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
    scrollSentry.current!.style.height = data.length * itemHeight + "px";
    needDom.current = Math.ceil(containerRef.current!.getClientRects()[0].height / itemHeight) + 3;
    // --
    setList(data.slice(sign.current, needDom.current + sign.current));
    // --
  }, [needDom, data]);

  const onScroll = () => {
    // 滚动条距离
    let scrollTop = containerRef.current!.scrollTop;
    if (scrollTop < itemHeight) {
      sign.current = 0;
    } else {
      sign.current = Math.floor(scrollTop / itemHeight);
    }
    const newTranslateY = sign.current * itemHeight;
    const deviation = Math.abs(translateY - newTranslateY);
    if (deviation < itemHeight) return;
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
      }}
    >
      <div ref={(ref) => (scrollSentry.current = ref)}>
        <div
          style={{
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
