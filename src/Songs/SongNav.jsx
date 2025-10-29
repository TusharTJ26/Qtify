import "./SongNav.css"
const SongNav = () => {
  return (
    <>
    <h3 style={{textAlign:"left"}}>Songs</h3>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          {/* <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link custom-nav-link active" aria-current="page" href="#">
                  All
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">
                  Rock
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">
                  Pop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">
                  Jazz
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">
                  Blues
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SongNav;
