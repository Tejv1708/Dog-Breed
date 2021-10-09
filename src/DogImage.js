import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function DogImage() {
  const [image, setImage] = useState([]);
  useEffect(() => {
    fetchDogImage();
  }, []);
  const fetchDogImage = () => {
    fetch("https://dog.ceo/api/breed/shihtzu/images/random/10")
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
export default DogImage;
