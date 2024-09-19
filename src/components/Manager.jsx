import React, { useEffect, useState } from "react";
import { useRef } from "react";

export const Manager = () => {

    const ref = useRef();
    const [isEyeCrossed, setIsEyeCrossed] = useState(true);
    const [form, setForm] = useState({ site: "", username: "", password: "" });
    const [passwordArray, setpasswordArray] = useState([]);
    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        let passwordArray;
        if (passwords) {
            setpasswordArray(JSON.parse(passwords));
        }
    }, [])
    

    const showPassword = () => {
        if (isEyeCrossed) {
            ref.current.src = "/eye.png";
        } else {
            ref.current.src = "/eyecross.jpg"
        }
        setIsEyeCrossed(!isEyeCrossed);
    };

    const savePassword = () => {
        console.log(form)
        setpasswordArray([...passwordArray, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form])
    }
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

  return (
    <div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="  mycontainer">
        <h1 className="text-4xl text-[#436186] font-bold text-center">
          Password.Manager
        </h1>
        <p className="text-[#1d2634] text-xl font-semibold text-center">
          You own password manager.
        </p>
        <div className="text-black flex flex-col p-4 gap-4 items-center">
          <input
            name="site"
            onChange={handleChange}
            value={form.site}
            type="text"
            className=" rounded-full border border-[#436186] w-full text-black p-4 py-1"
            placeholder="Enter website URL"
          />
          <div className="flex w-full justify-between gap-4">
            <input
              name="username"
              onChange={handleChange}
              value={form.username}
              type="text"
              className=" rounded-full border border-[#436186] w-full text-black p-4 py-1"
              placeholder="Enter Username"
            />
            <div className="relative">
              <input
                name="password"
                onChange={handleChange}
                value={form.password}
                type="text"
                className=" rounded-full border border-[#436186] w-full text-black p-4 py-1"
                placeholder="Enter Password"
              />
              <span
                className="absolute right-0 top-0 cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="p-2 "
                  width={38}
                  src="/eyecross.jpg"
                  alt="eye"
                />
              </span>
            </div>
          </div>

          <button
            className="flex justify-center items-center bg-[#a7bbd2] rounded-full px-8 py-2 gap-2 font-medium w-fit border border-[#436186] hover:bg-[#567ba1]"
            onClick={savePassword}
          >
            <lord-icon
              src="https://cdn.lordicon.com/zrkkrrpl.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div> No passwords to show!</div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full overflow-hidden rounded-md">
              <thead className="bg-[#436186] text-white">
                <tr>
                  <th className="py-2">Sit</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                </tr>
              </thead>
              <tbody className="bg-gray-100">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center py-2 border border-white w-32">
                        <a href={item.site} target="_blank">
                          {" "}
                          {item.site}{" "}
                        </a>
                      </td>
                      <td className="text-center py-2 border border-white w-32">
                        {item.username}
                      </td>
                      <td className="text-center py-2 border border-white w-32">
                        {item.password}
                      </td>
                    </tr>
                  );
                })}
                
                
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
