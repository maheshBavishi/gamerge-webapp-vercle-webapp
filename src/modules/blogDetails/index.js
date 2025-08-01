import React from "react";
import styles from "./blogDetails.module.scss";
import BlogDetailsBanner from "./blogDetailsBanner";
import BlogContent from "./blogContent";
import MoreFromGamerge from "./moreFromGamerge";
export default function BlogDetails({ blogDetail }) {
  return (
    <div>
      <BlogDetailsBanner blogDetail={blogDetail}  />
      <BlogContent blogDetail={blogDetail} />
      <MoreFromGamerge />
    </div>
  );
}
