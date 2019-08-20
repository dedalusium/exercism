const alphabet = 'abcdefghijklmnopqrstuvwxyz';
export const isPangram = (rawSentence) => {
  const lowerCleanedSentence = rawSentence.toLowerCase().replace(/[^a-zA-Z]/g, '');
  const withoutDuplicates = new Set(lowerCleanedSentence);
  return Array.from(withoutDuplicates).every((value) => Array.from(alphabet).includes(value));
};
