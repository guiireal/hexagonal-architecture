export default interface CryptoProvider {
  generate(text: string): string;
  compare(text: string, hash: string): boolean;
}
