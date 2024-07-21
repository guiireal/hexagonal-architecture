import CryptoProvider from "@/core/shared/CryptoProvider";

export default class SpacePasswordCrypto implements CryptoProvider {
  handle(password: string): string {
    return password.split("").join(" ");
  }
}
