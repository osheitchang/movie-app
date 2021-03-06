import { MovieSharp } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import axios from "./axios";
import requests from "./requests";
import FlipMove from "react-flip-move";

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
      <FlipMove>
        {movies.map((movie) => {
          return <VideoCard key={movie.id} movie={movie} />;
        })}
      </FlipMove>
    </div>
  );
}

export default Results;
