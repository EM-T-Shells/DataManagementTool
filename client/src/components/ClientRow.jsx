import { FaTrash, FaEdit } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";
import { GET_PROFILES} from "../queries/profileQueries";

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROFILES }],

    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      const { profiles } = cache.readQuery({ query: GET_PROFILES });

      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter((client) => client.id !== deleteClient.id),
        },
      });

      cache.writeQuery({
        query: GET_PROFILES,
        data: {
          profiles: profiles.filter((profile) => profile.clientId !== deleteClient.id),
        },
      });
    },
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>{client.password}</td>
      <td>
        <button className="update btn btn-primary btn-sm me-2">
          <FaEdit />
        </button>
        <button className="delete btn btn-danger btn-sm" onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
