"use client";

import { Table, UsersTableType } from "../../molecules/Table/Table";
import styles from './UserTable.module.scss'


const UserTable = ({columnDefs,rowData, onCellClick}:UsersTableType) => {
  return (
    <div className={styles.userTableWrapper}>
    <div className={styles.userTableContainer}>
      <Table columnDefs={columnDefs} rowData={rowData} onCellClick={onCellClick} />
    </div> </div>
  );
};

export { UserTable };
