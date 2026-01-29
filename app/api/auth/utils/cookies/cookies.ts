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

  // ---- create cookie ----
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);

  const cookieCreated = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;

  document.cookie = cookieCreated;

  return cookieCreated;
};

export const getCookie = (name: string): string | null => {
  // validate cookie name
  if (typeof name !== "string" || name.trim() === "") {
    throw new Error("Invalid input: cookie name must be a non-empty string.");
  }

  // retrieve cookies
  const nameEQ = name + "=";
  const cookieValuePairs = document.cookie.split(";");
  // query cookies against name
  for (const cookieValuePair of cookieValuePairs) {
    const cleanCookieValuePair = cookieValuePair.trim();

    
    if (cleanCookieValuePair.indexOf(nameEQ) === 0) {
      return cleanCookieValuePair.substring(nameEQ.length);
    }
  }
  return null;
};
