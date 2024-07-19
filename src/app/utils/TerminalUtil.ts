import { terminal } from "terminal-kit";

export default class TerminalUtil {
  static title(text: string) {
    TerminalUtil.clear();
    terminal.magenta(`${text}\n`);
    terminal.magenta("-".repeat(text.length) + "\n");
  }

  static async menu(options: string[]): Promise<[number, string]> {
    const response = await terminal.singleColumnMenu(options).promise;

    return [response.selectedIndex, response.selectedText];
  }

  static clear() {
    terminal.clear();
  }

  static keyValue(key: string, value: any) {
    terminal.yellow(`${key}: `).green(value.toString()).white("\n");
  }

  static async confirm(text: string): Promise<boolean> {
    terminal.yellow(`\n${text}`);

    const response = await terminal.singleLineMenu(["Sim", "Não"]).promise;

    return response.selectedIndex === 0;
  }

  static async select(
    text: string,
    options: string[]
  ): Promise<[number, string]> {
    terminal.yellow(`\n${text}`);

    const response = await terminal.singleLineMenu(options).promise;

    return [response.selectedIndex, response.selectedText];
  }
}
