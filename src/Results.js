import { MovieSharp } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import axios from "./axios";
import requests from "./requests";

function Results({ selectedOption }) {
  const [movies, SetMovies] = useState(["1", "2"]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      SetMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      {movies.map((movie) => {
        return <VideoCard movie={movie} />;
      })}
    </div>
  );
}

export default Results;
