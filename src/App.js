import "./App.css";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from "./pages/movies";
import Header from "./components/header";
import Details from "./pages/details";
import Player from "./pages/player";
import Home from "./pages/home";

function App() {
  const { focusKey } = useFocusable();
  return (
    <div className="App">
      <FocusContext.Provider value={focusKey}>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/movies" element={<Movies />} />
            <Route path="details/:detailsId" element={<Details />} />
            <Route path="player/:assetId" element={<Player />} />
          </Routes>
        </Router>
      </FocusContext.Provider>
    </div>
  );
}

export default App;
