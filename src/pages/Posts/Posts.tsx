import { useState, useEffect, useMemo, useCallback } from "react";
import Item from "../../components/Item/Item";
import { getTotalPageCount, limit } from "../../lib/getTotalCount";
import Pagination from "../../components/Paginate/Pagination";

import styles from "./Posts.module.scss";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IProps {
  posts: IPost[];
}

const Posts = ({ posts }: IProps): React.ReactElement => {
  const [data, setData] = useState(posts);
  const [page, setPage] = useState(1);
  const initData = useMemo(() => posts, []);

  const changedData = () => setData([...initData].splice(page * limit - limit, limit));

  const handleNextPageClick = useCallback(() => {
    const current = page;
    const next = current + 1;
    const total = data ? getTotalPageCount(initData.length) : current;
    setPage(next <= total ? next : current);
  }, [page]);

  const handlePrevPageClick = useCallback(() => {
    const current = page;
    const prev = current - 1;
    setPage(prev > 0 ? prev : current);
  }, [page]);

  useEffect(() => {
    changedData();
  }, [page]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>List posts</div>
      <div className={styles.content}>
        {data?.map((item: IPost) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
      {!!data.length && (
        <Pagination
          onNextPageClick={handleNextPageClick}
          onPrevPageClick={handlePrevPageClick}
          disable={{
            left: page === 1,
            right: page === getTotalPageCount(initData.length),
          }}
          navigation={{
            current: page,
            total: getTotalPageCount(initData.length),
          }}
        />
      )}
    </div>
  );
};

export default Posts;
