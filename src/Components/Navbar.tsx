import { useState } from "react";
import { Heart, ShoppingCart, Search, UserRound } from "lucide-react";
import { ThemeToggle } from "./GlobalButtons";

function Navbar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSearchBar = () => setIsSearchVisible(!isSearchVisible);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Main navbar container */}
      <div className="navbar bg-base-100">
        {/* Start section of the navbar (Logo, dropdown for small screens) */}
        <div className="navbar-start">
          {/* Button to trigger the sidebar */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* Logo section */}
          <div id="icon" className="flex">
            <div>
              <img
                src="Logo.svg"
                alt="Furniro Logo"
                className="me-1 hidden lg:flex"
              />
            </div>
            <div>
              <a className="font-bold text-3xl">Furniro</a>
            </div>
          </div>
        </div>

        {/* Center section of the navbar (links for large screens) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-12 font-semibold">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Shop</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>

        {/* End section of the navbar (icons and search bar for large screens) */}
        <div className="navbar-end items-center lg:flex gap-6 mx-3">
          <button className="hidden lg:flex">
            <UserRound className="hover:scale-125 transition delay-75" />
          </button>
          <div className="relative flex items-center">
            <button onClick={toggleSearchBar}>
              <Search className="hover:scale-125 transition delay-75" />
            </button>
            <input
              type="text"
              className={`${
                isSearchVisible
                  ? "w-48 opacity-100"
                  : "w-0 opacity-0 pointer-events-none"
              } transition-all duration-300 ease-in-out ml-2 p-2 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Search..."
            />
          </div>
          <button className="hidden lg:flex">
            <Heart className="hover:scale-125 transition delay-75" />
          </button>
          <button className="hidden lg:flex">
            <ShoppingCart className="hover:scale-125 transition delay-75" />
          </button>
        </div>
      </div>

      {/* Sidebar for small screens */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-base-100 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Sidebar content */}
        <div className="flex justify-around mt-6">
          <button className="btn">
            <UserRound className="mb-1.5 mt-1.5" />
          </button>
          <button className="btn">
            <Heart className="mb-1.5 mt-1.5" />
          </button>
          <button className="btn">
            <ShoppingCart className="mb-1.5 mt-1.5" />
          </button>
        </div>
        {/* Search bar for small screens */}
        <div className="relative flex items-center px-4 mt-4">
          <button onClick={toggleSearchBar} className="flex items-center">
            <Search className="hover:scale-125 transition delay-75" />
          </button>
          <input
            type="text"
            className={`${
              isSearchVisible
                ? "w-full opacity-100"
                : "w-0 opacity-0 pointer-events-none"
            } transition-all duration-300 ease-in-out ml-2 p-2 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Search..."
          />
        </div>
        <div>
          <ul className="menu p-4 space-y-2 mt-6">
            <li>
              <a className="btn">Home</a>
            </li>
            <li>
              <a className="btn">Shop</a>
            </li>
            <li>
              <a className="btn">About</a>
            </li>
            <li>
              <a className="btn">Contact</a>
            </li>
          </ul>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4">
          <ThemeToggle />
        </div>
      </div>
      {/* Backdrop to close sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}

export { Navbar };
