export const chanceIncrement = (
  chance: number,
  diceNumber: number,
  gotiCutToken: boolean,
  gotiReachedWinToken: boolean
) => {
  if (diceNumber === 6 || gotiCutToken || gotiReachedWinToken) {
    if (chance == -1) return 0;
    else return chance;
  }
  if (chance == 3) return 0;
  return chance + 1;
};
