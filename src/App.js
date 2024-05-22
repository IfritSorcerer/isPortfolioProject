import React from "react";
import { AboutMe } from "./containers/aboutMe/AboutMe";
import { Header } from "./containers/header/Header";
import { Footer } from "./containers/footer/Footer";

import { ContactMe } from "./containers/contactMe/ContactMe";
import { LangStack } from "./containers/Languages/LanguageStack";
import { SideBar } from "./components/SideBar";
function App() {
  return (
    <div className="App">
      <SideBar />
      <Header />
      <AboutMe />
      <LangStack />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App;
