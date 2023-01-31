import React, { useState, useEffect } from "react";
import { pexel } from "../../axios";
import "./StockPhotos.scss";
import BackgroundImage from "./BackgroundImage.jpg";

export default function StockPhotos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    pexel.get("curated").then((response) => {
      setPhotos(response.data.photos);
      // console.log(response.data.photos);
    });
  }, []);

  return (
    <>
      <div className="stock-photos">
        <ul className="photos">
          {photos.map((photo) => (
            <li key={photo.id}>
              <div>
                <img src={photo.src.original} width="100%" />
                {/* <p>{photo.photographer}</p> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
