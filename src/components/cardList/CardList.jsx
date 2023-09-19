import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Card /> <Card /> <Card />
        {/* {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))} */}
      </div>
      <Pagination />
      {/* <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} /> */}
    </div>
  );
};

export default CardList;
