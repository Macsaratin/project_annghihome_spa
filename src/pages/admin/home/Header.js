import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
      <header className="app-header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="navbar-nav">
                <div className="brand-logo d-flex align-items-center justify-content-between">
                  <Link to="/admin" className="text-nowrap logo-img">
                    <img src="../assets/images/logos/dark-logo.svg" width="180" alt="logo" />
                  </Link>
                  <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                    <i className="ti ti-x fs-8"></i>
                  </div>
                </div>
          </ul>

          <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
            <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-icon-hover"
                  href="#st"
                  id="drop2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="../assets/images/profile/user-1.jpg"
                    alt="User"
                    width="35"
                    height="35"
                    className="rounded-circle"
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

    );
}
export default Header;