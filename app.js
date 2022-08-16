import React from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";
import "./styles.css";
import News from "./Components/News/News";
import Header from "./Components/Header/Header";
import TopHeadline from "./Components/TopHeadline/TopHeadline";

function App() {
  return (
    <div>
      <h1 className="text-primary">React Bootstrap</h1>
      <Header></Header>
      
      <TopHeadline></TopHeadline>
    </div>
  );
};

export default App;
// news api kew : 29a59b039abe483eb1a0053677e9e3b7