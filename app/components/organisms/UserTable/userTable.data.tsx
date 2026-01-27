import { ColDef } from "ag-grid-community";
import styles from "./UserTable.module.scss";

const StatusPill = ({ value }: { value: string }) => {
  return (
    <span className={`${styles.status} ${styles[value.toLowerCase()]}`}>
      {value}
    </span>
  );
}

const ActionMenu = () => {
  return (
    <div className={styles.actions}>
      <span>⋮</span>
    </div>
  );
}


export const columnDefs: ColDef[] = [
  {
    headerName: "ORGANIZATION",
    field: "organization",
    filter: true,
  },
  {
    headerName: "USERNAME",
    field: "username",
    filter: true,
  },
  {
    headerName: "EMAIL",
    field: "email",
    filter: true,
  },
  {
    headerName: "PHONE NUMBER",
    field: "phone",
  },
  {
    headerName: "DATE JOINED",
    field: "dateJoined",
  },
  {
    headerName: "STATUS",
    field: "status",
    cellRenderer: StatusPill,
  },
  {
    headerName: "",
    width: 60,
    cellRenderer: ActionMenu,
  },
];


export const rowData = [
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phone: "08078903721",
    dateJoined: "May 15, 2020 10:00 AM",
    status: "Inactive",
  },
  {
    organization: "Irorun",
    username: "Debby Ogana",
    email: "debby2@irorun.com",
    phone: "08160780928",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Pending",
  },
];
