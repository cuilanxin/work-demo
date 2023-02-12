function fun() {
  let a = "";
  try {
    return pro1();
  } catch (error) {
    error.then((v) => console.log("cuilanxin -a", v));
    console.log("cuilanxin ", error);
  }
  // console.log("cuilanxin ", a);
  return a;
}
function pro1() {
  pro();
}
function pro() {
  let status = "p";
  const result = new Promise((r) => {
    setTimeout(() => {
      r("结果");
    }, 2000);
  }).then((v) => {
    status = "s";
    return v;
  });
  if (status === "p") throw result;
  return "abc";
}

fun();
