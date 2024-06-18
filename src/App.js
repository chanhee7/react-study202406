import React, { useRef, useState } from "react";
import MainHeader from './components/SideEffect/MainHeader';
import Home from './components/SideEffect/Home';
import Login from './components/SideEffect/Login';
import "./App.css";

const App = () => {
  return (
  <>
    <MainHeader />
    <main>
      {/* <Home /> */}
      {<Login />}
    </main>
  </>
  );
};

export default App;
