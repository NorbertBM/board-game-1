const actions1 = [
  "Move forward 1",
  "Basic Attack",
  "Ability 1",
  "Ability 2",
  "Cast spell",
];
const actions2 = [
  "Move forward 2",
  "Basic Attack",
  "Ability 1",
  "Ability 2",
  "Cast spell",
];
function getCombinations(arr, size) {
  const combinations = [];
  const generate = (start, combination) => {
    if (combination.length === size) {
      combinations.push(combination);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      generate(i + 1, [...combination, arr[i]]);
    }
  };
  generate(0, []);
  return combinations;
}

export const combinationsOfThree1 = getCombinations(actions1, 3);
export const combinationsOfTwo1 = getCombinations(actions1, 2);
export const combinationsOfThree2 = getCombinations(actions2, 3);
export const combinationsOfTwo2 = getCombinations(actions2, 2);
