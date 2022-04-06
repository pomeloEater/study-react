import { Route } from "react-router-dom";
import Menu from "./components/Menu";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      {/* 
        react-router-dom@^6.3.0
        Uncaught Error: A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.
      */}
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
    </div>
  );
};

export default App;
