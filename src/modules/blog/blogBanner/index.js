import React from "react";
import styles from "./blogBanner.module.scss";
import DownIcon from "@/components/icons/downIcon";
import BlogCommonCard from "../blogCommonCard";
import { GetBlogCategoryWise } from "@/graphql/graphql";
import { useQuery } from "@apollo/client";
import moment from "moment";
import Link from "next/link";
export default function BlogBanner() {
  const { data, fetchMore } = useQuery(GetBlogCategoryWise, {
    variables: {
      pagination: {
        limit: 5,
      },
      sort: ["createdAt:desc"],
    },
  });
  console.log("data++++++");
  return (
    <>
      <div className={styles.blogbanner}>
        <div className="container-md">
          <div className={styles.iconCenter}>
            <DownIcon />
          </div>
          <h1>Recent articles</h1>
          <div className={styles.grid}>
            <div className={styles.griditems}>
              <Link href={`/blog/${data?.blogs_connection?.nodes[0]?.slug}`} aria-label="blog-details">
                <div className={styles.card}>
                  <div className={styles.cardimage}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_NEXT_IMAGE_URL}${data?.blogs_connection?.nodes[0]?.coverImage?.url}`}
                      alt={data?.blogs_connection?.nodes[0]?.title}
                    />
                  </div>
                  <div className={styles.details}>
                    <h3>{data?.blogs_connection?.nodes[0]?.title}</h3>
                    <p>
                      {moment(data?.blogs_connection?.nodes[0]?.createdAt).format("DD MMMM, YYYY")} |{" "}
                      {data?.blogs_connection?.nodes[0]?.author?.name}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.griditems}>
              <div className={styles.twoColGrid}>
                {data?.blogs_connection?.nodes?.slice(1).map((blog, i) => (
                  <div key={blog.id || i}>
                    <BlogCommonCard item={blog} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.leftSide}></div>
      <div className={styles.rightSide}></div>
    </>
  );
}
