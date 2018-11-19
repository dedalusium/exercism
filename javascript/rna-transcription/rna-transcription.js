
const INVALID_DNA_MESSAGE = 'Invalid input DNA.';
const CONVERSION_REFERENCE = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

const checkDNASequence = (sequence) => {
  sequence.split('').forEach((adn) => {
    if (!Object.keys(CONVERSION_REFERENCE).includes(adn)) {
      throw new Error(INVALID_DNA_MESSAGE);
    }
  });
};

export function toRna(sequence) {
  checkDNASequence(sequence);
  return sequence.split('').map(adn => CONVERSION_REFERENCE[adn]).join('');
}
