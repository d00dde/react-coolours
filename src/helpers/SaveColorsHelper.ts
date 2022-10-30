export class SaveColorsHelper {
   static saveColors(colors: string[]) {
     if(!colors.length) return;
     window.location.hash = colors.map((item) => item.slice(1)).join("-");
  }

  static getColors() {
    const colors = window.location.hash.slice(1).split("-").map((item) => `#${item}`);
    return this.isValidColors(colors) ? colors : [];
  }

  static clear() {
    window.location.hash = "";
  }

  private static isValidColors(colors: string[]) {
     return colors.every((color) => color.match(/#[A-F, 0-9]{6}/) && color.length === 7);
  }
}
