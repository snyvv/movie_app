import React from 'react';
import PropTypes from 'prop-types';
import './Movie.scss';

function Movie({ title, year, summary, poster, genres }) {
  return (
    <div className="movie__data">
      <img className="movie__poster" src={poster} alt={title} />
      <h2 className="movie__title">{title}</h2>
      <span className="movie__year">{year}</span>
      <ul className="movie__genres">
        {genres.map((genre, index) => {
          return <li key={index} className="movie__genre">{genre}</li>;
        })}
      </ul>
      <p className="movie__summary">{summary.slice(0, 180)}...</p>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;