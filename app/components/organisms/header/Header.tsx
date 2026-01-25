import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.scss";
import { SearchBar } from "../../molecules/SearchBar/SearchBar";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.leftContent}>
        <div className={styles.imageWrapper}>
          <Image
            src={"/assets/images/logo.png"}
            alt="company logo"
            width={144}
            height={30}
            className={styles.logoImage}
          />
        </div>

        <div className={styles.searchContainer}><SearchBar/></div>
      </div>


      <div className={styles.rightContent}>
        <Link href={"/"}>Docs</Link>
        <div>notifiction</div>
        <Image src="" alt={"profile image"} width={30} height={30} />
        <div>name</div>
      </div>
    </header>
  );
};

export { Header };
