import {
  saveProfileDetailsToStorage,
  saveUserToStorage,
  StoredUser,
} from "@/app/lib/localStorage";
import { setCookie } from "../utils/cookies/cookies";
import { apiAsync } from "./api";
import { profileSections } from "@/app/components/organisms/UserProfileDetails/userProfileDetails.data";

export const loginAsync = async (email: string, password: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new Error("API base URL not configured");
  }

  if (!email || !password)
    throw Error("Request must contain username and password");

  try {
    type User = Omit<StoredUser, "avatarUrl"> & {
      password: string;
      avater: string;
    };
    const users: User[] = await apiAsync(`${baseUrl}/users`);

    if (!users) {
      throw new Error("Invalid credentials");
    }
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      throw new Error("Invalid credentials");
    }

    setCookie("auth_token", "mock-auth-token", 30);
    const userNormalized = { ...user, avatarUrl: user.avater };
    saveUserToStorage(userNormalized);
    saveProfileDetailsToStorage(profileSections);
    return userNormalized;
  } catch (error) {
    throw new Error("Error signingin user");
  }
};
