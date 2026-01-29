"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";
import { SearchBar } from "../../molecules/SearchBar/SearchBar";
import { FiBell } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { signOut } from "@/app/api/auth/auth-api";

const Header = ({ profileName }: { profileName: string }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.leftContent}>
        <Link href={"/"}>
          <div className={styles.imageWrapper}>
            <Image
              src={"/assets/images/logo.png"}
              alt="company logo"
              width={144}
              height={40}
              className={styles.logoImage}
            />
          </div>
        </Link>
        <div className={styles.searchContainer}>
          <SearchBar />
        </div>
      </div>

      <div className={styles.rightContent}>
        <Link href={"/"} className={styles.link}>
          Docs
        </Link>
        <FiBell size={24} fill={"#ffffff"} />
        <Link href={"/dashboard/user"}>
          <div className={styles.profileImageWrapper}>
            <Image
              src="/assets/images/profile.png"
              alt={"profile image"}
              width={40}
              height={40}
              className={styles.profileImage}
            />
          </div>
        </Link>

        {/* DROPDOWN TRIGGER + MENU */}
        <div className={styles.profileDropdown} ref={dropdownRef}>
          <button
            type="button"
            className={styles.dropdownTrigger}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span>{profileName}</span>
            <MdArrowDropDown
              size={20}
              className={open ? styles.chevronOpen : ""}
            />
          </button>

          {open && (
            <div className={styles.dropdownMenu}>
              <Link href="/dashboard/user">Profile</Link>
              <Link href="/dashboard">Settings</Link>
              <button className={styles.logout} onClick={signOut}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export { Header };
