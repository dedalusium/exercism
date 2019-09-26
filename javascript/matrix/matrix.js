export class Matrix {
  constructor(rawMatrix) {
    this.rawMatrix = rawMatrix;
  }

  get rows() {
    return this.rawMatrix
      .split("\n")
      .map(rowAsString => rowAsString
        .split(' ')
        .map(c => Number.parseInt(c))
      );
  }

  get columns() {
    const columns = []
    for (let i = 0; i < this.rows[0].length; i++) {
      columns.push([]);
      this.rows.forEach(r => {
        columns[i].push(r[i]);
      });      
    }
    return columns;
  }
}
