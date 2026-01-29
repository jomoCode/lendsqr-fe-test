import { deleteCookie, getCookie, setCookie } from "./cookies";

describe("setCookie", () => {
  it("throws an error when the cookie name is invalid", () => {
    expect(() => setCookie(1 as unknown as string, "auth", 1)).toThrow(
      "Cookie name must be a non-empty string",
    );
  });

  it("throws an error when the cookie value is not a string", () => {
    expect(() => setCookie("user", 80111 as unknown as string, 1)).toThrow(
      "Cookie value must be a string",
    );
  });

  it("throws an error when days is not a positive number", () => {
    expect(() => setCookie("user", "tester", -1)).toThrow(
      "Days must be a positive number",
    );
  });

  it("returns a cookie string when inputs are valid", () => {
    const result = setCookie("auth", "1234", 5);

    expect(result).toContain("auth=1234");
    expect(result).toContain("expires=");
    expect(result).toContain("path=/");
  });

  it("defaults expiry to 7 days when days is not provided", () => {
    const result = setCookie("auth", "1234");

    expect(result).toContain("expires=");
  });
});

describe("getCookie", () => {
  it("should throw an error if given an invalid input", () => {
    expect(() => getCookie(null as unknown as string)).toThrow();
    expect(() => getCookie("   ")).toThrow();
  });

  it("should return null if no cookie is found", () => {
    const result = getCookie("nonExistent");
    expect(result).toBeNull();
  });

  it("should return the correct value if the cookie exists", () => {
    document.cookie = "session_id=12345";

    const result = getCookie("session_id");

    expect(result).toBe("12345");

    document.cookie = "session_id=; Max-Age=0";
  });
});


describe("deleteCookie", () => {
  beforeEach(() => {
    document.cookie = "";
  });

  it("removes the specified cookie", () => {
    // arrange - set a cookie manually
    document.cookie = "auth_token=test123; path=/";

    // assert - cookie exists
    expect(document.cookie).toContain("auth_token=test123");

    // ac- delete the cookie
    deleteCookie("auth_token");

    // assert cookie is gone
    expect(document.cookie).not.toContain("auth_token");
  });
});
