import React from "react";
import { AboutMe } from "./containers/aboutMe/AboutMe";
import { Header } from "./containers/header/Header";
import { Footer } from "./containers/footer/Footer";
import { NavBar } from "./components/NavBar";
import { ContactMe } from "./containers/contactMe/ContactMe";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App;
