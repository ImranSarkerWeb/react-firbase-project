import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <Link className="btn btn-ghost normal-case text-xl">AuthMaster</Link>
        <Link className="btn btn-ghost normal-case text-xl">Register</Link>
        <Link className="btn btn-ghost normal-case text-xl">Login</Link>
        {/* <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link> */}
      </div>
    </div>
  );
};

export default Header;
