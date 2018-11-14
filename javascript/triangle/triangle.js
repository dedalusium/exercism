export default class Triangle {
  constructor(sideLengthA, sideLengthB, sideLengthC) {
    this.sides = [];
    this.sides.push(sideLengthA);
    this.sides.push(sideLengthB);
    this.sides.push(sideLengthC);
  }

  kind() {
    let type = '';
    this.checkIllegalsSideLength();
    this.checkEmptyTriangle();
    this.checkTriangleInequality();
    if (this.isEquilateral()) {
      type = 'equilateral';
    }
    return type;
  }

  checkIllegalsSideLength() {
    this.sides.forEach((side) => {
      if (side < 0) {
        throw new Error('Negative sides are illegal');
      }
    }, this); // fixme: this param shouldn't be required
  }

  checkTriangleInequality() {
    this.sides.forEach((side, index) => {
      const otherSides = this.sides.slice();
      otherSides.splice(index, 1);
      if (side > otherSides.reduce((sum, nextSide) => sum + nextSide)) {
        throw new Error('Triangle inequality violated');
      }
    }, this); // fixme: this param shouldn't be required
  }

  checkEmptyTriangle() {
    if (this.sides.reduce((sum, nextSide) => sum + nextSide) === 0) {
      throw new Error('Empty triangle are not allowed');
    }
  }

  isEquilateral() {
    return this.sides.every(side => side === this.sides[0]);
  }

  isIsosceles() {

  }
}
