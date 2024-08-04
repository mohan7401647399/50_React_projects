import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  //  random nos
  function utilities(length) {
    return Math.floor(Math.random() * length);
  }

  // rbg fn
  function handleCreateRgbColor() {
    const r = utilities(256);
    const g = utilities(256);
    const b = utilities(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  //  hex fn
  function handleCreateHexColor() {
    let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[utilities(hex.length)];
    }
    setColor(hexColor);
  }

  // state rendering
  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRgbColor();
    else handleCreateHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100we",
        height: "fit-content",
        background: color,
        margin: "10px",
        padding: "10px",
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB color </button>
      <button
        onClick={
          typeOfColor === "hex" ? handleCreateHexColor : handleCreateRgbColor
        }
      >
        Generate Random color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "10px",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"} </h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
