"use client";
import { LoginLeft } from "../../components/organisms/LoginLeft/LoginLeft";
import { LoginRight } from "../../components/organisms/LoginRight/LoginRight";
import { LoginTemplate } from "../../components/templates/LoginTemplate/LoginTemplate";
import styles from "./components/templates/page.module.scss";

function Page() {
  return (
    <div className={styles.container}>
      <LoginTemplate left={<LoginLeft />} right={<LoginRight />} />
    </div>
  );
}

export default Page;
