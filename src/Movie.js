import React from 'react';
import PropTypes from 'prop-types';

function Movie({ title, year, summary, poster }) {
  return (
    <div className="movie__data">
      <figure className="movie__poster">
        <img src={poster} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
      <span className="movie__year">{year}</span>
      <p className="movie__summary">{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;