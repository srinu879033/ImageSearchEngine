import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchImages } from "../redux/Actions";
import "../styles/searchStyles.css";
import ImageComponent from "./imageComponent";

const SearchEngine = ({ fetchImages, imageData }) => {
  console.log(imageData);
  const [query, setQuery] = useState("");
  let search = query;
  const updateQuery = (e) => {
    search = document.getElementById("searchInput").value;
  };

  const [limit, setLimit] = useState(10);
  const [present, setPresent] = useState(1);

  const getResults = (e) => {
    imageData.images.results = [];
    e.preventDefault();
    setLimit(10);
    setPresent(1);

    fetchImages(search, present);
    setQuery(search);
  };

  const increment = () => {
    if (limit >= imageData.images.results.length) {
      setPresent(present + 1);
      fetchImages(search, present);
    } else {
      setLimit(limit + 10);
    }
    console.log(limit, present);
  };

  const appendResults = () => {
    console.log(imageData);
    if (imageData) {
      if (imageData.loading) {
        return <h1>Loading ....</h1>;
      } else if (imageData.images.results) {
        return (
          <div
            className="col-12 d-flex flex-row justify-content-center"
            style={{ flexWrap: "wrap", marginLeft: 20 }}
          >
            {imageData.images.results.slice(0, limit).map((image) => (
              <ImageComponent src={image.urls.small} />
            ))}
          </div>
        );
      }
    } else {
      return <></>;
    }
  };

  const loadMore = () => {
    if (
      imageData &&
      imageData.images &&
      imageData.images.length !== 0 &&
      limit <= imageData.images.total
    ) {
      return (
        <div class="col-12 d-flex flex-row justify-content-center">
          <button
            onClick={increment}
            class="btn btn-dark mb-5"
            style={{ width: 120, height: 40, fontSize: 13 }}
          >
            Load More
          </button>
        </div>
      );
    } else {
      return <></>;
    }
  };

  const numberOfImages = () => {
    if (query && imageData && imageData.images && imageData.images.results) {
      return (
        <div class="col-10 d-flex flex-column " style={{ marginTop: -40 }}>
          <p style={{ fontWeight: 700, fontSize: 24, marginBottom: 0 }}>
            {query[0].toUpperCase() + query.slice(1)}
          </p>
          <p style={{ marginTop: 0 }}>
            {imageData.images.total} images has been found
          </p>
        </div>
      );
    } else {
      return <></>;
    }
  };
  return (
    <div class="container">
      <div class="row">
        <div
          class="col-12 d-flex flex-column justify-content-center m-auto "
          style={{ alignItems: "center" }}
        >
          <div class="d-flex col-12 flex-row justify-content-center">
            <div class="col-12">
              <form
                class="wiki-search-header "
                style={{
                  width: "100%",
                }}
                onSubmit={getResults}
              >
                <input
                  onKeyUp={updateQuery}
                  placeholder="Search for photos"
                  type="search"
                  class="search-input"
                  style={{
                    display: "block",
                    width: "80%",
                    zIndex: 1,
                    position: "relative",
                    fontSize: 12,
                    height: 56,
                    paddingLeft: 16,
                    borderStyle: "solid",
                  }}
                  id="searchInput"
                />
                <button
                  className="button"
                  type="submit"
                  style={{
                    borderStyle: "solid",
                    backgroundColor: "black",
                    width: 99,
                    height: 50,
                    marginLeft: 16,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    style={{ color: "white" }}
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          {numberOfImages()}
          <div id="recurringContainer">{appendResults()}</div>
          {loadMore()}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    imageData: state.images,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImages: (search, present) => dispatch(fetchImages(search, present)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchEngine);
