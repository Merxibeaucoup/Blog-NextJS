import Pagination from "../pagination/Pagination";
import styles from "./_cardList.module.scss";

const CardList = () => {
  return (
    <div className={styles.container}>
      <Pagination />
    </div>
  );
};

export default CardList;
