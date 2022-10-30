import React from 'react';
import './App.css';
import {ColorsList} from "./components/ColorsList";
import {Navbar} from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <ColorsList />
    </div>
  );
}
