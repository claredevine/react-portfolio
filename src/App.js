import React, { Component } from 'react';
import './App.css';
import Hero from "./components/hero";
import Work from "./components/work";
import Recognition from "./components/recognition";
import Features from "./components/features";

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Work />
        <Recognition />
        <Features />
      </div>
    );
  }
}

export default App;
