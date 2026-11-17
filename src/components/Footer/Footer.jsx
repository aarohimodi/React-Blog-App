import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 bg-[#f4f7f2]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Blogi<span className="text-green-600">Fy</span>
            </h2>

            <p className="mt-3 max-w-xs text-sm leading-6 text-gray-500">
              Ideas, stories and insights to help you learn, grow and make
              everyday life a little better.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900">Quick Links</h3>

            <ul className="space-y-2 text-sm text-gray-500">
              <Link to="/">
                <li className="cursor-pointer hover:text-green-600">Home</li>
              </Link>
              <Link to="/about">
                {" "}
                <li className="cursor-pointer hover:text-green-600">About</li>
              </Link>
              <Link to="/login">
                <li className="cursor-pointer hover:text-green-600">Login</li>
              </Link>
              <Link to="/signup">
                {" "}
                <li className="cursor-pointer hover:text-green-600">Signup</li>
              </Link>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900">Categories</h3>

            <ul className="space-y-2 text-sm text-gray-500">
              <li className="cursor-pointer hover:text-green-600">
                Technology
              </li>
              <li className="cursor-pointer hover:text-green-600">Lifestyle</li>
              <li className="cursor-pointer hover:text-green-600">Travel</li>
              <li className="cursor-pointer hover:text-green-600">
                Productivity
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h3 className="mb-4 font-semibold text-gray-900">Stay Connected</h3>

            <p className="mb-3 text-sm leading-5 text-gray-500">
              Get the latest articles and useful tips directly in your inbox.
            </p>

            <div className="flex overflow-hidden rounded-lg border border-gray-200 bg-white">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 px-3 py-2 text-sm outline-none"
              />

              <button className="bg-green-600 px-4 text-sm font-medium text-white hover:bg-green-700">
                Join
              </button>
            </div>
          </div> */}
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col justify-center text-center items-center gap-3 border-t border-gray-200 pt-5 text-sm text-gray-500 ">
          <p>© 2026 Blogify. All rights reserved.</p>

          {/* <div className="flex gap-4">
            <span className="cursor-pointer hover:text-green-600">
              Instagram
            </span>
            <span className="cursor-pointer hover:text-green-600">
              Facebook
            </span>
            <span className="cursor-pointer hover:text-green-600">Twitter</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
