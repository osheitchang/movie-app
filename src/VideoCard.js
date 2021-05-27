import React from "react";
import "./VideoCard.css";

function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img src="https://flxt.tmsimg.com/assets/p11539968_p_v10_ab.jpg" alt="" />
      <p>This is a film  about coding</p>
      <h2>Movie title</h2>
      <p>Number of Likes...</p> 
    </div>
  );
}

export default VideoCard;
