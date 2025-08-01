import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import styles from "./blogListing.module.scss";
import DownIcon from "@/components/icons/downIcon";
import BlogCommonCard from "../blogCommonCard";
import Button from "@/components/button";
import { GetBlogCategoryWise } from "@/graphql/graphql";

export default function BlogListing({ categoryData }) {
  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [allBlogs, setAllBlogs] = useState([]);
  const [totalBlogs, setTotalBlogs] = useState(0);

  const { fetchMore } = useQuery(GetBlogCategoryWise, {
    variables: {
      filters: {
        categories: {
          slug: {
            in: categoryData?.slug,
          },
        },
      },
      pagination: {
        page: 1,
        pageSize: pageSize,
      },
      sort: ["createdAt:desc"],
    },
    onCompleted: (data) => {
      const newData = data?.blogs_connection?.nodes || [];
      setAllBlogs(newData);
      setTotalBlogs(data?.blogs_connection?.pageInfo?.total || 0);
    },
    notifyOnNetworkStatusChange: true,
  });

  const handleLoadMore = async () => {
    const { data: moreData } = await fetchMore({
      variables: {
        pagination: {
          page: currentPage + 1,
          pageSize: pageSize,
        },
      },
    });
    const newBlogs = moreData?.blogs_connection?.nodes || [];
    setAllBlogs((prev) => [...prev, ...newBlogs]);
    setCurrentPage(currentPage + 1);
  };

  const isAllBlogsLoaded = allBlogs.length >= totalBlogs;
  return (
    <div className={styles.blogListing}>
      <div className="container-md">
        <div className={styles.iconcenter}>
          <DownIcon />
        </div>
        <h2>{categoryData?.name}</h2>
        <div className={styles.grid}>
          {allBlogs.map((item, i) => (
            <div key={i}>
              <BlogCommonCard item={item} />
            </div>
          ))}
        </div>
        {!isAllBlogsLoaded && (
          <div className={styles.btnCenter} onClick={handleLoadMore}>
            <Button text={"Load More"} />
          </div>
        )}
      </div>
    </div>
  );
}
