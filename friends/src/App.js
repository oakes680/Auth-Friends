import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import { withRouter  } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
