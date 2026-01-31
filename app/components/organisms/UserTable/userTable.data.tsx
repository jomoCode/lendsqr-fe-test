import { ColDef } from "ag-grid-community";
import styles from "./UserTable.module.scss";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { BsEye, BsPersonCheck, BsPersonX } from "react-icons/bs";

const StatusPill = ({ value }: { value: string }) => {
  return (
    <span className={`${styles.status} ${styles[value.toLowerCase()]}`}>
      {value}
    </span>
  );
};

type rowDataType = {
  createdAt: string;
  dateJoined: string;
  email: string;
  id: string;
  organization: string;
  phone: string;
  status: string;
  username: string;
};



const Dropdown = ({ position, onClose }: { position: { top: number; left: number }, onClose: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return createPortal(
    <div
      ref={ref}
      className={styles.dropDown}
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
      }}
    >
      <Link href="/dashboard/user" className={styles.dropDownChild}><BsEye/> View Details</Link>
      <button  className={styles.dropDownChild}><BsPersonX/> Blacklist User</button>
      <button className={styles.dropDownChild} ><BsPersonCheck/> Activate User</button>
    </div>,
    document.body
  );
};


const ActionMenu = ({ data }: { data: rowDataType }) => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);


  return (
    <>
      <button
        className={styles.actions}
        onClick={(e) => {
          const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();

          setPosition({
            top: rect.bottom + window.scrollY,
            left: rect.left + window.scrollX - 100,
          });

          setOpen((prev) => !prev);
          sessionStorage.setItem("selectedUser", JSON.stringify(data));
        }}
      >
        ⋮
      </button>

      {open && position && <Dropdown position={position}   onClose={() => setOpen(false)} />}
    </>
  );
};


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
