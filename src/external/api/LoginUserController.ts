import TokenProvider from "@/core/shared/TokenProvider";
import LoginUser from "@/core/user/usecases/LoginUser";
import { Express, Request, Response } from "express";
export default class LoginUserController {
  constructor(
    private readonly server: Express,
    private readonly useCase: LoginUser,
    private readonly tokenProvider: TokenProvider
  ) {
    this.server.post(
      "/api/login",
      async (request: Request, response: Response) => {
        const { email, password } = request.body;

        try {
          const user = await this.useCase.handle({
            email,
            password,
          });

          return response
            .status(200)
            .json({ user, token: this.tokenProvider.generate(user) });
        } catch (error: any) {
          console.log(error);
          return response.status(400).json({ message: error.message });
        }
      }
    );
  }
}
