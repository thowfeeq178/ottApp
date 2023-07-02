import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./pages/home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from "./pages/movies";
import Header from "./components/header";
import Details from "./pages/details";
import Player from "./pages/player";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route path="details/:detailsId" element={<Details />} />
        <Route path="player/:assetId" element={<Player />} />
      </Routes>
    </Router>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
