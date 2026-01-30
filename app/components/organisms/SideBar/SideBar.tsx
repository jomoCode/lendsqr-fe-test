"use client";

import { useState } from "react";
import styles from "./SideBar.module.scss";
import { SidebarPanel } from "../../molecules/SideBarPanel/SidebarPanel";
import { sidebarSections } from "./sideBar.data";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";

const SideBar = () => {
  const [activeItem, setActiveItem] = useState("Users");

  return (
    <aside className={styles.mainContianer}>
      {/* Switch Organization */}
      <div className={styles.organization}>
        <Image
          src="/assets/images/sidebar-icons/briefcase.png"
          alt="Switch Organization"
          width={16}
          height={16}
        />
        <span>Switch Organization</span>
   <BiChevronDown size={25}/>
      </div>

      {/* Scrollable content */}
      <div className={styles.scrollArea}>
        {sidebarSections.map((section) => (
          <div key={section.title}>
            <h2 className={styles.sectionHeaders}>{section.title}</h2>

            {section.items.map((item) => (
              <SidebarPanel
                key={item.name}
                name={item.name}
                icon={item.icon}
                active={activeItem === item.name}
                onClick={() => setActiveItem(item.name)}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <SidebarPanel
          name="Logout"
          icon="sign-out.png"
          onClick={() => console.log("logout")}
        />

        <span className={styles.version}>v1.2.0</span>
      </div>
    </aside>
  );
};

export { SideBar };
