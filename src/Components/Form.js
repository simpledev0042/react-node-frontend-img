import React from "react";
import Information from "./Information";
import Preview from "./Preview";
import "./form.css";
import About from "./About";

function Form() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <About />
        <div className="form">
          <Information />
          <Preview />
        </div>
    </div>
  );
}

export default Form;
