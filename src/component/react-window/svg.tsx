/* eslint-disable */
import React from "react";

export default function Svg(props: { disabled: boolean }) {
  return (
    <svg
      // t="1665916840280"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1956"
      width="16"
      height="16"
    >
      <path
        d="M351 960c-8 0-16-3-22.2-9-12.7-12.3-13.1-32.6-0.8-45.3l380.5-394.1L328 118.3c-12.3-12.7-12-33 0.7-45.3s33-12 45.3 0.7l402 415.5c12 12.4 12 32.1 0 44.5L374 950.2c-6.3 6.5-14.6 9.8-23 9.8z"
        p-id="1957"
        fill={props.disabled ? "#00000040" : ""}
      ></path>
    </svg>
  );
}
