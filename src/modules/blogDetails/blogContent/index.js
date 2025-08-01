"use client";
import { useEffect, useState } from "react";
import styles from "./blogContent.module.scss";
import { marked } from "marked";
const Poster = "/assets/images/blog-details-img.png";
const DownlodaCta = "/assets/images/download-cta.png";
export default function BlogContent({ blogDetail }) {
  const [activeContent, setActiveContent] = useState("");

  const collectHeadings = () => {
    const newHeadings = [];
    const renderer = {
      heading({ text, depth }) {
        const slugID = text?.trim()?.toLowerCase()?.replace(/\s+/g, "-")?.trim();
        newHeadings.push({ text, depth, slugID });
        return `<h${depth} dir="auto" title="${text}" id="${slugID}">${text}</h${depth}>\n`;
      },
      table(header, body) {
        return `<div class='blogtable'><table><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
      },
    };
    marked.use({ renderer });
    marked(blogDetail?.blogContent || "");
    return newHeadings;
  };

  const handleScroll = (e, slugID) => {
    if (e) e.preventDefault();
    const element = document.getElementById(slugID);
    if (element) {
      const headerHeight = 110;
      window.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };
  const handleWindowScroll = () => {
    const scrollPosition = window.scrollY;
    const headings = collectHeadings().filter((heading) => heading.depth === 1 || heading.depth === 2);
    for (const heading of headings) {
      const element = document.getElementById(heading.slugID);
      if (element) {
        const headerHeight = 110;
        const elementTop = element.offsetTop - headerHeight;
        const elementBottom = elementTop + element.clientHeight;
        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          setActiveContent(heading.slugID);
          break;
        }
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  return (
    <div className={styles.blogContentAlignment}>
      <div className="container-xl">
        <div className={styles.grid}>
          <div className={styles.griditems}>
            <div className={styles.tableOfContent}>
              <h2>Table of Contents</h2>
              {collectHeadings()?.map(
                (heading) =>
                  (heading.depth === 1 || heading.depth === 2) && (
                    <p
                      onClick={(e) => handleScroll(e, heading.slugID)}
                      className={activeContent === heading?.slugID ? styles.active : ""}
                      dangerouslySetInnerHTML={{
                        __html: marked(heading?.text || ""),
                      }}
                    ></p>
                  )
              )}
            </div>
          </div>
          <div className={styles.griditems}>
            <div className={styles.details}>
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{
                  __html: marked(blogDetail?.blogContent || ""),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
