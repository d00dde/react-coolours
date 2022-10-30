export class ClipboardHelper {
   static async setValue(value: string) {
    await window.navigator.clipboard.writeText(value);
  }
}
