import Product from "@/core/product/models/Product";
import UseCase from "@/core/shared/UseCase";
import User from "@/core/user/models/User";

export type InputFindProductByIdDTO = {
  productID: string;
  user: User;
};

export default class FindProductById
  implements UseCase<InputFindProductByIdDTO, Product>
{
  async handle({ productID, user }: InputFindProductByIdDTO): Promise<Product> {
    return {
      id: productID,
      name: "Product",
      price: 100,
      searchedBy: user.email,
    };
  }
}
