import { GetBlogCategoryWise } from "@/graphql/graphql";
import { graphcms } from "@/graphql/graphQlClientServer";
import { getServerSideSitemap } from "next-sitemap";
export async function GET() {
  const variables = {
    pagination: {
      limit: 3000,
    },
    sort: ["createdAt:desc"],
  };
  const Data = await graphcms?.request(GetBlogCategoryWise, variables);
  const BlogsPath = Data?.blogs_connection?.nodes?.map((Data) => `/blog/${Data?.slug}`);
  const IndexPath = [
    "/",
    "/ambassador-program",
    "/b2b",
    "/blog",
    "/cookies-policy",
    "/customer-agreement",
    "/list-your-token",
    "/presale",
    "/privacy-policy",
    "/risk-disclosure",
    "/staking",
    "/style-guide",
    ...BlogsPath,
  ];
  const fields = IndexPath?.map((Data) => ({
    loc: `https://gamerge.ai${Data}`?.trim(),
    lastmod: new Date().toISOString(),
    changefreq: "daily",
    priority: 1,
  }));
  return getServerSideSitemap(fields, {
    "Content-Type": "text/xml, application/xml",
  });
}
