import React from "react";
import Link from "next/link";
import Square from "./square";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <main className="fixed top-0 left-0 right-0  flex justify-between items-center lg:px-20 shadow-md p-5 z-50 bg-white md:px-5">
        <div>
          <Square />
          <span className="font-bold text-2xl md:text-lg xs:text-base ">
            Nguyễn Minh Tuấn
          </span>
          / <span>Juinior Web Dev</span>
        </div>
        <div className=" xs:hidden md:hidden">
          <ul className="flex gap-20 md:gap-10">
            <li>
              <Link href="/" className="hover:text-pink1-cus">
                Home
              </Link>
            </li>
            <li>
              <Link href="/resume" className="hover:text-pink1-cus">
                Resume
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-pink1-cus">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          <FaBars className="text-xl" />
        </button>
      </main>
      {open && (
        <div className="lg:hidden pt-20 fixed top-0 left-0 right-0 z-10  drop-shadow-xl bg-pink1-cus ">
          <AiOutlineClose
            className="text-2xl cursor-pointer ml-auto mr-5 right-0"
            onClick={() => setOpen(!open)}
          />
          <ul className="flex flex-col w-full justify-center items-center gap-2">
            <li>
              <Link href="/" className="hover:text-blue-cus">
                Home
              </Link>
            </li>
            <li>
              <Link href="/resume" className="hover:text-blue-cus">
                Resume
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-cus">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
