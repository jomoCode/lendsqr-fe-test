import Image from "next/image";

const getRandom4Digits = () =>
  Math.floor(1000 + Math.random() * 9000);
const size = 25;


export const statusCards = [
  {
    title: "USERS",
    icon: <Image src={'/assets/svg/users.svg'} alt="Users" width={size} height={size} />,
    color: "#DF18FF",
  },
  {
    title: "ACTIVE USERS",
    icon: <Image src={'/assets/svg/active-users.svg'} alt="Active Users" width={size} height={size} />,
    color: "#5718FF",
  },
  {
    title: "USERS WITH LOAN",
    icon: <Image src={'/assets/svg/loan.svg'} alt="Users with Loan" width={size} height={size} />,
    color: "#F55F44",
  },
  {
    title: "USERS WITH SAVINGS",
    icon: <Image src={'/assets/svg/savings.svg'} alt="Users with Savings" width={size} height={size} />,
    color: "#FF3366",
  },
].map((card) => ({
  ...card,
  mainText: getRandom4Digits().toString(),
}));
