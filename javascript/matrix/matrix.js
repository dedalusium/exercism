export class Matrix {
  constructor(rawMatrix) {
    const splited = rawMatrix.split("\n");
    this.row = splited.map(rowAsString => rowAsString.split(' ').map(c => Number.parseInt(c)));
  }

  get rows() {
    return this.row;
  }

  get columns() {
    throw new Error("Remove this statement and implement this function");
  }
}
