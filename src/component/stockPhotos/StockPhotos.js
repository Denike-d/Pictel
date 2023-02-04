import React, { useState, useEffect } from "react";
import { pexel } from "../../axios";
import "./StockPhotos.scss";
import BackgroundImage from "./BackgroundImage.jpg";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function StockPhotos() {
  const [home, setHome] = useState([]);
  const [nature, setNature] = useState([]);
  const [food, setFood] = useState([]);
  const [flowers, setFlowers] = useState([]);

  const style = {
    margin: "2rem",
    display: "flex",
    justifyContent: "center",
    gap: "5rem",
    // Adding media query..
    "@media (max-width: 500px)": {
      display: "block",
      gap: "1rem",
    },
  };

  useEffect(() => {
    pexel.get("curated").then((response) => {
      setHome(response.data.photos);
      // console.log(response.data.photos);
    });
  }, []);

  useEffect(() => {
    pexel.get("search?query=food").then((response) => {
      setFood(response.data.photos);
      // console.log(response.data.photos);
    });
  }, []);

  useEffect(() => {
    pexel.get("search?query=nature").then((response) => {
      setNature(response.data.photos);
      // console.log(response.data.photos);
    });
  }, []);

  useEffect(() => {
    pexel.get("search?query=flowers").then((response) => {
      setFlowers(response.data.photos);
      // console.log(response.data.photos);
    });
  }, []);

  return (
    <>
      <Tabs>
        <TabList style={style}>
          <Tab>Home</Tab>
          <Tab>Food</Tab>
          <Tab>Nature</Tab>
          <Tab>Flowers</Tab>
        </TabList>

        <TabPanel>
          <div className="stock-photos">
            <ul className="photos">
              {home.map((photo) => (
                <li key={photo.id}>
                  <div>
                    <img src={photo.src.original} width="100%" />
                    {/* <p>{photo.photographer}</p> */}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="stock-photos">
            <ul className="photos">
              {food.map((photo) => (
                <li key={photo.id}>
                  <div>
                    <img src={photo.src.original} width="100%" />
                    {/* <p>{photo.photographer}</p> */}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="stock-photos">
            <ul className="photos">
              {nature.map((photo) => (
                <li key={photo.id}>
                  <div>
                    <img src={photo.src.original} width="100%" />
                    {/* <p>{photo.photographer}</p> */}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="stock-photos">
            <ul className="photos">
              {flowers.map((photo) => (
                <li key={photo.id}>
                  <div>
                    <img src={photo.src.original} width="100%" />
                    {/* <p>{photo.photographer}</p> */}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}
