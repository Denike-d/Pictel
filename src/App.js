import { Route, Routes } from "react-router-dom";
import SearchResult from "./pages/SearchResult/SearchResult";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/query" element={<SearchResult />} />
      </Routes>
    </div>
  );
}

export default App;
