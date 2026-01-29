import { getCookie } from "@/app/api/utils/cookies/cookies";
import { useQuery } from "@tanstack/react-query";
import { apiAsync } from "@/app/api/auth/api";
import { clearUserSession } from "../sessionManagement";

const CLIENT_ENDPOINT = `${process.env.NEXT_PUBLIC_API_BASE_URL}/clients`;

export type Client = {
  id: string;
  email: string;
  organization: string;
  username: string;
  phone: string;
  dateJoined: string;
  status: string;
};

const fetchClient = async (): Promise<Client[] | undefined> => {
  const token = getCookie("auth_token");

  if (!token) {
    clearUserSession();
    return undefined;
  }

  const clients: Client[] = await apiAsync(CLIENT_ENDPOINT);

  return clients;
};

export const useClient = () => {
  return useQuery<Client[] | undefined>({
    queryKey: ["client"],
    queryFn: fetchClient,
    staleTime: 1000 * 60 * 2, // 2 minutes
    refetchOnWindowFocus: true,
    enabled: !!getCookie("auth_token"),
  });
};
