import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center bg-transparent p-4 text-white">
        <div className="text-lg font-bold">StakeX</div>
        <div>
          <ul className="flex space-x-4">
            <li className=" hover:text-red-500   hover:shadow-[0_0_10px_red]">
              Home
            </li>
            <li className=" hover:text-red-500 hover:shadow-[0_0_10px_red]">
              About
            </li>
            <li className=" hover:text-red-500 hover:shadow-[0_0_10px_red]">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex space-x-4">
          <div>
            <h2>Money</h2>
          </div>

          <div>Auth</div>
          <div>WallettConnect</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
