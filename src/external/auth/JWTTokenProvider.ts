import TokenProvider from "@/core/shared/TokenProvider";
import jwt from "jsonwebtoken";

export default class JWTTokenProvider implements TokenProvider {
  constructor(private readonly secret: string) {}

  generate(data: string | object): string {
    return jwt.sign(data, this.secret, {
      expiresIn: "10d",
    });
  }
}
