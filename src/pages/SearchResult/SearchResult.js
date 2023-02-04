import React, { useState } from "react";
import "./SearchResult.scss";
import Search from "./Search.svg";
import { useLocation, Link } from "react-router-dom";
import Character from "./Character.svg";

import { getSearchResults } from "../../axios";
import { saveAs } from "file-saver";

export default function SearchResult() {
  const location = useLocation();
  const photos = location.state.response;
  const searchInput = location.state.userInput;
  console.log("These are the photos", photos);

  const [userInput, setUserInput] = useState("");

  // let url = photos.length[0].url;
  // console.log("url", url);

  // function handleDownload() {
  //   console.log("This is the url", url);
  //   saveAs(url, photos.alt);
  // }

  // function handleSearch(e) {
  //   e.preventDefault();
  //   allSearchResults();
  // }

  // async function allSearchResults() {
  //   await getSearchResults.get(`search?query=${userInput}`).then((response) => {
  //     // navigate("/query", { state: response.data.photos });
  //     setPhotos(response.data.photos);
  //     console.log(response.data.photos);
  //   });
  // }

  return (
    <div>
      <div className="search-results">
        <div className="nav">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </Link>
          <p>Search result for {searchInput}</p>

          {/* <form>
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
          </form> */}
          {/* <p>Pictel</p> */}
        </div>

        {photos.length === 0 && photos ? (
          <div className="error">
            <div>
              <img src={Character} width={200} />
              <p>Opps! No result found</p>
            </div>
          </div>
        ) : (
          <ul className="photos">
            <>
              {photos.map((photo) => (
                <li key={photo.id}>
                  <div>
                    <img
                      src={photo.src.original}
                      width="100%"
                      alt={photo.alt}
                    />
                    <div className="item">
                      <div className="item-details">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                          />
                        </svg>{" "}
                        <p>{photo.photographer}</p>
                      </div>
                      <div className="item-details">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                          />
                        </svg>
                        <a href={photo.photographer_url}>
                          {photo.photographer_url}
                        </a>
                      </div>
                      <div className="item-details">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                          />
                        </svg>
                        <p
                          style={{ cursor: "pointer", color: "orange" }}
                          onClick={() => saveAs(photo.url, photo.alt)}
                        >
                          Download
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </>
          </ul>
        )}
      </div>
    </div>
  );
}
