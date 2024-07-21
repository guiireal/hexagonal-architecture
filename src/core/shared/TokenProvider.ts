export default interface TokenProvider {
  generate(payload: string | object): string;
  get(token: string): string | object;
}
