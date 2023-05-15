import React, { useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Movie from '../components/Movie';
function Detail() {
  const [loading, setLoading] = useState(true);
  
  const {id} = useParams()
  const getMovie = async() => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        )
      ).json();
      setLoading(false)
      console.log(json)
  };
  useEffect(() => {
      getMovie();
  }, []);
  console.log(id)

  return (
    <div>
      {loading ? <h1>Loading...</h1> : <h2>준비중</h2>}
    </div>
      
  )
}

export default Detail;
