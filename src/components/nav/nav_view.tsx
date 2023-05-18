"use client";

import { usePathname } from "next/navigation";
import { INav, nav } from "../../../utils/nav/nav.interface";
import Link from "next/link";
import { Signin } from "./signin";
import { GiHamburgerMenu } from "react-icons/gi";

export const Nav = () => {
  return (
    <nav className="bg-white flex justify-between items-center p-2 shadow-sm shadow-gray-500 sticky top-0">
      <div className="flex gap-3 items-center">
        <GiHamburgerMenu />
        <div className="text-black">Hola</div>
      </div>

      <ul className="lg:flex justify-between items-center hidden">
        {nav.map((e) => (
          <NavItem nav={e} key={e.name} />
        ))}
      </ul>

      <Signin />
    </nav>
  );
};

export const NavItem = ({ nav }: { nav: INav }) => {
  const pathname = usePathname();

  return (
    <li className="text-black  p-2 items-center flex flex-col justify-center ">
      <Link
        href={nav.url}
        className={`${
          pathname?.toLowerCase() === nav.url
            ? "text-purple-500 hover:text-black"
            : "text-black hover:text-purple-500"
        } flex justify-center items-center flex-col `}
      >
        <nav.icon className="text-lg" />
        <p className="text-xs">{nav.name}</p>
      </Link>
    </li>
  );
};
