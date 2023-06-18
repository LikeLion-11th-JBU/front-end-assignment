import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import styles from './Home.module.css';

// Home 컴포넌트 정의
function Home() {
  // 로딩 상태를 관리하는 상태 변수
  const [loading, setLoading] = useState(true);
  // 영화 목록을 관리하는 상태 변수
  const [movies, setMovies] = useState([]);

  // 영화 데이터를 가져오는 비동기 함수
  const getMovies = async () => {
    // YTS API를 사용하여 영화 데이터를 요청
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    // 가져온 영화 데이터를 상태 변수에 저장
    setMovies(json.data.movies);
    // 로딩 상태를 false로 변경하여 로딩 완료를 표시
    setLoading(false);
  };

  // 컴포넌트가 마운트되었을 때 영화 데이터를 가져오기 위해 useEffect 훅 사용
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? ( // 로딩 중인 경우
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        // 로딩이 완료된 경우
        <div className={styles.movies}>
          {/* movies 배열을 반복하여 Movie 컴포넌트를 렌더링 */}
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

/**
 * App.js에서 긁어온 것
 *
 * [Router / Routing]
 *
 * - https://github.com/nomadcoders/react-for-beginners/ 처럼 /를 통해 페이지 이동 처리를 한다.
 * - (Definition) 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 것
 */
