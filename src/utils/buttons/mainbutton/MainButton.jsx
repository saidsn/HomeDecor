import React from "react";
import "./MainButton.scss";

const MainButton = ({ children }) => {
  return <button className="main__button btn">{children}</button>;
};

export default MainButton;
