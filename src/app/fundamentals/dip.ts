import race from "@/core/fundamentals/race";
import TerminalUtil from "../utils/TerminalUtil";

export default async function dip() {
  TerminalUtil.title("DIP");
  race();
  await TerminalUtil.waitEnter();
}
