import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const App = () => {
  const [open, isOpen] = useState(false);

  const handleSideBar = () => {
    isOpen(!open);
  };
  return (
    <div className="App">
      <div>
        <Header show={open} handleSideBar={handleSideBar} />
      </div>
      <div
        className={open ? "w-4/5 absolute right-0 transition-all" : "w-full "}
      >
        <Navbar show={open} handleSideBar={handleSideBar} />
        <Main></Main>
      </div>
    </div>
  );
};

export default App;
