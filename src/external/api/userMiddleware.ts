import TokenProvider from "@/core/shared/TokenProvider";
import User from "@/core/user/models/User";
import UserRepository from "@/core/user/repositories/UserRepository";
import { NextFunction, Request, Response } from "express";

export default function userMiddleware(
  userRepository: UserRepository,
  tokenProvider: TokenProvider
) {
  return async (request: Request, response: Response, next: NextFunction) => {
    const accessDenied = () =>
      response.status(403).json({ message: "Access denied" });

    const token = request.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return accessDenied();
    }

    const userToken = tokenProvider.get(token) as User;
    const user = await userRepository.findByEmail(userToken.email);

    if (!user) {
      return accessDenied();
    }

    request.user = user;

    return next();
  };
}
