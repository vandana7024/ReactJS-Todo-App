import React from "react";
import "./Footer.css";
export const Footer = () => {
  let footerStyle = {
    // position: "absolute",
    // top: "93vh",
    width: "100%",
    border: "2px solid",
  };

  return (
    <footer id="foo" className="bg-dark text-light py-0" style={footerStyle}>
      <span className="foo"> Copyright : MyTodolist.com</span>
    </footer>
  );
};
