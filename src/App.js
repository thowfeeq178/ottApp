import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from "./pages/movies";
import Header from "./components/header";
import Details from "./pages/details";
import Player from "./pages/player";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route path="details/:detailsId" element={<Details />} />
          <Route path="player/:assetId" element={<Player />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

function PageNotFound() {
  return (
    <div>
      <h2>Page not found</h2>
    </div>
  );
}
