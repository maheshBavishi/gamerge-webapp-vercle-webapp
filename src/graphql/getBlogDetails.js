import { gql } from "graphql-request";

export const GetBlogDetails = gql`
  query Blogs_connection($pagination: PaginationArg, $filters: BlogFiltersInput) {
    blogs_connection(filters: $filters) {
      nodes {
        documentId
        title
        slug
        coverImage {
          url
        }
        shortDescription
        blogContent
        detailImage {
          url
        }
        categories {
          slug
          name
          description
        }
        seo {
          id
          title
          description
          image {
            url
          }
          url
          slug
          keywords
          faqSchema
        }
        author {
          id
          name
          picture {
            url
          }
          biography
          title
        }
        faq(pagination: $pagination) {
          id
          question
          answer
        }
        createdAt
        updatedAt
        publishedAt
      }
    }
  }
`;
