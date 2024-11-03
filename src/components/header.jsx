import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="bg-transparent text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Image src="/Logo.png" width={119} height={62} alt="logo" />
        <nav className="flex-1 flex justify-center">
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-gray-300">
                Projects
              </a>
            </li>
            <li>
              <a href="/teams" className="hover:text-gray-300">
                Teams
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button className="w-[174px] h-[60px] border rounded-full">
          Lets talk
        </button>
      </div>
    </header>
  );
}

export default Header;
