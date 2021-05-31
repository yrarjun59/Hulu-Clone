import React from "react";
import "./VideoCard.css";

function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img
        src="https://image.tmdb.org/t/p/original//n1pNyAVAe0pJMwcTNYNwKGHXjVx.jpg"
        alt="this is the poster of the movie"
      />
      <p>This is a film about coding</p>
      <h2>Movie</h2>
      <p>Number of likes...</p>
    </div>
  );
}

export default VideoCard;
