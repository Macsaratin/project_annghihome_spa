import React from "react";
import { Link } from "react-router-dom";

const SideBar =() =>{
    return(

      <aside className="left-sidebar">
          {/* Sidebar navigation */}
          <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
            <ul id="sidebarnav">
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span className="hide-menu">Home</span>
              </li>
              
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/index">
                  <span><i className="ti ti-layout-dashboard"></i></span>
                  <span className="hide-menu">Dashboard</span>
                </Link>
              </li>
                            
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/admin/header">
                  <span><i className="ti ti-layout-dashboard"></i></span>
                  <span className="hide-menu">Header</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/admin/footer">
                  <span><i className="ti ti-layout-dashboard"></i></span>
                  <span className="hide-menu">Footer</span>
                </Link>
              </li>

              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span className="hide-menu">COMPONENT</span>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/admin/product">
                  <span><i className="ti ti-article"></i></span>
                  <span className="hide-menu">Sản Phẩm</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/admin/blog">
                  <span><i className="ti ti-alert-circle"></i></span>
                  <span className="hide-menu">Bài Viết</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/admin/category">
                  <span><i className="ti ti-cards"></i></span>
                  <span className="hide-menu">Dịch vụ</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/admin/intro">
                  <span><i className="ti ti-file-description"></i></span>
                  <span className="hide-menu">Giới thiệu</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/ui-typography">
                  <span><i className="ti ti-typography"></i></span>
                  <span className="hide-menu">Typography</span>
                </Link>
              </li>

              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span className="hide-menu">AUTH</span>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/authentication-login">
                  <span><i className="ti ti-login"></i></span>
                  <span className="hide-menu">Login</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/authentication-register">
                  <span><i className="ti ti-user-plus"></i></span>
                  <span className="hide-menu">Register</span>
                </Link>
              </li>

              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span className="hide-menu">EXTRA</span>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/icon-tabler">
                  <span><i className="ti ti-mood-happy"></i></span>
                  <span className="hide-menu">Icons</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/sample-page">
                  <span><i className="ti ti-aperture"></i></span>
                  <span className="hide-menu">Sample Page</span>
                </Link>
              </li>
            </ul>
            <div className="unlimited-access hide-menu bg-light-primary position-relative mb-7 mt-5 rounded">
            </div>
          </nav>
      </aside>
    );
}
export  default SideBar;