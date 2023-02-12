import Side from "./side";
import Header from "./header";
import Content from "./content";
import style from "./index.less";
import Footer from "./footer";

export default function Layout() {
  return (
    <div className={style["layout-container"]}>
      <Header />
      <Side />
      <Content />
      <Footer />
      <div style={{ clear: "both" }}></div>
    </div>
  );
}
