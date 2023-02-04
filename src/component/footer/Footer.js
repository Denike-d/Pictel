import React from "react";

export default function Footer() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#5a5a5a",
          padding: "1rem",
        }}
      >
        <p style={{ color: "white", textDecoration: "none" }}>
          All pictures are gotten from{" "}
          <a
            href="https://www.pexels.com"
            style={{ color: "white", textDecoration: "none" }}
          >
            Pexels
          </a>
          <p
            style={{
              color: "white",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            @Copyright 2023
          </p>
        </p>
      </div>
    </>
  );
}
