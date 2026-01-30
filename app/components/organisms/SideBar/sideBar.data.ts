export const sidebarSections = [
  {
    title: "CUSTOMERS",
    items: [
      { name: "Users", icon: "user-friends.png" },
      { name: "Guarantors", icon: "users.png" },
      { name: "Loans", icon: "sack.png" },
      { name: "Decision Models", icon: "handshake.png" },
      { name: "Savings", icon: "piggy-bank.png" },
      { name: "Loan Requests", icon: "loan.png" },
      { name: "Whitelist", icon: "user-check.png" },
      { name: "Karma", icon: "user-times.png" },
    ],
  },
  {
    title: "BUSINESSES",
    items: [
      { name: "Organization", icon: "briefcase.png" },
      { name: "Loan Products", icon: "loan.png" },
      { name: "Savings Products", icon: "np_bank.png" },
      { name: "Fees and Charges", icon: "coins-solid.png" },
      { name: "Transactions", icon: "icon.png" },
      { name: "Services", icon: "galaxy.png" },
      { name: "Service Account", icon: "user-cog.png" },
      { name: "Settlements", icon: "scroll.png" },
      { name: "Reports", icon: "chart-bar.png" },
    ],
  },
  {
    title: "SETTINGS",
    items: [
      { name: "Preferences", icon: "sliders.png" },
      { name: "Fees and Pricing", icon: "badge-percent.png" },
      { name: "Audit Logs", icon: "clipboard-list.png" },
      { name: "System Messages", icon: "tire.png" },
    ],
  },
] as const;
