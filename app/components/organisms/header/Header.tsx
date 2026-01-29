"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";
import { SearchBar } from "../../molecules/SearchBar/SearchBar";
import { FiBell } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";

const Header = ({profileName}:{profileName:string}) => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.leftContent}>
        <Link href={"/user"}>
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
        <div className={styles.profileImageWrapper}>
          <Image
            src="/assets/images/profile.png"
            alt={"profile image"}
            width={40}
            height={40}
            className={styles.profileImage}
          />
        </div>
        <div className={styles.dropDown}>
          <p>{profileName}</p>
          <MdArrowDropDown size={19} />
        </div>
      </div>
    </header>
  );
};

export { Header };
