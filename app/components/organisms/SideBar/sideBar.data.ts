
export type SidebarItem = (typeof sidebarSections)[number]["items"][number];


export const sidebarSections = [
  {
    title: "CUSTOMERS",
    items: [
      { name: "Users", icon: "MdPeople" },
      { name: "Guarantors", icon: "MdVerifiedUser" },
      { name: "Loans", icon: "MdRequestQuote" },
      { name: "Decision Models", icon: "MdModelTraining" },
      { name: "Savings", icon: "MdSavings" },
      { name: "Loan Requests", icon: "MdAssignment" },
      { name: "Whitelist", icon: "MdChecklist" },
      { name: "Karma", icon: "MdSecurity" },
    ],
  },
  {
    title: "BUSINESSES",
    items: [
      { name: "Organization", icon: "MdBusiness" },
      { name: "Loan Products", icon: "MdAccountBalance" },
      { name: "Savings Products", icon: "MdSavings" },
      { name: "Fees and Charges", icon: "MdPayments" },
      { name: "Transactions", icon: "MdSwapHoriz" },
      { name: "Services", icon: "MdMiscellaneousServices" },
      { name: "Service Account", icon: "MdAccountBox" },
      { name: "Settlements", icon: "MdFactCheck" },
      { name: "Reports", icon: "MdAssessment" },
    ],
  },
  {
    title: "SETTINGS",
    items: [
      { name: "Preferences", icon: "MdTune" },
      { name: "Fees and Pricing", icon: "MdPriceCheck" },
      { name: "Audit Logs", icon: "MdHistory" },
    ],
  },
] as const;