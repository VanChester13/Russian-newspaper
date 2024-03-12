import { useLocation, useNavigate } from "react-router-dom";
import styles from "./DetailPost.module.scss";

const DetailPost = (): React.ReactElement => {
  const history = useNavigate();
  const { state } = useLocation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <button className={styles.btn} onClick={() => history("/")}>
         Back
        </button>
        <div className={styles.title}>{state?.title}</div>
        <div className={styles.postNum}>POST #{state?.id}</div>
        <div className={styles.body}>{state?.body}</div>
      </div>
    </div>
  );
};

export default DetailPost;
