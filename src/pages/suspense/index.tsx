import React from "react";
import MySuspense from "./MySuspense";

export default function index() {
  return (
    <MySuspense fallback={<div>fallback</div>}>
      <A />
    </MySuspense>
  );
  return (
    <React.Suspense fallback={<h1>loading</h1>}>
      <A />
      <div>捕获promise 的报错，添加then回调，当then回调调用时，就是更新组件时</div>
    </React.Suspense>
  );
}
let status = "pending";
let result = "";
const data: Promise<string> = new Promise((resolve) => setTimeout(() => resolve("结果"), 2000));

function wrapPromise(promise: Promise<string>) {
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    },
  );
  if (status === "pending") {
    throw suspender;
  } else if (status === "error") {
    throw result;
  } else if (status === "success") {
    return result;
  }
}
function A() {
  const result = wrapPromise(data);
  console.log("result", result);
  return <div>cuilanxin{result}</div>;
}
