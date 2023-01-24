import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="nav">
        <div className="nav-logo">Splash💦</div>

        <form className="nosubmit">
          <input
            className="nosubmit"
            type="search"
            placeholder="Search..... "
          />
        </form>
        <div className="list">
          <ul>
            <li>Advertise</li>
            <li>Blog</li>
            <li>Photos</li>
          </ul>
        </div>
        <div className="btn">Submit Photo</div>
      </div>
      <hr />
    </div>
  );
};

export default NavBar;
