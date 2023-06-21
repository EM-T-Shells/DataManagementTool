export default function ProfileCard({ profile, clientId }) {

  if(profile.client.id === clientId){
    return null
  }
  
  return (
    <div className="col-md-6">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{profile.linkedIn}</h5>

            <a className="btn btn-light" href={`profiles/${profile.id}`}>
              view profile 
            </a>

            <p className="small">
              Company Slogan: <strong >{profile.companySlogan}</strong>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
