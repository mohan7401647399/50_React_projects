import React, { useRef } from "react";

const ScrollToSection = () => {
  const ref = useRef();

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "yellow",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
  ];

  const handleToSection = () => {
    let position = ref.current.getBoundingClientRect().top;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <h1>Scroll to Particular Section</h1>
      <button onClick={handleToSection}>Scroll To Section</button>
      {data.map((item, index) => (
        <div ref={index === 4 ? ref : null} style={item.style}>
          <h3> {item.label} </h3>
        </div>
      ))}
    </div>
  );
};

export default ScrollToSection;
