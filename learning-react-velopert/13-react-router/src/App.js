import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./Layout";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* 각 페이지 컴포넌트가 보여져야 하는 부분에 Outlet 컴포넌트 사용 */}
        <Route index /* path="/" */ element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
        {/* 
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<Article />} />
      */}
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
