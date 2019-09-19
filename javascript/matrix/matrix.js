export class Matrix {
  constructor(rawMatrix) {
    this.rawMatrix = rawMatrix;
  }

  get rows() {
    const splited = this.rawMatrix.split("\n");
    this._rows = splited
      .map(rowAsString => rowAsString
        .split(' ')
        .map(c => Number.parseInt(c))
      );
    return this._rows;
  }

  get columns() {
    this._columns = []
    for (let i = 0; i < this.rows[0].length; i++) {
      this._columns.push([]);
      this.rows.forEach(r => {
        this._columns[i].push(r[i]);
      });      
    }
    return this._columns;
  }
}
