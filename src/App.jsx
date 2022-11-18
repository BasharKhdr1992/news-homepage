import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
