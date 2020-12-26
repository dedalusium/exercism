export const hey = (message) => {
  const trim = message
    .trim();
  const cleanMessage = trim
    .replace(/[^a-zA-Z?!]/g, '');

  if (!trim) {
    return 'Fine. Be that way!';
  }
  // need to fix acronym and numbers
  const isYellingQuestion = /^[A-Z\s]+\?$/
  const isYelling = /^[A-Z\s]+!*$/
  const isQuestion = /\?$/
  if (isYellingQuestion.test(cleanMessage)) {
    return 'Calm down, I know what I\'m doing!';
  } else if (isQuestion.test(cleanMessage)) {
    return 'Sure.';
  } else if (isYelling.test(cleanMessage)) {
    return 'Whoa, chill out!';
  }
  return 'Whatever.';
};
