import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Detail 컴포넌트 정의
function Detail() {
  // useParams 훅을 사용하여 URL 매개변수 값을 가져옴
  const { id } = useParams();

  // 영화 데이터를 가져오는 비동기 함수
  const getMovie = async () => {
    // YTS API를 사용하여 특정 영화의 데이터를 요청
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };

  // 컴포넌트가 마운트되었을 때 영화 데이터를 가져오기 위해 useEffect 훅 사용
  useEffect(() => {
    getMovie();
  }, []);

  return <h1>Detail</h1>;
}

export default Detail;
