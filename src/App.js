import React from "react";
import { AboutMe } from "./containers/aboutMe/AboutMe";
import { Header } from "./containers/header/Header";
import { Footer } from "./containers/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default App;
