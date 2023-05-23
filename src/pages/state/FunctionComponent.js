import React, { useState } from "react";

function Demo1() {
  const dispatch = useState({ num: 0 });
  const [num, setNum] = useState(0);
  const onClick = () => {
    /* 一次render 渲染=4 4次的累加
      setNum((val) => val + 1);
      setNum((val) => val + 1);
      setNum((val) => val + 1);
      setNum((val) => val + 1);
    */

    /* 一次render 基本类型  渲染=最后一次的值 100 最后一次的覆盖
      setNum(num + 1);
      setNum(100);
      setNum(100);
    */
    /* 一次render 引用类型 渲染=最后一次的值 
      dispatch[1]({ num: dispatch[0].num + 1 });
      dispatch[1]({ num: dispatch[0].num + 1 });
      dispatch[1]({ num: dispatch[0].num + 1 });
      dispatch[1]({ num: dispatch[0].num + 1 });
      dispatch[1]({ num: dispatch[0].num + 1 });
    */
    Promise.resolve().then(() => {
      /* 异步 两次render 渲染=最后一次的值
        setNum(num + 1);
        setNum(num + 1);
        setNum(num + 1);
        setNum(num + 1);
      */
      /*  异步 五次render  渲染=4
        setNum((val) => val + 1);
        setNum((val) => val + 1);
        setNum((val) => val + 1);
        setNum((val) => val + 1);
      */
      /* 异步 四次render 引用类型 渲染=1 
        dispatch[1]({ num: dispatch[0].num + 1 });
        dispatch[1]({ num: dispatch[0].num + 1 });
        dispatch[1]({ num: dispatch[0].num + 1 });
        dispatch[1]({ num: dispatch[0].num + 1 });
      */
    });
  };
  console.log("render", setNum.valueOf());
  return (
    <div>
      <button onClick={onClick}>按钮</button>
      <h1>{dispatch[0].num}</h1>
      <h1>{num}</h1>
    </div>
  );
}

export default Demo1;
