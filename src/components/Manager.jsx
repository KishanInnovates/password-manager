import React from "react";

export const Manager = () => {
    const showPassword = () => {
        
    }

  return (
    <div>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="  mycontainer">
        <h1 className="text-4xl text-[#436186] font-bold text-center">
          Password.Manager
        </h1>
        <p className="text-[#1d2634] text-xl font-semibold text-center">
          You own password manager.
        </p>
        <div className="text-black flex flex-col p-4 gap-4 items-center">
          <input
            type="text"
            className=" rounded-full border border-[#436186] w-full text-black p-4 py-1"
            placeholder="Enter website URL"
          />
          <div className="flex w-full justify-between gap-4">
            <input
              type="text"
              className=" rounded-full border border-[#436186] w-full text-black p-4 py-1"
              placeholder="Enter Username"
            />
            <div className="relative">
              <input
                type="text"
                className=" rounded-full border border-[#436186] w-full text-black p-4 py-1"
                placeholder="Enter Password"
              />
              <span className="absolute right-0 top-0 cursor-pointer onclick={showPassword}">
                <img className="p-2 " width={38} src="/eyecross.jpg" alt="eye" />
              </span>
            </div>
          </div>

          <button className="flex justify-center items-center bg-[#a7bbd2] rounded-full px-8 py-2 gap-2 font-medium w-fit border border-[#436186] hover:bg-[#567ba1]">
            <lord-icon
              src="https://cdn.lordicon.com/zrkkrrpl.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </div>
  );
};
