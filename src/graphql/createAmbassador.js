import { gql } from "@apollo/client";

export const CreateAmbassador = gql`
  mutation Mutation($data: AmbassadorInput!) {
    createAmbassador(data: $data) {
      documentId
      fullName
      email
      country
      telegramID
      twitter
      facebook
      instagram
      linkedin
      about
      createdAt
      updatedAt
      publishedAt
    }
  }
`;
