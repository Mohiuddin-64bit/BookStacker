import React from 'react';
import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, AllBooks, Notifications } from "@/pages/dashboard";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const Menus = [
  {
    icon: <HomeIcon {...icon} />,
    name: "dashboard",
    path: "/home",
    element: <Home />,
  },
  {
    icon: <UserCircleIcon {...icon} />,
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    icon: <TableCellsIcon {...icon} />,
    name: "Notifications",
    path: "/tables",
    element: <Tables />,
  },
  {
    icon: <TableCellsIcon {...icon} />,
    name: "All Books",
    path: "/allBooks",
    element: <AllBooks />,
  },
  {
    icon: <InformationCircleIcon {...icon} />,
    name: "notifications",
    path: "/notifications",
    element: <Notifications />,
  },
];

