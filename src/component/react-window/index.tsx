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

export default function ReactWindow(props: ReactWindowProps) {
  const { data } = props;
  // const timer = useRef<NodeJS.Timeout>();
  const containerRef = useRef<HTMLDivElement | null>(); // 容器
  const scrollSentry = useRef<HTMLDivElement | null>(); // translateY的容器
  const sentry = useRef<HTMLDivElement | null>(); // 哨兵
  const scrollHeight = useRef<number>(0); // 滚动条高度
  const sign = useRef<number>(0); // 标记
  const [list, setList] = useState<ReactWindowProps["data"]>([]);
  // -- 需要渲染的 dom
  const needDom = Math.ceil(180 / 32) + 4;
  useEffect(() => {
    // 监听滚动
    containerRef.current!.addEventListener("scroll", onScroll);
    // -- 设置内容高度
    scrollSentry.current!.style.height = data.length * 32 + "px";
    sentry.current!.style.transform = "translateY(0px)";
    sentry.current!.style.overflow = "hidden";
    // --
    // 获取滚动条高度
    scrollHeight.current = containerRef.current!.scrollHeight;
    setList(data.slice(sign.current, needDom + sign.current));
    // --
    return () => {
      containerRef.current!.removeEventListener("scroll", onScroll);
    };
  }, []);
  const onScroll = (event: Event) => {
    event;
    const height = parseInt(scrollSentry.current!.style.height);
    // 滚动条距离
    let scrollTop = containerRef.current!.scrollTop;
    if (scrollTop === 0) {
      sign.current = 0;
    }
    if (scrollTop > 0 && scrollTop < 32) {
      sign.current = 1;
    }
    if (scrollTop > 32) {
      sign.current = Math.floor(scrollTop / 32);
    }
    if (scrollTop + 180 >= height) {
      scrollTop = height - 180;
    }
    setList(data.slice(sign.current, sign.current + needDom));
    sentry.current!.style.transform = `translateY(${scrollTop}px)`;
  };
  return (
    <div className={style["container"]} ref={(ref) => (containerRef.current = ref)}>
      <div ref={(ref) => (scrollSentry.current = ref)}>
        <div style={{ position: "absolute", right: 0, left: 0, top: 0 }} ref={(ref) => (sentry.current = ref)}>
          {list.map((it) => (
            <Item key={it.value} {...it} isIcon />
          ))}
        </div>
      </div>
    </div>
  );
}
