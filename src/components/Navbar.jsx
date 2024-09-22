import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-[#d0dae7] text-black text-xl">
      <div className="mycontainer flex justify-between items-center px-8 py-5 h-14">
        <div className="logo font-bold">
          <span className="text-[#436186]">&lt;</span>
          <span className="text-[#1d2634]">Password</span>
          <span className="text-[#436186]">.Manager/&gt;</span>
        </div>
        {/* <ul>
          <li className="flex gap-4">
            <a href="#" className="hover:font-bold">
              Home
            </a>
            <a href="/" className="hover:font-bold">
              About
            </a>
          </li>
        </ul> */}
        <div>
          <a
            href="https://github.com/KishanInnovates/password-manager"
            target="_blank"
          >
            <img
              className="p-1 w-12"
              src="/github.png"
              alt="github"
              height={30}
              width={30}
            ></img>
          </a>
        </div>
      </div>
    </nav>
  );
};
