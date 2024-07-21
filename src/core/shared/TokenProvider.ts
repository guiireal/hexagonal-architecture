export default interface TokenProvider {
  generate(data: string | object): string;
}
