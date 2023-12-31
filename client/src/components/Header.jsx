import logo from "./assets/logo_sc.png";

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={logo} alt="logo" className="mr-2" />
            <div className=''>NFC MGMT</div>
          </div>
        </a>
      </div>
    </nav>
  );
}
