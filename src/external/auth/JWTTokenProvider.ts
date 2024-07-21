import TokenProvider from "@/core/shared/TokenProvider";
import jwt from "jsonwebtoken";

export default class JWTTokenProvider implements TokenProvider {
  constructor(private readonly secret: string) {}

  generate(payload: string | object): string {
    return jwt.sign(payload, this.secret, {
      expiresIn: "10d",
    });
  }

  get(token: string): string | object {
    return jwt.verify(token, this.secret);
  }
}
