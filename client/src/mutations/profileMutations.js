import { gql } from "@apollo/client";

const ADD_PROFILE = gql`
  mutation addProfile(
    $linkedIn: String
    $twitter: String
    $instagram: String
    $companyWebsite: String
    $companyAddress: String
    $companySlogan: String
    $clientId: ID!
  ) {
    addProfile(
      linkedIn: $linkedIn
      twitter: $twitter
      instagram: $instagram
      companyWebsite: $companyWebsite
      companyAddress: $companyAddress
      companySlogan: $companySlogan
      clientId: $clientId
    ) {
      id
      linkedIn
      twitter
      instagram
      companyWebsite
      companyAddress
      companySlogan
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

const UPDATE_PROFILE = gql`
  mutation updateProfile(
    $id: ID!
    $linkedIn: String
    $twitter: String
    $instagram: String
  ) {
    updateProfile(
      id: $id
      linkedIn: $linkedIn
      twitter: $twitter
      instagram: $instagram
    )
  }
`;

const DELETE_PROFILE = gql`
  mutation deleteProfile($id: ID!) {
    deleteProfile(id: $id) {
      id
    }
  }
`;

export { ADD_PROFILE, DELETE_PROFILE, UPDATE_PROFILE };
