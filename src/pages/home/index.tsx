import React, { useRef, useEffect, useState } from "react";
interface RecordProps {
  name: string;
}
interface A {
  name: string;
  age: number;
}
export default function index() {
  const dv = useRef<HTMLDivElement | null>();
  const [record, setRecord] = useState<RecordProps>({ name: "" });
  useEffect(() => {
    console.log("useeffect, ", dv.current);
  }, []);
  const clickBtn = () => {
    const clic = (para: RecordProps) => {
      para.name;
    };
    const obj: A = {
      name: "abc",
      age: 19,
    };
    clic(obj);

    setRecord(obj);
  };
  return (
    <div
      ref={(ref) => {
        clickBtn;
        console.log("ref");
        dv.current = ref;
      }}
    >
      home{record}
    </div>
  );
}
