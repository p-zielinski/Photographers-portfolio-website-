import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Navigation from "./components/Navigation";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import { Switch, Route, useLocation } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
//Animation
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <ScrollTop />
      <GlobalStyle />
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path={"/work/:id"}>
            <MovieDetail />
          </Route>
          <Route path={"/work"}>
            <OurWork />
          </Route>
          <Route path={"/contact"}>
            <ContactUs />
          </Route>
          <Route path={"/"}>
            <AboutUs />
          </Route>
          //ros/kop/zr
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
