import React from "react";

export const SideBar = () => {
  return (
    <section className="sidebar">
      <div className="classInfo">
        <img src="#" alt="Ian" />
        <p>Class: Bard</p>
        <p>Level: 1</p>
        <p>Pronouns: He/Him</p>
      </div>
      <div className="statsInfo">
        <div className="stat">
          <p>STR</p>
          <p>8</p>
          <p>-1</p>
        </div>
        <div className="stat">
          <p>DEX</p>
          <p>15</p>
          <p>+2</p>
        </div>
        <div className="stat">
          <p>CON</p>
          <p>13</p>
          <p>+1</p>
        </div>
        <div className="stat">
          <p>INT</p>
          <p>12</p>
          <p>+1</p>
        </div>
        <div className="stat">
          <p>WIS</p>
          <p>10</p>
          <p>0</p>
        </div>
        <div className="stat">
          <p>CHA</p>
          <p>14</p>
          <p>+2</p>
        </div>
      </div>
    </section>
  );
};
