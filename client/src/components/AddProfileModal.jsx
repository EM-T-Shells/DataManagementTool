import { useState } from "react";
import { FaList } from "react-icons/fa";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_PROFILE } from "../mutations/profileMutations";
import { GET_PROFILES } from "../queries/profileQueries";
import { GET_CLIENTS } from "../queries/clientQueries";

export default function AddProfileModal() {
  const [clientId, setClientId] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companySlogan, setCompanySlogan] = useState("");

  const [addProfile] = useMutation(ADD_PROFILE, {
    variables: {
      clientId,
      linkedIn,
      twitter,
      instagram,
      companyWebsite,
      companyAddress,
      companySlogan
    },
    update(cache, { data: { addProfile } }) {
      const { profiles } = cache.readQuery({ query: GET_PROFILES });
      cache.writeQuery({
        query: GET_PROFILES,
        data: { profiles: [...profiles, addProfile] },
      });
    },
  });

  const { loading, error, data } = useQuery(GET_CLIENTS);

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      linkedIn === "" ||
      twitter === "" ||
      instagram === "" ||
      companyWebsite === "" ||
      companyAddress === "" ||
      companySlogan === ""
    ) {
      return alert("All fields are required");
    }

    addProfile(
      clientId,
      linkedIn,
      twitter,
      instagram,
      companyWebsite,
      companyAddress,
      companySlogan
    );

    setClientId("");
    setLinkedIn("");
    setTwitter("");
    setInstagram("");
    setCompanyWebsite("");
    setCompanyAddress("");
    setCompanySlogan("");
  };

  if (loading) return null;
  if (error) return "Something went wrong";

  return (
    <>
      {!loading && !error && (
        <>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#addProfileModal"
          >
            <div className="d-flex align-items-center">
              <FaList />
              <div className="icon">New Profile</div>
            </div>
          </button>

          <div
            className="modal fade m-2"
            id="addProfileModal"
            aria-labelledby="addProfileModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="addProfileModalLabel">
                    Add profile
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={onSubmit}>
                    <div className="mb-3">
                      <label className="form-label">LinkedIn</label>
                      <input
                        type="text"
                        className="form-control"
                        id="linkedIn"
                        value={linkedIn}
                        onChange={(e) => setLinkedIn(e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Twitter</label>
                      <input
                        type="text"
                        className="form-control"
                        id="twitter"
                        value={twitter}
                        onChange={(e) => setTwitter(e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Instagram</label>
                      <input
                        type="text"
                        className="form-control"
                        id="linkedIn"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">CompanyWebsite</label>
                      <input
                        type="text"
                        className="form-control"
                        id="companyWebsite"
                        value={companyWebsite}
                        onChange={(e) => setCompanyWebsite(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">CompanyAddress</label>
                      <input
                        type="text"
                        className="form-control"
                        id="companyAddress"
                        value={companyAddress}
                        onChange={(e) => setCompanyAddress(e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">CompanySlogan</label>
                      <input
                        type="text"
                        className="form-control"
                        id="companySlogan"
                        value={companySlogan}
                        onChange={(e) => setCompanySlogan(e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Client</label>
                      <select
                        id="clientId"
                        className="form-select"
                        value={clientId}
                        onChange={(e) => setClientId(e.target.value)}
                      >
                        <option value="">Select Client</option>
                        {data.clients.map((client) => (
                          <option key={client.id} value={client.id}>
                            {client.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      data-bs-dismiss="modal"
                      className="btn btn-secondary"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
