export class ColorHelper {
  static getRandomColor() {
    const values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let result = "#";
    for(let i = 0; i < 6; i++) {
      result += values[Math.floor(Math.random()*values.length)];
    }
    return result;
  }
}
