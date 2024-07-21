import CreateUser from "@/core/user/usecases/CreateUser";
import { Express, Request, Response } from "express";

export default class CreateUserController {
  constructor(
    private readonly server: Express,
    private readonly useCase: CreateUser
  ) {
    this.server.post(
      "/api/users",
      async (request: Request, response: Response) => {
        const { name, email, password } = request.body;

        try {
          await this.useCase.handle({
            name,
            email,
            password,
          });

          return response.status(201).send();
        } catch (error: any) {
          console.log(error);
          return response.status(400).json({ message: error.message });
        }
      }
    );
  }
}
