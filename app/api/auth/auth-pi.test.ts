import { apiAsync } from "./api"
import { loginAsync } from "./auth-api";


jest.mock('./api');

const mockedUsers = [{ email: "email@EmailInput.com", password: "passw0TRd" }];
(apiAsync as jest.Mock).mockResolvedValue(mockedUsers);

describe('loginAsync', () => {

    beforeEach(() => {
    process.env.NEXT_PUBLIC_API_BASE_URL =
      "https://xxxx.mockapi.io/api/v1";
  });

  it('calls apiAsync with the correct endpoint', async () => {
    const endpoint = "https://xxxx.mockapi.io/api/v1/users";

    await loginAsync("email@EmailInput.com", "passw0TRd");

    expect(apiAsync).toHaveBeenCalledWith(endpoint);
  });

  it('returns user when credentials match', async () => {
    const user = await loginAsync("email@EmailInput.com", "passw0TRd");
    expect(user).toEqual(mockedUsers[0]);
  });

  it('returns undefined when credentials do not match', async () => {
    const user = await loginAsync("wrong@example.com", "wrongpass");
    expect(user).toBeUndefined();
  });

  it('throws error if email or password is missing', async () => {
    await expect(loginAsync("", "password")).rejects.toThrow(
      "Request must contain username and password"
    );

    await expect(loginAsync("email@EmailInput.com", "")).rejects.toThrow(
      "Request must contain username and password"
    );

    await expect(loginAsync("", "")).rejects.toThrow(
      "Request must contain username and password"
    );
  });

});
