import React, { useState } from "react";
import { NavLink } from "react-router";
import { Search, Menu, User, Heart, ShoppingCart } from "lucide-react";
import avatarImg from "../assets/avatar.png";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart", href: "/Cart" },
  { name: "Check Out", href: "/cheackout" },
];

function Navbar() {
  const currentUser = true;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <div className="flex items-center md:gap-16 gap-4">
          <NavLink to="/">
            <Menu className="size-6" />
          </NavLink>
          <div className="relative sm:w-72 w-40 space-x-2">
            <Search className="absolute inline-block left-3 inset-y-2 size-4" />
            <input
              type="text"
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-1 px-8 rounded-md focus:outline-none"
            />
          </div>
        </div>
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatarImg}
                    alt=""
                    className={`rounded-full size-6 ${
                      currentUser ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w48 bg-white shadow-lg rounded-md z-40">
                    <ul>
                      {navigation.map((item, index) => (
                        <li
                          key={item.name}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <NavLink
                            to={item.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <NavLink to="/login">
                <User className="size-6" />
              </NavLink>
            )}
          </div>
          <button className="hidden sm:block">
            <Heart className="size-6" />
          </button>
          <NavLink
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <ShoppingCart />
            <span className="text-sm font-semibold sm:ml-1">0</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
