"use client";
import React, { useEffect } from "react";
import BlogBanner from "./blogBanner";
import BlogListing from "./blogListing";
import styles from "./blog.module.scss";
import { GetAllBlogCategory } from "@/graphql/graphql";
import { useQuery } from "@apollo/client";
export default function Blog() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const { data } = useQuery(GetAllBlogCategory, {
    variables: {
      pagination: {
        limit: 500,
      },
      sort: ["createdAt:desc"],
    },
  });
  return (
    <div>
      <BlogBanner />
      <div className={styles.blogListingContent}>
        {data?.categories_connection?.nodes?.length > 0 &&
          data?.categories_connection?.nodes.map((category, index) => {
            return (
              <div key={index} className={styles.listingContent}>
                <BlogListing categoryData={category} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
