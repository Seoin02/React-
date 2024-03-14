import "./assets/css/tailwind.css";
import { BrowserRouter } from "react-router-dom";
import Drawer from "./components/common/Drawer";
import Router from "./router/router";
import { RecoilRoot } from "recoil";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <input type="checkbox" id="side-menu" className="drawer-toggle" />
        <section className="drawer-content">
          {/* Nav를 렌더링 하세요 */}
          <section className="main pt-16">
            <Router />
          </section>
          {/* Footer를 렌더링 하세요 */}
        </section>
        <Drawer />
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
