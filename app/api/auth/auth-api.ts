
import { apiAsync } from "./api";

export const loginAsync = async (email: string, password: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!email || !password)
    throw Error("Request must contain username and password");
  try {
    const users: { email: string; password: string }[] = await apiAsync(
      `${baseUrl}/users`,
    );

    if (users) {
      const user = users.find(
        (u) => u.email === email && u.password === password,
      );
      return user;
    } else {
      return undefined;
    }
  } catch (error) {
    throw new Error("Invalid credentials");
  }
};
