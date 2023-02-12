import React, { ExoticComponent } from "react";
import "./index.css";

const RouterLoading = (Component: ExoticComponent /*React.ComponentType<any>*/) => {
  const Child: React.FC<any> = () => (
    <React.Suspense fallback={<div className="router-loading">loading</div>}>
      <Component />
    </React.Suspense>
  );
  return <Child />;
};

export default RouterLoading;
