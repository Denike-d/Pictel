import axios from "axios";

export const pexel = axios.create({
  baseURL: `https://api.pexels.com/v1/`,
  headers: {
    Authorization: "bTjqqYDVSXiPfzwl6iUIOXYm86ku73rm7moaJLPkUrUfPOgJLpMpCHzC",
  },
});

export const getSearchResults = axios.create({
  baseURL: `https://api.pexels.com/v1/`,
  headers: {
    Authorization: "bTjqqYDVSXiPfzwl6iUIOXYm86ku73rm7moaJLPkUrUfPOgJLpMpCHzC",
  },
});
