import { terminal } from "terminal-kit";

export default class TerminalUtil {
  static title(text: string) {
    TerminalUtil.clear();
    terminal.magenta(`${text}\n`);
    terminal.magenta("-".repeat(text.length) + "\n");
  }

  static async requiredInput(
    label: string,
    defaultValue: string = ""
  ): Promise<string> {
    terminal.yellow(`\n${label}: `);

    const response = await terminal.inputField({ default: defaultValue })
      .promise;

    if (!response) {
      return await TerminalUtil.requiredInput(label);
    }

    return response;
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

  static async waitEnter(): Promise<void> {
    terminal.white("\nPressione ENTER para continuar");
    await terminal.inputField({ echo: false }).promise;
  }

  static success(text: string, newLine: boolean = true): void {
    terminal.green(`${newLine ? "\n" : ""}${text}`);
  }

  static error(text: string, newLine: boolean = true): void {
    terminal.red(`${newLine ? "\n" : ""}${text}`);
  }
}
