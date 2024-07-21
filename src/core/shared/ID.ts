import { v4 as uuid } from "uuid";

export default class ID {
  static generate(): string {
    return uuid();
  }
}
