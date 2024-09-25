import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import Drawer from "./components/common/Drawer";
import Router from "./router/router";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import "./assets/css/tailwind.css";
import Loading from "./components/common/Loading";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Error from "./views/Error";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>
          <label htmlFor="side-menu" className="sr-only">
            side-menu
          </label>
          <input type="checkbox" id="side-menu" className="drawer-toggle" />
          <section className="drawer-content">
            <Nav />
            <section className="main pt-16">
              <Router />
            </section>
            <Footer />
          </section>
          <Drawer />
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
