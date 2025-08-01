import { gql } from "@apollo/client";

export const GetAllBlogCategory = gql`
  query Categories_connection($pagination: PaginationArg, $sort: [String]) {
    categories_connection(pagination: $pagination, sort: $sort) {
      nodes {
        documentId
        name
        slug
        description
        createdAt
        updatedAt
        publishedAt
      }
    }
  }
`;

export const GetBlogCategoryWise = gql`
  query Blogs_connection($filters: BlogFiltersInput, $sort: [String], $pagination: PaginationArg) {
    blogs_connection(filters: $filters, sort: $sort, pagination: $pagination) {
      nodes {
        title
        slug
        publishedAt
        updatedAt
        shortDescription
        documentId
        createdAt
        coverImage {
          url
        }
        categories {
          slug
          name
        }
        author {
          name
          title
          picture {
            url
          }
          id
          biography
        }
      }
      pageInfo {
        page
        total
        pageSize
        pageCount
      }
    }
  }
`;
