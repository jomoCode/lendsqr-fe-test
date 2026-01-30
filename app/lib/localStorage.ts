import { InfoSection } from "../components/molecules/InfoSection/InfoSection";

export type StoredUser = {
  username?: any;
  fullname: string;
  email: string;
  tier: number;
  balance: number;
  accountNumber: string;
  bankName: string;
  avatarUrl?: string;
  id?: string;
};

export const saveUserToStorage = (user: StoredUser) => {
  try {
    if (
      typeof window === "undefined" ||
      typeof window.localStorage === "undefined"
    )
      return;
    localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.error("Failed to save user to localStorage:", error);
  }
};

export const getUserFromStorage = (): StoredUser | null => {
  try {
    if (
      typeof window === "undefined" ||
      typeof window.localStorage === "undefined"
    )
      return null;
    const stored = localStorage.getItem("user");
    return stored ? (JSON.parse(stored) as StoredUser) : null;
  } catch (error) {
    console.error("Failed to parse user from localStorage:", error);
    return null;
  }
};

export const deleteUserFromStorage = () => {
  try {
    if (
      typeof window === "undefined" ||
      typeof window.localStorage === "undefined"
    )
      return;
    localStorage.removeItem("user");
  } catch (error) {
    console.error("Failed to delete user from localStorage:", error);
  }
};

// -----------------------------------------------------------------------------
export const saveProfileDetailsToStorage = (user: InfoSection[]) => {
  try {
    if (
      typeof window === "undefined" ||
      typeof window.localStorage === "undefined"
    )
      return;
    localStorage.setItem("profile", JSON.stringify(user));
  } catch (error) {
    console.error("Failed to save user to localStorage:", error);
  }
};

export const getProfileDetailsFromStorage = (): InfoSection[] | undefined => {
  try {
    if (
      typeof window === "undefined" ||
      typeof window.localStorage === "undefined"
    )
      return undefined;
    const stored = localStorage.getItem("profile");
    return stored ? (JSON.parse(stored) as InfoSection[]) : undefined;
  } catch (error) {
    console.error("Failed to parse user from localStorage:", error);
    return undefined;
  }
};

export const deleteProfileDetailsFromStorage = () => {
  try {
    if (
      typeof window === "undefined" ||
      typeof window.localStorage === "undefined"
    )
      return;
    localStorage.removeItem("profile");
  } catch (error) {
    console.error("Failed to delete user from localStorage:", error);
  }
};
