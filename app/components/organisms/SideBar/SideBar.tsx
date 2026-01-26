"use client";

import { useState } from "react";
import styles from "./SideBar.module.scss";
import { SidebarPanel } from "../../molecules/SideBarPanel/SidebarPanel";
import { sidebarSections } from "./sideBar.data";

const SideBar = () => {
  const [activeItem, setActiveItem] = useState<string>("Users");

  return (
    <aside className={styles.mainContianer}>
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
    </aside>
  );
};

export { SideBar };
