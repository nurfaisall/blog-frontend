import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import PostArticle from "./pages/PostArticle";

const baseurl = "http://localhost:8080";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addArticle" element={<PostArticle />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
