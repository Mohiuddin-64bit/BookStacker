export default Menus = [
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
]