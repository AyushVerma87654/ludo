export const chanceIncrement = (chance: number) => {
  if (chance == 3) return 0;
  return chance + 1;
};
