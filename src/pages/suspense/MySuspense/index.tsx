import React, { useState } from "react";

interface ExoticComponent<P = {}> {
  /**
   * **NOTE**: Exotic components are not callable.
   */
  (props: P): React.ReactElement | null;
  readonly $$typeof: symbol;
}

interface SuspenseProps {
  children?: React.ReactNode | undefined;

  /** A fallback react tree to show when a Suspense child (like React.lazy) suspends */
  fallback?: React.ReactNode;
}

function MySuspense({ fallback, children }: SuspenseProps) {
  const [component, setComponent] = useState(fallback);
  try {
    return children;
  } catch (error) {
    console.log("cuilanxin ------", error);
    if (error instanceof Promise) {
      error.then(() => {
        console.log("cuilanxin error");
        setComponent(children);
      });
    }
  }
  return component;
}

// '$$typeof': Symbol(react.element)
export default MySuspense as ExoticComponent<SuspenseProps>;
