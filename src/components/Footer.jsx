import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaAmilia,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-24">
      <div className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <a className="flex items-center gap-2 text-primary font-extrabold text-2xl hover:text-indigo-600 transition-colors">
            <FaAmilia size={24} />
            <span className="-ml-2 font-extrabold text-2xl">rtify</span>
          </a>
          <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
            Discover, share, and connect with artists worldwide. Artify is your
            platform to showcase creativity and explore masterpieces.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-primary transition">
                Home
              </a>
            </li>
            <li>
              <a href="/explore" className="hover:text-primary transition">
                Explore Artworks
              </a>
            </li>
            <li>
              <a href="/add" className="hover:text-primary transition">
                Add Artwork
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-primary transition">
                My Gallery
              </a>
            </li>
            <li>
              <a href="/favorites" className="hover:text-primary transition">
                My Favorites
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Connect With Us</h2>
          <div className="flex gap-4 mb-4">
            <a href="#" className="hover:text-primary transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaXTwitter />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaLinkedinIn />
            </a>
          </div>
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Artify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
