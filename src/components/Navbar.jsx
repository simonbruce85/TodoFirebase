import React from "react";

import Logo from "./logo.png";

const Navbar = () => {

  return (
    <div style={{backgroundColor:"#000000", height:"10vh", display:"flex", alignItems:"center"}}>
          <img src={Logo} alt="Logo Image" style={{ height:"5vh"}} className="cursor-pointer"/>
    </div>
  );
};

export default Navbar;
