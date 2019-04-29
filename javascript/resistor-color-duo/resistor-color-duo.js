export const value = colors =>
  Number(
    colors.reduce(
      (accumulator, color) =>
        accumulator +
        ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'].indexOf(color),
      ''
    )
  );
