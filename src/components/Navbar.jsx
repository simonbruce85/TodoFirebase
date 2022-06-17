import React from "react";

import Logo from "./logo.png";

const Navbar = () => {

  return (
    <div  className="bg-[#393E46] h-[10vh] items-center flex ">
          <img  src={Logo} alt="Logo Image" className="h-[5vh] cursor-pointer ml-2"/>
    </div>
  );
};

export default Navbar;
