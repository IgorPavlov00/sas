"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flexBetween max-container padding-container relative z-30 py-5 transition-all ${
        isSticky ? "sticky top-0 bg-white/80 backdrop-blur-lg" : ""
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="https://ibb.co/0jPQ2Cjh"
          alt="logo"
          width={74}
          height={29}
        />
      </Link>

      {/* Desktop Links */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className={`regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold ${
                pathname === link.href ? "font-bold" : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Button */}
      <div className="lg:flex hidden">
        <Button
          type="button"
          title="Contact us"
          icon="/user.svg"
          variant="btn_dark_green"
          className="rounded-full px-6 py-2 text-white bg-green-700 hover:bg-green-800 transition flex items-center gap-2"
          onClick={() => {
            const footer = document.querySelector("footer");
            if (footer) {
              footer.scrollIntoView({ behavior: "smooth" });
            } else {
              console.error("Footer element not found!");
            }
          }}
        />
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden flex items-center">
        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-white shadow-md flex flex-col items-center py-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`my-2 text-lg text-gray-800 hover:font-bold ${
                pathname === link.href ? "font-bold" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            type="button"
            title="Contact us"
            icon="/user.svg"
            variant="btn_dark_green"
            className="rounded-full mt-4 px-6 py-2 text-white bg-green-700 hover:bg-green-800 transition flex items-center gap-2"
            onClick={() => {
              setIsMobileMenuOpen(false);
              const footer = document.querySelector("footer");
              if (footer) {
                footer.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
