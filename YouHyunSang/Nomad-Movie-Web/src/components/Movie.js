import React from 'react'
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function Movie({coverImg , title , summary , genres, id}) {
  return (
    
    <div>
     <div className='container'>
      <img className='title-picture' src={coverImg} alt={title} />
      <h2 className='title-name'><Link to={`/movie/${id}`}>{title}</Link></h2>
      <p>{summary}</p>
        <ul>
          <li>
            {genres.map( (g) => (
              <li key={g}>{g}</li>
              ))} 
          </li>
      </ul>
    </div>
  </div> 
  )
}

Movie.propTypes ={
    id: PropTypes.string.isRequired,
    coverImg : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;
