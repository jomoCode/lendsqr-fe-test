import { setCookie } from "./cookies";

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


  
  it("returns a cookie string when given valid inputs", () => {
    // test implementation
  });

  it("defaults the expiry date to 7 days when no duration is provided", () => {
    // test implementation
  });
});
