import { gql } from "@apollo/client";

const ADD_CLIENT = gql`
  mutation addClient(
    $name: String!
    $email: String!
    $password: String!
    $phone: String!
  ) {
    addClient(name: $name, email: $email, password: $password, phone: $phone) {
      id
      name
      email
      password
      phone
    }
  }
`;

const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      email
      password
      phone
    }
  }
`;

export { DELETE_CLIENT, ADD_CLIENT };
