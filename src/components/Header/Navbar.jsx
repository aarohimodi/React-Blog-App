import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../../conf/container/Container";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";
import { RiMenuFill } from "react-icons/ri";
function Navbar({ search, setSearch }) {
  let url = useLocation();
  const user = useSelector((state) => state.auth.userData);
  const [ismenuOpen, setIsmenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandle = async () => {
    await authService.logout();
    dispatch(logout());
    navigate("/login");
  };
  const section = document.getElementById("posts");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
  const menu = [
    {
      name: "Home",
      url: "/",
      active: true,
    },
    {
      name: "About",
      url: "/about",
      active: true,
    },
    {
      name: "All Post",
      url: "/all-post",
      active: true,
    },
    {
      name: "Add Post",
      url: "/add-post",
      active: !!user,
    },
    {
      name: "Login",
      url: "/login",
      active: !user,
    },
    {
      name: "SignUp",
      url: "/signup",
      active: !user,
    },
    {
      name: "Contact",
      url: "/contact-us",
      active: true,
    },
  ];
  const filteredMenu = menu.filter((i) => i.active === true);
  return (
    <div className="sticky top-0 bg-white z-50">
      <Container>
        <div className="p-5 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Blogi<span className="text-green-600">Fy</span>
            </h2>
          </div>
          <div>
            <nav className="hidden md:flex">
              <ul className="flex gap-5 font-bold">
                {filteredMenu.map((item) => (
                  <li key={item.name}>
                    <Link to={item.url}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {user && (
            <button
              onClick={logoutHandle}
              className="hidden px-4 py-2 rounded-lg bg-green-600 text-white md:flex "
            >
              Logout
            </button>
          )}
          {url.pathname === "/" && (
            <div>
              <div className="hidden md:flex p-1 border border-green-600 rounded-full gap-2">
                <input
                  type="text"
                  className="focus:outline-none"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="w-10 h-10 flex justify-center items-center rounded-full bg-green-600 text-white">
                  S
                </button>
              </div>
            </div>
          )}

          <div className="md:hidden">
            <RiMenuFill size={30} onClick={() => setIsmenuOpen(true)} />
          </div>
        </div>
      </Container>

      <nav
        className={`fixed w-full top-0 left-0 z-50 h-full bg-white p-10 transform transition-transform duration-300 ease-in-out
          ${ismenuOpen ? "translate-x-0" : "-translate-x-full"}
          `}
      >
        <div className="relative w-full ">
          <div>
            <ul className="flex flex-col gap-5 font-bold">
              {filteredMenu.map((item) => (
                <li key={item.name}>
                  <Link to={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
            {user && (
              <button
                onClick={logoutHandle}
                className="px-4 py-2 rounded-lg bg-green-600 text-white mt-5"
              >
                Logout
              </button>
            )}
          </div>
          <button
            onClick={() => setIsmenuOpen((prev) => !prev)}
            className="absolute top-0 right-4 bg-green-600 text-white w-10 h-10 flex justify-center items-center rounded-full"
          >
            X
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
