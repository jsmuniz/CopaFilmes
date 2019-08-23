import React from "react";

import Header from "./Header";
import CardSelection from "../components/CardSelection";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Header />
        <CardSelection />
      </div>
    );
  }
}

export default App;
