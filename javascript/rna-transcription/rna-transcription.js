export class ADN {
  constructor(sequence) {
    this.sequence = sequence;
  }

  toRna() {
    this.checkDNASequence();
    return this.sequence.split('').map(adn => ADN.CONVERSION_REFERENCE[adn]).join('');
  }

  checkDNASequence() {
    this.sequence.split('').forEach((adn) => {
      if (!Object.keys(ADN.CONVERSION_REFERENCE).includes(adn)) {
        throw new Error(ADN.INVALID_DNA_MESSAGE);
      }
    });
  }
}

ADN.INVALID_DNA_MESSAGE = 'Invalid input DNA.';
ADN.CONVERSION_REFERENCE = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};
