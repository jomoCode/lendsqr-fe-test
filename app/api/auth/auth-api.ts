import { apiAsync } from "./api";

export const loginAsync = async (email: string, password: string) => {

  if (!email || !password ) throw Error("Request must contain username and password")
  const users: { email: string; password: string }[] = await apiAsync(
    "https://xxxx.mockapi.io/api/v1/users",
  );

  if (users) {
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );
    return user;
  } else {
    throw new Error("Invalid credentials");
  }
};
