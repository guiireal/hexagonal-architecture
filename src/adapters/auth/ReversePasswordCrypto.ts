import CryptoProvider from "@/core/shared/CryptoProvider";

export default class ReversePasswordCrypto implements CryptoProvider {
  handle(password: string): string {
    return password.split("").reverse().join("");
  }
}
