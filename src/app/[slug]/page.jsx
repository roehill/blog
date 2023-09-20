import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deserunt fuga voluptas distinctio harum natus
              reprehenderit accusantium sapiente quisquam, quibusdam similique eligendi temporibus quo, ab modi ex ea.
              Perspiciatis, repellendus!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore facere placeat et blanditiis rerum,
              corrupti nostrum officiis amet tempora nemo, possimus adipisci. Fugiat, aperiam impedit accusamus nemo
              tempore molestiae! Modi tempore commodi repellendus vel, corporis odit quia placeat dolorem adipisci
              soluta labore neque quos veritatis dignissimos, officiis nostrum earum dolore quasi perferendis saepe illo
              facilis minima. Magni, quae sequi. Laboriosam ab sequi distinctio placeat ad dolor, autem numquam soluta
              fugiat repellat ea, minus modi reprehenderit velit magnam rerum ratione excepturi eaque error fuga!
              Laboriosam corrupti eum sunt eveniet inventore! Ullam tenetur nam autem adipisci hic et earum expedita
              veritatis praesentium nobis quis dolores esse, ab soluta. Dignissimos accusamus repellat incidunt! Vitae,
              atque assumenda sint a incidunt quia odio molestias? Dolorem cumque sint officia aut ratione, ipsa
              veritatis laudantium quam dicta natus saepe sunt voluptas harum labore ipsum architecto maxime neque ab
              asperiores excepturi fugiat minima iste. Facilis, vitae nam? Hic odit, dolor amet possimus libero
              temporibus voluptas debitis saepe recusandae repellendus distinctio soluta pariatur nisi quidem eos nihil
              enim nostrum animi? Impedit repellat sit ullam dolores cumque eveniet consectetur! Sequi molestias at
              harum explicabo tempora repudiandae animi iusto nulla, laudantium voluptate enim odio nobis est ab in
              consequuntur cupiditate eaque? Deleniti, eveniet aspernatur! Vitae enim esse itaque iste facere? Harum
              natus, laborum cumque tenetur ex ad provident iste perspiciatis vel quo velit tempore modi. Laboriosam,
              blanditiis amet aspernatur, obcaecati necessitatibus quibusdam itaque totam, adipisci omnis at quaerat?
              Architecto, vel! Nemo sint odio consequuntur iure ad molestiae repudiandae nulla obcaecati. Minima alias
              quasi dignissimos saepe magnam vero adipisci consectetur. Cum voluptate reprehenderit temporibus modi,
              quisquam ullam quo laudantium veritatis cupiditate. Dolorem id debitis, sunt nemo quo tempora quasi at,
              cumque reprehenderit enim non exercitationem. Sed voluptate ea repellat laboriosam nesciunt, magnam
              mollitia placeat, ut eaque cumque iure est architecto esse?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deserunt fuga voluptas distinctio harum natus
              reprehenderit accusantium sapiente quisquam, quibusdam similique eligendi temporibus quo, ab modi ex ea.
              Perspiciatis, repellendus!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore facere placeat et blanditiis rerum,
              corrupti nostrum officiis amet tempora nemo, possimus adipisci. Fugiat, aperiam impedit accusamus nemo
              tempore molestiae! Modi tempore commodi repellendus vel, corporis odit quia placeat dolorem adipisci
              soluta labore neque quos veritatis dignissimos, officiis nostrum earum dolore quasi perferendis saepe illo
              facilis minima. Magni, quae sequi. Laboriosam ab sequi distinctio placeat ad dolor, autem numquam soluta
              fugiat repellat ea, minus modi reprehenderit velit magnam rerum ratione excepturi eaque error fuga!
              Laboriosam corrupti eum sunt eveniet inventore! Ullam tenetur nam autem adipisci hic et earum expedita
              veritatis praesentium nobis quis dolores esse, ab soluta. Dignissimos accusamus repellat incidunt! Vitae,
              atque assumenda sint a incidunt quia odio molestias? Dolorem cumque sint officia aut ratione, ipsa
              veritatis laudantium quam dicta natus saepe sunt voluptas harum labore ipsum architecto maxime neque ab
              asperiores excepturi fugiat minima iste. Facilis, vitae nam? Hic odit, dolor amet possimus libero
              temporibus voluptas debitis saepe recusandae repellendus distinctio soluta pariatur nisi quidem eos nihil
              enim nostrum animi? Impedit repellat sit ullam dolores cumque eveniet consectetur! Sequi molestias at
              harum explicabo tempora repudiandae animi iusto nulla, laudantium voluptate enim odio nobis est ab in
              consequuntur cupiditate eaque? Deleniti, eveniet aspernatur! Vitae enim esse itaque iste facere? Harum
              natus, laborum cumque tenetur ex ad provident iste perspiciatis vel quo velit tempore modi. Laboriosam,
              blanditiis amet aspernatur, obcaecati necessitatibus quibusdam itaque totam, adipisci omnis at quaerat?
              Architecto, vel! Nemo sint odio consequuntur iure ad molestiae repudiandae nulla obcaecati. Minima alias
              quasi dignissimos saepe magnam vero adipisci consectetur. Cum voluptate reprehenderit temporibus modi,
              quisquam ullam quo laudantium veritatis cupiditate. Dolorem id debitis, sunt nemo quo tempora quasi at,
              cumque reprehenderit enim non exercitationem. Sed voluptate ea repellat laboriosam nesciunt, magnam
              mollitia placeat, ut eaque cumque iure est architecto esse?
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
