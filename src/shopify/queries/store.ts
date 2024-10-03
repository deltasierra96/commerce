import { gql } from '@apollo/client';

export const GET_STORE_INFORMATION_QUERY = gql`
  query GetStoreInformation {
    shop {
      name
    }
  }
`;
