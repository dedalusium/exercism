//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hour = 0, minute = 0) {
    this.hour = (hour + Math.trunc(minute / 60)) % 24;
    this.minute = minute % 60;
  }

  toString() {
    const hourAsString = this.hour.toString().padStart(2,'0');
    const minutesAsString = this.minute.toString().padStart(2,'0');
    return `${hourAsString}:${minutesAsString}`;
  }

  plus() {
    throw new Error('Remove this statement and implement this function');
  }

  minus() {
    throw new Error('Remove this statement and implement this function');
  }

  equals() {
    throw new Error('Remove this statement and implement this function');
  }
}
