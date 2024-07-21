import CryptoProvider from "@/core/shared/CryptoProvider";
import bcrypt from "bcrypt";

export default class BCryptPasswordCrypto implements CryptoProvider {
  generate(password: string): string {
    const salt = bcrypt.genSaltSync(10);

    return bcrypt.hashSync(password, salt);
  }

  compare(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }
}
