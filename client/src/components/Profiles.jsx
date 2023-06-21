import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import ProfileCard from "./ProfileCard";
import { GET_PROFILES } from "../queries/profileQueries";


export default function Profiles() {
  const { loading, error, data } = useQuery(GET_PROFILES);

  if (loading) return <Spinner />;
  if (error) return <p>something went wrong</p>;

  return (
    <>
      {data.profiles.length > 0 ? (
        <div className="row mt-4">
          {data.profiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      ) : (
        <p>No profiles exist</p>
      )}
    </>
  );
}
