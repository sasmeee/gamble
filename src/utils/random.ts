export const getWeightedOutcome = (weights: number[]): number => {
  // calculate the total sum of weights
  const totalSum = weights.reduce(
    (sum, currentWeight) => sum + currentWeight,
    0
  );
  // generate a random point based on the total sum
  const randomPoint = Math.random() * totalSum;

  let runningTotal = 0;
  // find the index corresponding to the random point
  for (let index = 0; index < weights.length; index++) {
    runningTotal += weights[index];
    if (randomPoint < runningTotal) {
      return index; // return the selected outcome index
    }
  }

  return 0; // default to index 0 if no outcome is found
};
