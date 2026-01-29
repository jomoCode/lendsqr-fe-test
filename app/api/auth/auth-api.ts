import { setCookie } from "../utils/cookies/cookies";
import { apiAsync } from "./api";

export const loginAsync = async (email: string, password: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new Error("API base URL not configured");
  }

  if (!email || !password)
    throw Error("Request must contain username and password");

  try {
    const users: { email: string; password: string }[] = await apiAsync(
      `${baseUrl}/users`,
    );

    if (!users) {
      throw new Error("Invalid credentials");
    }
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    setCookie("auth_token", "mock-auth-token", 30);
    
    return user;
  
  } catch (error) {
    throw new Error("Error signingin user");
  }
};
