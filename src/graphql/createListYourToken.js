import { gql } from "@apollo/client";

export const CreateListYourToken = gql`
  mutation CreateListYourToken($data: ListYourTokenInput!) {
    createListYourToken(data: $data) {
      documentId
      projectName
      projectWebsite
      email
      relationship
      blockchainName
      explorerLink
      projectTicker
      cryptoassetTags
      shortDescription
      longDescription
      logo
      twitter
      telegram
      facebook
      instagram
      linkedin
      reddit
      discord
      youtube
      createdAt
      updatedAt
      publishedAt
    }
  }
`;
