import { Route, Routes } from "react-router-dom";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";
import MainPage from "./pages/MainPage.v6";

const App = () => {
  return (
    <Routes>
      <Route element={<MainPage />}>
        <Route index element={<></>} />
        <Route path="/red" element={<RedPage />} />
        <Route path="/blue" element={<BluePage />} />
      </Route>
    </Routes>
  );
};

export default App;
