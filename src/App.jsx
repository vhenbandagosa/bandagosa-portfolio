import React from "react";

import { About, Footer, Header, Skills, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import Cursor from "./components/Cursor/Cursor";

const App = () => (
  <div className="app">
    <Cursor />
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Footer />
  </div>
);

export default App;
