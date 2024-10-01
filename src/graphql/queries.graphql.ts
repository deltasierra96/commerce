import { gql } from '@apollo/client';

export const GET_STORE_INFORMATION = gql`
  query GetStoreInformation {
    shop {
      name
    }
  }
`;
