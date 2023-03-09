export class Uuid {
  static uuid() {
      let uuid = '';
      const hexChars = '0123456789abcdef';
      for (let i = 0; i < 36; i++) {
        if (i === 8 || i === 13 || i === 18 || i === 23) {
          uuid += '-';
        } else if (i === 14) {
          uuid += '4';
        } else {
          uuid += hexChars[Math.floor(Math.random() * 16)];
        }
      }
      return uuid;
  }
}
