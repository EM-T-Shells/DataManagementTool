import { gql } from "@apollo/client";

const GET_PROFILES = gql`
  query GetProfiles {
    profiles {
      id
      companyWebsite
      companyAddress
      companySlogan
      linkedIn
      twitter
      instagram
      client {
        id
      }
    }
  }
`;

const GET_PROFILE = gql`
  query GetProfile($id: ID!) {
    profile(id: $id) {
      id
      companyWebsite
      companyAddress
      companySlogan
      linkedIn
      twitter
      instagram
      client {
        id 
        name
        email 
        phone
      }
    }
  }
`;

export { GET_PROFILES, GET_PROFILE };
