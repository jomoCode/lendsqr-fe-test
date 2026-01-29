import { getCookie } from "@/app/api/utils/cookies/cookies";
import { useQuery } from "@tanstack/react-query";
import {
  deleteUserFromStorage,
  getUserFromStorage,
  saveUserToStorage,
  StoredUser,
} from "../localStorage";
import { apiAsync } from "@/app/api/auth/api";
import { clearUserSession } from "../sessionManagement";

const USERS_ENDPOINT = `${process.env.NEXT_PUBLIC_API_BASE_URL}/users`;

const fetchUser = async (): Promise<StoredUser | null> => {
  const token = getCookie("auth_token");

  if (!token) {
    clearUserSession();
    return null;
  }

  const users: StoredUser[] = await apiAsync(USERS_ENDPOINT);
  const user = users[0] ?? null;

  if (user) {
    saveUserToStorage(user);
  } else {
    deleteUserFromStorage();
  }

  return user;
};

export const useUser = () => {
  const query = useQuery<StoredUser | null>({
    queryKey: ["user"],
    queryFn: fetchUser,
    initialData: getUserFromStorage(),
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 30, // 30 minutes
    enabled: !!getCookie("auth_token"),
  });

  if (query.data) {
    saveUserToStorage(query.data);
  } else if (query.data === null) {
    deleteUserFromStorage();
  }

  return query;
};
