import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';

// Movie 컴포넌트 정의
function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div className={styles.movie}>
      {/* 영화 포스터 이미지 */}
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        {/* 영화 제목 */}
        <h2 className={styles.movie__title}>
          {/* 영화 상세 페이지로 연결되는 링크 */}
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        {/* 영화 개봉 연도 */}
        <h3 className={styles.movie__year}>{year}</h3>
        {/* 영화 요약 */}
        <p>
          {/* 요약 내용이 235자를 초과하면 일부만 표시하고 말줄임표(...) 추가 */}
          {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
        </p>
        {/* 영화 장르 목록 */}
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// 컴포넌트의 props 타입 정의
Movie.propTypes = {
  id: PropTypes.number.isRequired, 
  // id는 숫자 타입이며 필수 요소
  coverImg: PropTypes.string.isRequired, 
  // coverImg는 문자열 타입이며 필수 요소
  title: PropTypes.string.isRequired, 
  // title은 문자열 타입이며 필수 요소
  summary: PropTypes.string.isRequired, 
  // summary는 문자열 타입이며 필수 요소
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
   // genres는 문자열 배열 타입이며 필수 요소
};

export default Movie;
