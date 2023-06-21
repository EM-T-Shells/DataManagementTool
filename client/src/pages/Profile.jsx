import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import ClientInfo from "../components/ClientInfo";
import DeleteProfileButton from "../components/DeleteProfileButton";
import EditProfileForm from "../components/EditProfileForm";
import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "../queries/profileQueries";

export default function Profile() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROFILE, { variables: { id } });

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link
            to="/"
            className="btn btn-secondary btn-sm w-25 d-inline ms-auto"
          >
            Back
          </Link>

          <ClientInfo client={data.profile.client} />

     
          <br />
          <h5>Socials</h5>
          <hr />
          <p>{data.profile.linkedIn}</p>
          <p>{data.profile.twitter}</p>
          <p>{data.profile.instagram}</p>
          <br />
          <h5>Company Information</h5>
          <hr />
          <p>{data.profile.companyWebsite}</p>
          <p>{data.profile.companyAddress}</p>
          <p>{data.profile.companySlogan}</p>

          <EditProfileForm profile={data.profile} />
          
          <DeleteProfileButton profileId={data.profile.id} />
        </div>
      )}
    </>
  );
}
