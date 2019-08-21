const alphabet = 'abcdefghijklmnopqrstuvwxyz';
export const isPangram = (rawSentence) => {
  const lowerCleanedSentence = rawSentence.toLowerCase().replace(/[^a-zA-Z]/g, '');
  const withoutDuplicates = new Set(lowerCleanedSentence);
  return withoutDuplicates.size === alphabet.length;
};
