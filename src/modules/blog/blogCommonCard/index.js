import React from "react";
import styles from "./blogCommonCard.module.scss";
import Link from "next/link";
import moment from "moment";
export default function BlogCommonCard({ item }) {
  return (
    <Link href={`/blog/${item?.slug}`} aria-label="blog-details">
      <div className={styles.commonBlogCard}>
        <div className={styles.cardimage}>
          <img src={`${process.env.NEXT_PUBLIC_NEXT_IMAGE_URL}${item?.coverImage?.url}`} alt={item?.title} />
        </div>
        <div className={styles.details}>
          <h3>{item?.title}</h3>
          <p>
            {moment(item?.createdAt).format("DD MMMM, YYYY")} | {item?.author?.name}
          </p>
        </div>
      </div>
    </Link>
  );
}
