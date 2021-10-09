import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import "./App.css";
function DogData() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    name();
  }, []);
  const name = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((resp) => resp.json())
      .then((data) => {
        const Items_1 = Object.keys(data.message);
        setItems((items) => Items_1);
        console.log(Items_1);
      });
  };

  return (
    <>
      <div>
        {items.map((item) => (
          <h1 style={{ color: "red" }}>{item}</h1>
        ))}
      </div>
    </>
  );
}

export default DogData;
