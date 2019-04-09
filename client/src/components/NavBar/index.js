import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      Nav Bar
      <br/>
      <Nav.Link href="#home"><Link to="/">link to search</Link></Nav.Link>
      <br/>
      <Link to="/saved">link to saved</Link>
    </div>
  );
}

export default NavBar;
