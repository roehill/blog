import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Multipurpose blog theme. </b>Clear and efficient way to introduce yourself in the web.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/culture.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quo dolorem exercitationem ratione
            nesciunt optio debitis deleniti facere magnam. Quaerat cum quae deserunt voluptates mollitia. Repudiandae
            nihil deleniti maiores dignissimos. Vel animi eveniet nam ex ratione tenetur deleniti minima, esse,
            molestias cupiditate incidunt perferendis? Architecto, odio commodi modi similique quisquam laboriosam rem
            accusamus culpa consequuntur exercitationem illo harum ab dolores!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
