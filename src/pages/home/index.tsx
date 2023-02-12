import React, { useRef, useEffect, useState } from "react";

export default function Component() {
  const dv = useRef<HTMLDivElement | null>();
  const [, setState] = useState<{}>({});
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    console.log("useeffect, 钩子执行", dv.current);
  }, []);

  return (
    <div
      ref={(ref) => {
        console.log("ref函数执行");
        dv.current = ref;
      }}
    >
      <h2>ref函数与useEffect执行顺序</h2>
      <ul>
        <li>1.先执行ref函数, 再执行useEffect</li>
        <li>2.组件更新\卸载会重新执行ref函数</li>
        <li>3.元素卸载,元素创建,会重新执行ref函数</li>
      </ul>
      <button onClick={() => setState({})}>更新组件</button>
      <button onClick={() => setIsShow(!isShow)}>显示隐藏</button>
      {isShow && (
        <div
          ref={() => {
            console.log("ref函数- 点击显示隐藏按钮");
          }}
        >
          创建删除此div也会执行ref
        </div>
      )}
      <h2>useEffect执行俩次</h2>
      <ul>
        <li>1.这是 React18 才新增的特性。</li>
        <li>
          2.仅在开发模式("development")下，且使用了严格模式("Strict Mode")下会触发。
          生产环境("production")模式下和原来一样，仅执行一次。
        </li>
        <li>
          3.之所以执行两次，是为了模拟立即卸载组件和重新挂载组件。 为了帮助开发者提前发现重复挂载造成的 Bug 的代码。
          同时，也是为了以后 React的新功能做铺垫。 未来会给 React 增加一个特性，允许 React
          在保留状态的同时，能够做到仅仅对UI部分的添加和删除。 让开发者能够提前习惯和适应，做到组件的卸载和重新挂载之后， 重复执行
          useEffect的时候不会影响应用正常运行。
        </li>
        <li> 让开发者能够提前习惯和适应，做到组件的卸载和重新挂载之后， 重复执行 useEffect的时候不会影响应用正常运行。</li>
      </ul>
    </div>
  );
}
