import React, { ReactNode } from "react";
import {
  MdDashboard,
  MdHelpCenter,
  MdOutlineSettings,
} from "react-icons/md";
import { RiCodeView } from "react-icons/ri";
import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
interface MenuItem {
  title: string;
  list: SubMenuItem[];
}

interface SubMenuItem {
  title: string;
  path: string;
  icon: ReactNode;
}
const Sidebar = () => {
  const menuItems: MenuItem[] = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Information",
          path: "/dashboard/information",
          icon: <RiCodeView />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          src={"/user.png"}
          alt="user image"
          className={styles.userImage}
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.userTitle}>Adminstrator</span>
        </div>
      </div>
      <ul className={styles.links}>
        {menuItems?.map((item, index) => (
          <li key={index}>
            <span className={styles.cat}>{item.title}</span>
            <div className={styles.links}>
            {item?.list?.map((list) => (
              <MenuLink key={list.title} menu={list} />
              ))}
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
