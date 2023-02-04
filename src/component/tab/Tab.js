import React, { useState } from "react";
import "./Tab.scss";

export default function Tab() {
  const [tab, setTab] = useState("home");

  return (
    <>
      <div className="nav">
        <ul className="tab-nav">
          <li
            className={`tab-nav__item ${
              tab === "ongoing" ? "tab-nav__item--active" : ""
            } `}
            onClick={() => setTab("Home")}
          >
            Home
          </li>
          <li
            className={`tab-nav__item ${
              tab === "pending" ? "tab-nav__item--active" : ""
            } `}
            onClick={() => setTab("places")}
          >
            Places
          </li>
          <li
            className={`tab-nav__item ${
              tab === "completed" ? "tab-nav__item--active" : ""
            } `}
            onClick={() => setTab("flowers")}
          >
            Flowers
          </li>
          <li
            className={`tab-nav__item ${
              tab === "cancelled" ? "tab-nav__item--active" : ""
            } `}
            onClick={() => setTab("people")}
          >
            People
          </li>
        </ul>
      </div>
    </>
  );
}
