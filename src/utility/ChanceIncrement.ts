export const chanceIncrement = (
  chance: number,
  diceNumber?: number,
  gotiCutToken?: boolean
) => {
  if (diceNumber === 6) {
    if (chance == -1) return 0;
    else return chance;
  } else if (gotiCutToken) {
    console.log("gotiCutToken", gotiCutToken);
    return chance;
  }
  if (chance == 3) return 0;
  return chance + 1;
};
