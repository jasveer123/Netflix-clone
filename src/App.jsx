import React from "react";
import Row from "./components/Row";
import requests from "./secrete";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="Netflix originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Tranding" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isSmallRow />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documantaries" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
