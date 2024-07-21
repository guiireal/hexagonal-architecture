import CryptoProvider from "@/core/shared/CryptoProvider";
import bcrypt from "bcrypt";

export default class BCryptCryptoProvider implements CryptoProvider {
  generate(text: string): string {
    const salt = bcrypt.genSaltSync(10);

    return bcrypt.hashSync(text, salt);
  }

  compare(text: string, hash: string): boolean {
    return bcrypt.compareSync(text, hash);
  }
}
