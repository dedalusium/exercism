export const hey = (message) => {
  const cleanMessage = message.trim();
  if (!cleanMessage) {
    return 'Fine. Be that way!';
  }
  // need to fix acronym and numbers
  const isYelling = /(?!.*[a-z].*)[A-Z]{4,}/
  const isQuestion = /\?$/
  if (isQuestion.test(cleanMessage) && isYelling.test(cleanMessage)) {
    return 'Calm down, I know what I\'m doing!';
  } else if (isQuestion.test(cleanMessage)) {
    return 'Sure.';
  } else if (isYelling.test(cleanMessage)) {
    return 'Whoa, chill out!';
  }
  return 'Whatever.';
};
