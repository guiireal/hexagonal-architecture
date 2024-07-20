export default class ID {
  private static id = 0;

  static generate(): number {
    return ++ID.id;
  }
}
