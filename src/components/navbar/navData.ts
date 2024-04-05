import React, { ReactElement, ReactNode } from "react";

import { IconType } from "react-icons";
import {
  FaFacebook,
  FaInstagram,
  FaReddit,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";

export interface ISocials {
  id: number;
  name: string;
  icon: IconType;
}

export interface INavLinks {
  id: number;
  name: string;
  path: string;
}

export const socialsIcon: ISocials[] = [
  {
    id: 1,
    name: "instagram",
    icon: FaInstagram,
  },
  {
    id: 2,
    name: "twitter",
    icon: FaTwitter,
  },
  {
    id: 3,
    name: "facebook",
    icon: FaFacebook,
  },
  {
    id: 4,
    name: "reddit",
    icon: FaReddit,
  },
  {
    id: 5,
    name: "twitch",
    icon: FaTwitch,
  },
];

export const navLinks: INavLinks[] = [
  {
    id: 1,
    name: "HomePage",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Contact",
    path: "/contact",
  },
  // {
  //   id: 4,
  //   name: "Login",
  //   path: "/login",
  // },
];
