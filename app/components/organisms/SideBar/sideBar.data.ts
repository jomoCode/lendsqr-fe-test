export type SidebarItem =
  (typeof sidebarSections)[number]["items"][number];

export const sidebarSections = [
  {
    title: "CUSTOMERS",
    items: [
      { name: "Users", icon: "BsPeople" },
      { name: "Guarantors", icon: "BsPeopleFill" },
      { name: "Loans", icon: "BsCashStack" },
      { name: "Decision Models", icon: "BsDiagram3" },
      { name: "Savings", icon: "BsPiggyBank" },
      { name: "Loan Requests", icon: "BsCashCoin" },
      { name: "Whitelist", icon: "BsCheck2Square" },
      { name: "Karma", icon: "BsShieldLock" },
    ],
  },
  {
    title: "BUSINESSES",
    items: [
      { name: "Organization", icon: "BsBuilding" },
      { name: "Loan Products", icon: "BsBank" },
      { name: "Savings Products", icon: "BsPiggyBankFill" },
      { name: "Fees and Charges", icon: "BsCreditCard" },
      { name: "Transactions", icon: "BsArrowLeftRight" },
      { name: "Services", icon: "BsTools" },
      { name: "Service Account", icon: "BsPersonBadge" },
      { name: "Settlements", icon: "BsClipboardCheck" },
      { name: "Reports", icon: "BsBarChart" },
    ],
  },
  {
    title: "SETTINGS",
    items: [
      { name: "Preferences", icon: "BsSliders" },
      { name: "Fees and Pricing", icon: "BsTag" },
      { name: "Audit Logs", icon: "BsClockHistory" },
    ],
  },
] as const;
