import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment..." className={styles.input}></textarea>
          <button className={styles.button}>send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt="" className={styles.image} width={50} height={50} />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis obcaecati molestiae rem perspiciatis
            voluptas nostrum, similique nobis ut velit error reiciendis veniam. Perferendis, quod! Nostrum assumenda ab
            cupiditate laboriosam? Harum. Fuga aliquam possimus aperiam quibusdam beatae consequatur saepe quo ad quidem
            totam architecto nesciunt nemo, nam reprehenderit deserunt nihil facere assumenda voluptatibus numquam. Amet
            autem eaque accusantium expedita ipsam soluta?
          </div>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt="" className={styles.image} width={50} height={50} />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis obcaecati molestiae rem perspiciatis
            voluptas nostrum, similique nobis ut velit error reiciendis veniam. Perferendis, quod! Nostrum assumenda ab
            cupiditate laboriosam? Harum. Fuga aliquam possimus aperiam quibusdam beatae consequatur saepe quo ad quidem
            totam architecto nesciunt nemo, nam reprehenderit deserunt nihil facere assumenda voluptatibus numquam. Amet
            autem eaque accusantium expedita ipsam soluta?
          </div>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt="" className={styles.image} width={50} height={50} />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis obcaecati molestiae rem perspiciatis
            voluptas nostrum, similique nobis ut velit error reiciendis veniam. Perferendis, quod! Nostrum assumenda ab
            cupiditate laboriosam? Harum. Fuga aliquam possimus aperiam quibusdam beatae consequatur saepe quo ad quidem
            totam architecto nesciunt nemo, nam reprehenderit deserunt nihil facere assumenda voluptatibus numquam. Amet
            autem eaque accusantium expedita ipsam soluta?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
