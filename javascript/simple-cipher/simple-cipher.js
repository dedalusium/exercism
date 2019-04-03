const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const overflowInteger = (integer, rangeSize) => (integer + rangeSize) % rangeSize;
const getCharCode = letter => alphabet.indexOf(letter);

export class Cipher {
  constructor(key) {
    if (key || key === '') {
      this.isValidKey(key);
      this.key = key;
    } else {
      this.generateKey(100);
    }
  }

  generateKey(keySize) {
    this.key = '';
    for (let index = 0; index < keySize; index += 1) {
      this.key += alphabet.charAt(Math.random() * alphabet.length);
    }
  }

  isValidKey(key) {
    if (!/^[a-z]+$/.test(key)) {
      throw new Error('Bad key');
    }
  }



  shift(msg, compute) {
    return Array.from(msg)
      .map(
        (letter, i) =>
          alphabet[
          overflowInteger(compute(getCharCode(letter), getCharCode(this.key[i % this.key.length])), alphabet.length)
          ]
      )
      .join('');
  }

  encode(decryptedMsg) {
    return this.shift(decryptedMsg, (a, b) => a + b);
  }

  decode(encryptedMsg) {
    return this.shift(encryptedMsg, (a, b) => a - b);
  }
}
