"use client";

import { Table } from "../../molecules/Table/Table";
import { columnDefs, rowData } from "./userTable.data";
import styles from './UserTable.module.scss'
const UserTable = () => {
  return (
    <div className={styles.userTableWrapper}>
    <div className={styles.userTableContainer}>
      <Table columnDefs={columnDefs} rowData={rowData} />
    </div> </div>
  );
};

export { UserTable };
