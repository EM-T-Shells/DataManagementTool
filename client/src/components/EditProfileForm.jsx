import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_PROFILE } from "../queries/profileQueries";
import { UPDATE_PROFILE } from "../mutations/profileMutations";

export default function EditProfileForm(profile) {
    const [linkedIn, setLinkedIn] = useState("");
    const [twitter, setTwitter] = useState("");
    const [instagram, setInstagram] = useState("");
    const [companyWebsite, setCompanyWebsite] = useState("");
    const [companyAddress, setCompanyAddress] = useState("");
    const [companySlogan, setCompanySlogan] = useState("");

    const [updateProfile] = useMutation(UPDATE_PROFILE, {
        variables: {
           id: profile.id,
           linkedIn,
           twitter,
           instagram,
           companyWebsite,
           companyAddress, 
        },
        refetchQueries: [{ query: GET_PROFILE, variables : { id: profile.id } }]
    });

    const onSubmit = (e) => {
        e.preventDefault();

        if( !linkedIn || !twitter || !instagram ||!companyWebsite || !companyAddress ||!companySlogan) {
            return alert("Please fill in all fields");
    }
    updateProfile(linkedIn, twitter, instagram, companyWebsite, companyAddress, companySlogan);
};

  return (
    <div className="mt-5">
      <h3>Update Profile</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">LinkedIn</label>
          <textarea
            type="text"
            className="form-control"
            id="linkedIn"
            value={linkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Twitter</label>
          <textarea
            type="text"
            className="form-control"
            id="twitter"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Instagram</label>
          <textarea
            type="text"
            className="form-control"
            id="linkedIn"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">CompanyWebsite</label>
          <textarea
            type="text"
            className="form-control"
            id="companyWebsite"
            value={companyWebsite}
            onChange={(e) => setCompanyWebsite(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">CompanyAddress</label>
          <textarea
            type="text"
            className="form-control"
            id="companyAddress"
            value={companyAddress}
            onChange={(e) => setCompanyAddress(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">CompanySlogan</label>
          <textarea
            type="text"
            className="form-control"
            id="companySlogan"
            value={companySlogan}
            onChange={(e) => setCompanySlogan(e.target.value)}
          ></textarea>
        </div>

        <button type='submit' className='btn btn-primary'>Submit</button>

      </form>
    </div>
  );
}

