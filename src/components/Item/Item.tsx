import { Link } from "react-router-dom";
import { IPost } from "../../pages/Posts/Posts";

import styles from "./Item.module.scss";

const Item = (item: IPost): React.ReactElement => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.id}>
          <span>{`User ID ${item.userId}`}</span>
          <span>{`Post ID ${item.id}`}</span>
        </div>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.body}>{item.body}</div>
        <Link
          to={{
            pathname: `/posts/${item.id}`,
          }}
          state={item}
        >
          <button className={styles.btn}>Подробнее</button>
        </Link>
      </div>
    </div>
  );
};
export default Item;
