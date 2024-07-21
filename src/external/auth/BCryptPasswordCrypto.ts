import CryptoProvider from "@/core/shared/CryptoProvider";
import bcrypt from "bcrypt";

export default class BCryptPasswordCrypto implements CryptoProvider {
  handle(password: string): string {
    const salt = bcrypt.genSaltSync(10);

    return bcrypt.hashSync(password, salt);
  }
}
