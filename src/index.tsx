import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  Link,
  useRoutes,
  // Routes,
  // Route,
} from "react-router-dom";
import routes from "./routers";

const Routes = () => {
  return useRoutes(routes);
};
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="product">Product</Link>
      </nav>
      <Routes />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
