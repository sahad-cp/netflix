import React from "react";

import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import {action,originals} from './Urls'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost Urls={originals} title='Netflix Originals'/>
      <RowPost Urls={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
