import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function DogImage2() {
  const [image, setImage] = useState([]);
  useEffect(() => {
    fetchDogImage();
  }, []);
  const fetchDogImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random/10")
      .then((resp) => resp.json())
      .then((data) => {
        setImage(data.message);
        console.log(image);
      });
  };

  return (
    <div>
      {image.map((item) => (
        <div className="container">
          <img src={item} alt="Error img" />
        </div>
      ))}
    </div>
  );
}

export default DogImage2;
