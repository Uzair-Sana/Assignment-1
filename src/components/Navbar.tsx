"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className=" h-12 bg-[#043873] text-white py-2 px-2 flex justify-around items-center">
        <div>
          <h1 className="text-2xl font-semibold">
            <Link href="/" className="hover:text-green-400">
              Uzair Sana
            </Link>
          </h1>
        </div>
        <div>
          <ul className="flex space-x-20">
            <li>
              <Link href="/ourservices" className=" hover:text-gray-500">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/aboutus" className=" hover:text-gray-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contactus" className=" hover:text-gray-500">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/jobs" className=" hover:text-gray-500">
                Jobs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
