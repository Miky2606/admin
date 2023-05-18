import * as icon from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";

export interface INav {
  name: string;
  url: string;
  icon: icon.IconType;
}

export const nav: INav[] = [
  {
    name: "Home",
    url: "/",
    icon: AiFillHome,
  },
  {
    name: "Categories",
    url: "/categories",
    icon: BiCategory,
  },
];
