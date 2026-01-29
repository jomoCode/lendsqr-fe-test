import { deleteCookie } from "../api/utils/cookies/cookies";
import { deleteUserFromStorage } from "./localStorage";

export const clearUserSession = () => {
  deleteCookie("auth_token");
  deleteUserFromStorage();
};
