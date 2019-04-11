export const gigasecond = date => {
  const aGigaSecondLater = new Date();
  aGigaSecondLater.setTime(date.getTime() + Math.pow(10, 9) * 1000);
  return aGigaSecondLater;
};
