import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './styles.css';

import MainNav from "./components/mainNav";
import HomePage from "./components/homePage";
import SearchPage from "./components/searchPage";


const routesArray = [
  { linkRoute: "/", linkName: "Lates" },
  { linkRoute: "/search", linkName: "Search" }
];

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <MainNav routes={routesArray} />
        </header>
        <Route path="/" component={HomePage} className="latest" />
        <Route path="/search" component={SearchPage} className="search" />
      </div>
    </Router>
  );
}

export default App;
