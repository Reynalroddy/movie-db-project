import React, { useContext } from "react";
import { AppContext } from "./context";
import SingleMovie from "./SingleMovie";
import { Link } from "react-router-dom";

const Movies = () => {
  const { movies } = useContext(AppContext);
  console.log(movies);
  return (
    <div className="row">
      {movies.map((item, index) => {
        const { Poster, Title, Year, imdbID: id } = item;

        return (
          <div key={id} className="col-10 col-md-4 py-3 mx-auto">
            <Link to={`/movies/${id}`}>
              <img src={Poster} className="img-fluid" alt="" />
              <h5>{Title}</h5>
              <p>
                Realease year:<span>{Year}</span>
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
