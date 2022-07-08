/** @format */
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import AlbumCard from "./AlbumCard";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  let headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
  });

  const search = async (string) => {
    if (string.length > 2) {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            string,
          {
            method: "GET",
            headers,
          }
        );

        let result = await response.json();
        let songs = result.data;

        setSearchResults(songs);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <Col className="col-12 col-md-9 offset-md-3 mainPage">
        <Row>
          <Col xs={10}>
            <div id="searchResults">
              <input
                type="text"
                className="form-control mb-2"
                id="searchField"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
                onChange={(event) => setSearchInput(event.currentTarget.value)}
              />
              <div className="text-center mt-3">
                <button
                  className="btn btn-outline-secondary btn-sm "
                  type="button"
                  id="button-addon1"
                  onClick={() => search(searchInput)}>
                  Search
                </button>
              </div>

              <h2 className="text-center mt-4">Search Results</h2>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                {searchResults.map((song) => (
                  <AlbumCard song={song} key={song.id} />
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Col>

      {/* <Row className="justify-content-center">
      <Col xs={8}>
        <div id="searchResults">
          <input
            type="text"
            className="form-control mb-2"
            id="searchField"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
            onChange={(event) => setSearchInput(event.currentTarget.value)}
          />
          <div className="input-group-append" style={{ marginBottom: "4%" }}>
            <button
              className="btn btn-outline-secondary btn-sm"
              type="button"
              id="button-addon1"
              onClick={() => search(searchInput)}>
              Search
            </button>
          </div>
          <h2>Search Results</h2>
          <div className="mainpage">
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {searchResults.map((song) => (
                <AlbumCard song={song} key={song.id} />
              ))}
            </Row>
          </div>
        </div>
      </Col>
    </Row> */}
    </>
  );
};

export default Search;