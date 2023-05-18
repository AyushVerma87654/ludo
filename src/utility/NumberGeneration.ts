export const numGen: () => number = () => {
  const a = Math.floor(Math.random() * 7);
  if (a == 0) {
    return numGen();
  }
  return a;
};
