import React, { useEffect, useState } from "react";
import BackgroundImage from "./BackgroundImage.jpg";
import "./Banner.scss";
import Search from "./Search.svg";

import { useNavigate } from "react-router-dom";

import { getSearchResults } from "../../axios";
import { pexel } from "../../axios";
import SearchResult from "../../pages/SearchResult/SearchResult";

export default function Banner() {
  const [userInput, setUserInput] = useState("");
  // const [searchResults, setSearchResults] = useState();

  let navigate = useNavigate();

  function handleSearchResults(e) {
    e.preventDefault();
    allSearchResults();
  }

  async function allSearchResults() {
    await pexel.get(`search?query=${userInput}`).then((response) => {
      navigate("/query", {
        state: { response: response.data.photos, userInput: userInput },
      });
      // setSearchResults(response.data.photos);
      console.log(response.data.photos);
    });
  }

  // function handleSearchResults(e) {
  //   e.preventDefault();
  //   getSearchResults.get(`search?query=${userInput}`).then((response) => {
  //     setSearchResults(response.data.photos);
  //     console.log(response.data.photos);
  //     navigate("/query", { state: response.data.photos });
  //   });
  // }

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // opacity: "75%",
        }}
      >
        <div className="text">Free stock photos by creators</div>
        <div className="form">
          <form onSubmit={handleSearchResults}>
            <input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              required
              type="search"
              placeholder="Search for free photos"
            />
            <button>
              <img src={Search} width={30} />
            </button>
          </form>
        </div>
      </div>
      {/* <SearchResult searchInput={userInput} /> */}
    </>
  );
}
