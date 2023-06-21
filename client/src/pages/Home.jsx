import AddClientModal from "../components/AddClientModal";
import AddProfileModal from "../components/AddProfileModal";
import Profiles from "../components/Profiles";
import Clients from "../components/Clients";


export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
      <AddClientModal />
      <AddProfileModal />
      </div>
      <Profiles />
      <hr />
      <Clients />
    </>
  );
}
