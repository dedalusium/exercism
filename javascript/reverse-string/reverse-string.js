export default function reverseString(string) {
  let reversedString = '';
  for (let charIndex = string.length - 1; charIndex >= 0; charIndex--) {
    reversedString+=string[charIndex];
  }
  return reversedString;
}
