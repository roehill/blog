import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/culture.jpg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>19.09.2023 </span>
          <span className={styles.category}>CULTURE</span>
        </div>{" "}
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio qui ipsam enim, illo in sed rem
          accusantium, velit, maxime ipsa laboriosam libero delectus magni nihil incidunt rerum dolorem repellat
          debitis!
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
