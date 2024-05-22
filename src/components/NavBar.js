import React from "react";

const NavMenu = () => (
    <nav>
      <p><a href="#Home">Home</a></p>
      <p><a href="#Projects">Projects</a></p>
      <p><a href="#AboutMe">About Me</a></p>
      <p><a href="#Contact">Contact</a></p>
    </nav>
);

export const NavBar = () => {
    return (
    <NavMenu />
    );
};
