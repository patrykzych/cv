import React from 'react';

import Menu from "./component/Menu";
import Image from "./component/Image";
import Technology from "./component/Technology";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Menu />
      <div className="space"></div>
      <Image />
      <Technology />
    </div>
  );
}

export default App;
