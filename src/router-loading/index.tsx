import React from "react";
import "./index.css";

const RouterLoading = (Component: React.LazyExoticComponent<() => JSX.Element>) => {
  const Child: React.FC<any> = (props) => (
    <React.Suspense fallback={<div className="router-loading">loading</div>}>
      <Component {...props} />
    </React.Suspense>
  );
  return <Child />;
};

export default RouterLoading;
