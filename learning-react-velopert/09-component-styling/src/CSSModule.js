import classNames from "classnames/bind"; /* yarn add classnames */
// import styles from "./CSSModule.module.css";
import styles from "./CSSModule.module.scss";
/* 
  CSS Module이 아닌 일반 .css/.scss 파일에서도
  :local을 사용하여 CSS Module을 사용할 수 있다.
  예시)
  :local .wrapper {
    // 스타일
  }
  :local {
    .wrapper {
      // 스타일
    }
  }
*/

/* 미리 styles에서 클래스를 받아오도록 설정 */
const cx = classNames.bind(styles);

const CSSModule = () => {
  return (
    // <div className={styles.wrapper}>

    /* CSS Module을 사용한 클래스 이름을 두 개 이상 적용할 떄 */
    // <div className={`${styles.wrapper} ${styles.inverted}`}>
    // <div className={[styles.wrapper, styles.inverted].join(" ")}>

    /* classnames 사용 */
    <div className={cx("wrapper", "inverted")}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
