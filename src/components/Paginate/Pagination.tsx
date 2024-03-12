import styles from "./Pagination.module.scss";

interface Disabled {
  left: boolean;
  right: boolean;
}

interface Navigation {
  current: number;
  total: number;
}

interface IProps {
  onNextPageClick: () => void;
  onPrevPageClick: () => void;
  disable: Disabled;
  navigation: Navigation;
}

const Pagination = ({
  navigation,
  disable,
  onNextPageClick,
  onPrevPageClick,
}: Readonly<IProps>): React.ReactElement => {

  const handleNextPageClick = () => {
    onNextPageClick();
  };
  const handlePrevPageClick = () => {
    onPrevPageClick();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.paginator}>
        <button
          className={styles.arrow}
          type="button"
          onClick={handlePrevPageClick}
          disabled={disable.left}
        >
          {"<"}
        </button>
        {navigation && (
          <span className={styles.navigation}>
            {navigation.current} / {navigation.total}
          </span>
        )}
        <button
          className={styles.arrow}
          type="button"
          onClick={handleNextPageClick}
          disabled={disable.right}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
