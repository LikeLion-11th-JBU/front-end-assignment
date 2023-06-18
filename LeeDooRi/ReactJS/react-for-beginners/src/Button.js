import PropTypes from 'prop-types';
import styles from "./Button.module.css"

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
  //클래스명을 무작위로 만들어내기 때문에 똑같이 써도 상관없다.
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button; // 버튼 내보내기 ( 외부에서 사용가능하도록)
