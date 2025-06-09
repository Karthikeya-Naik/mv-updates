import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { textlogo, treelogo } from "../assets";
import { useAuth0 } from "@auth0/auth0-react";
import './drop.css';

const Navbar = () => {
  const [praiseDropdown, setPraiseDropdown] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [persistedUser, setPersistedUser] = useState(null);
  const location = useLocation();
  const userMenuRef = useRef(null);
  const praiseDropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const [resourcesDropdown, setResourcesDropdown] = useState(false);
  const resourcesDropdownRef = useRef(null);
  const [happeningsDropdown, setHappeningsDropdown] = useState(false);
  const happeningsDropdownRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setPersistedUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated && user) {
      localStorage.setItem('user', JSON.stringify(user));
      setPersistedUser(user);
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
      if (praiseDropdownRef.current && !praiseDropdownRef.current.contains(event.target)) {
        setPraiseDropdown(false);
      }
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target)) {
        setResourcesDropdown(false);
      }
      if (happeningsDropdownRef.current && !happeningsDropdownRef.current.contains(event.target)) {
        setHappeningsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleResourcesDropdown = () => {
    setResourcesDropdown(!resourcesDropdown);
    setPraiseDropdown(false);
    setUserMenuOpen(false);
    setHappeningsDropdown(false);
  };

  const handlePraiseDropdown = () => {
    setPraiseDropdown(!praiseDropdown);
    setResourcesDropdown(false);
    setUserMenuOpen(false);
    setHappeningsDropdown(false);
  };

  const handleHappeningsDropdown = () => {
    setHappeningsDropdown(!happeningsDropdown);
    setPraiseDropdown(false);
    setResourcesDropdown(false);
    setUserMenuOpen(false);
  };

  const handleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
    setPraiseDropdown(false);
    setResourcesDropdown(false);
    setHappeningsDropdown(false);
  };

  const closeMobileMenu = () => {
    setToggle(false);
    setPraiseDropdown(false);
    setUserMenuOpen(false);
    setResourcesDropdown(false);
    setHappeningsDropdown(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    logout({ returnTo: window.location.origin });
    setUserMenuOpen(false);
  };

  const isLinkActive = (path) => {
    return path === "/" ? location.pathname === path : location.pathname.startsWith(path);
  };

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT US" },
    { path: "/offerings", label: "OFFERINGS" },

  ];

  const HappeningsDropdown = () => (
    <div className="relative group" ref={happeningsDropdownRef}>
      <div
        className="flex items-center space-x-1 cursor-pointer py-2"
        onClick={handleHappeningsDropdown}
      >
        <span className="hover:text-[#65B741] transition-colors">HAPPENINGS</span>
        {happeningsDropdown ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </div>
      {happeningsDropdown && (
        <div 
          className="absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50"
        >
          <Link to="/events" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#65B741]"
            onClick={closeMobileMenu}>
            Events
          </Link>
          <Link to="/webinars" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#65B741]"
            onClick={closeMobileMenu}>
            Webinars
          </Link>
          <Link to="/c" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#65B741]"
            onClick={closeMobileMenu}>
            Courses
          </Link>
        </div>
      )}
    </div>
  );

  // Rest of your existing dropdown components...
  const PraiseDropdown = () => (
    // ... PraiseDropdown component code remains the same
    <div className="relative group" ref={praiseDropdownRef}>
      <div
        className="flex items-center space-x-1 cursor-pointer py-2"
        onClick={handlePraiseDropdown}
      >
        <span className="hover:text-[#65B741] transition-colors">ACCOLADES</span>
        {praiseDropdown ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </div>
      {praiseDropdown && (
        <div 
          className="absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50"
        >
          <Link to="/rewards-recognition" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#65B741]"
            onClick={closeMobileMenu}>
            Rewards & Recognitions
          </Link>
          <Link to="/testimaonials" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#65B741]"
            onClick={closeMobileMenu}>
            Testimonials
          </Link>
          <Link to="/certificates" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#65B741]"
            onClick={closeMobileMenu}>
            Certificates
          </Link>
        </div>
      )}
    </div>
  );

  const ResourcesDropdown = () => (
    // ... ResourcesDropdown component code remains the same
    <div className="relative group" ref={resourcesDropdownRef}>
      <div
        className="flex items-center space-x-1 cursor-pointer py-2"
        onClick={handleResourcesDropdown}
      >
        <span className="hover:text-[#65B741] transition-colors">RESOURCES</span>
        {resourcesDropdown ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </div>
      {resourcesDropdown && (
        <div 
          className="absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50"
        >
          <Link to="/resources/blogs" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#65B741]"
            onClick={closeMobileMenu}>
            Blogs
          </Link>
          <Link to="/resources/newsletters" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#65B741]"
            onClick={closeMobileMenu}>
            Newsletters
          </Link>
        </div>
      )}
    </div>
  );

  
  const UserMenu = () => (
    // ... UserMenu component code remains the same
    <div className="relative" ref={userMenuRef}>
      <button
        onClick={handleUserMenu}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <img
          src={persistedUser?.picture}
          alt={persistedUser?.name}
          className="w-8 h-8 rounded-full border border-gray-300"
        />
        <IoMdArrowDropdown className={`transition-transform duration-200 ${userMenuOpen ? 'rotate-180' : ''}`} />
      </button>

      {userMenuOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
            <p className="text-sm text-gray-500">Signed in as</p>
            <p className="text-sm font-medium truncate">
              {persistedUser.name
                .split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(" ")}
            </p>
          </div>
          
          <div className="py-1">
            <Link to="/profile" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#65B741]"
              onClick={closeMobileMenu}>
              Profile
            </Link>
            {/* <Link to="/1234" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#65B741]"
              onClick={closeMobileMenu}>
              Subscribers
            </Link> */}
            <Link to="/courses" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#65B741]"
              onClick={closeMobileMenu}>
              Courses
            </Link>
          </div>

          <div className="border-t border-gray-100">
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <nav className="sticky top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={treelogo} alt="treelogo" className="h-12 w-auto" />
            <img src={textlogo} alt="textlogo" className="h-8 w-auto hidden md:block" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium hover:text-[#65B741] transition-colors ${
                  isLinkActive(item.path) ? "text-[#65B741]" : "text-gray-700"
                }`}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
            <HappeningsDropdown />
            <ResourcesDropdown />
            <PraiseDropdown />
            <Link
              to="/contact"
              className={`text-sm font-medium hover:text-[#65B741] transition-colors ${
                isLinkActive("/contact") ? "text-[#65B741]" : "text-gray-700"
              }`}
              onClick={closeMobileMenu}
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setToggle(!toggle)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {toggle ? (
                <IoClose className="h-6 w-6" />
              ) : (
                <IoMenu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Auth Section */}
          <div className="hidden md:block">
            {persistedUser ? (
              <UserMenu />
            ) : (
              <button
                onClick={() => loginWithRedirect()}
                className="bg-[#65B741] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#54a332] transition-colors"
              >
                Login
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {toggle && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isLinkActive(item.path)
                      ? "text-[#65B741] bg-gray-50"
                      : "text-gray-700 hover:text-[#65B741] hover:bg-gray-50"
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="px-3 py-2">
                <HappeningsDropdown />
              </div>
              <div className="px-3 py-2">
                <ResourcesDropdown />
              </div>
              <div className="px-3 py-2">
                <PraiseDropdown />
              </div>
              
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isLinkActive("/contact")
                    ? "text-[#65B741] bg-gray-50"
                    : "text-gray-700 hover:text-[#65B741] hover:bg-gray-50"
                }`}
                onClick={closeMobileMenu}
              >
                CONTACT US
              </Link>

              {/* Mobile Auth Section */}
              {persistedUser ? (
                <div className="px-3 py-2 border-t border-gray-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src={persistedUser.picture}
                      alt={persistedUser.name}
                      className="w-8 h-8 rounded-full border border-gray-300"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {persistedUser.name
                        .split(" ")
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                        .join(" ")}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <Link
                      to="/profile"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#65B741] hover:bg-gray-50"
                      onClick={closeMobileMenu}
                    >
                      Profile
                    </Link>
                    {/* <Link
                      to="/1234"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#65B741] hover:bg-gray-50"
                      onClick={closeMobileMenu}
                    >
                      Subscribers
                    </Link> */}
                    <Link
                      to="/courses"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#65B741] hover:bg-gray-50"
                      onClick={closeMobileMenu}
                    >
                      Courses
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-gray-50"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="px-3 py-2 border-t border-gray-200">
                  <button
                    onClick={() => loginWithRedirect()}
                    className="w-full px-4 py-2 text-center text-white bg-[#65B741] rounded-md hover:bg-[#54a332] transition-colors"
                  >
                    Login
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;