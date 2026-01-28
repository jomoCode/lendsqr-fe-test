export const setCookie = (name: string, value: string, days = 7) => {
  // ---- validation ----
  if (!name || typeof name !== "string") {
    throw new Error("Cookie name must be a non-empty string");
  }

  if (typeof value !== "string") {
    throw new Error("Cookie value must be a string");
  }

  if (typeof days !== "number" || Number.isNaN(days) || days <= 0) {
    throw new Error("Days must be a positive number");
  }


};
