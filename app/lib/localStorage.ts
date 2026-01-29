import { InfoSection } from "../components/molecules/InfoSection/InfoSection";

export type StoredUser = {
  fullname: string;
  email: string;
  tier: number;
  balance: number;
  accountNumber: string;
  bankName: string;
  avatarUrl?: string;
};


export const saveUserToStorage = (user: StoredUser) => {
  try {
    localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.error("Failed to save user to localStorage:", error);
  }
};




export const getUserFromStorage = (): StoredUser | null => {
  try {
    const stored = localStorage.getItem("user");
    return stored ? (JSON.parse(stored) as StoredUser) : null;
  } catch (error) {
    console.error("Failed to parse user from localStorage:", error);
    return null;
  }
};

export const deleteUserFromStorage = () => {
  try {
    localStorage.removeItem("user");
  } catch (error) {
    console.error("Failed to delete user from localStorage:", error);
  }
};


// -----------------------------------------------------------------------------
export const saveProfileDetailsToStorage = (user: InfoSection[]) => {
  try {
    localStorage.setItem("profile", JSON.stringify(user));
  } catch (error) {
    console.error("Failed to save user to localStorage:", error);
  }
};

export const getProfileDetailsFromStorage = (): InfoSection[]| undefined => {
  try {
    const stored = localStorage.getItem("profile");
    return stored ? (JSON.parse(stored) as InfoSection[]) : undefined;
  } catch (error) {
    console.error("Failed to parse user from localStorage:", error);
    return undefined;
  }
};

export const deleteProfileDetailsFromStorage = () => {
  try {
    localStorage.removeItem("profile");
  } catch (error) {
    console.error("Failed to delete user from localStorage:", error);
  }
};
