import FindProductById from "@/core/product/usecases/FindProductById";
import { Express, Request, Response } from "express";

export default class FindProductByIdController {
  constructor(
    private readonly server: Express,
    private readonly useCase: FindProductById,
    ...middlewares: any[]
  ) {
    this.server.post(
      "/api/products/:id",
      ...middlewares,
      async (request: Request, response: Response) => {
        const { id } = request.params;

        try {
          const product = await this.useCase.handle({
            productID: id,
            user: request.user!,
          });

          return response.status(200).json(product);
        } catch (error: any) {
          console.log(error);
          return response.status(400).json({ message: error.message });
        }
      }
    );
  }
}
