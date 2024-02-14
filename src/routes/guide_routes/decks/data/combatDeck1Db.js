const actions1T12 = [
  "Move forward",
  "Basic Attack",
  "Ability 1",
  "Ability 2",
  // "Move forward 2",
];

const actions1T34 = [
  "Move forward",
  "Basic Attack",
  "Ability 1",
  "Ability 2",
  "Cast spell",
  // "Move forward 2",
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
    // Reverse
    // for (let i = arr.length - 1; i >= 0; i--) {
    //   generate(i + 1, [...combination, arr[i]]);
    // }
  };
  generate(0, []);

  return combinations;
}

export const combinationsOfTwo1 = getCombinations([...new Set(actions1T12)], 2);
// Reverse
export const combinationsOfTwo1Rev = getCombinations(
  [...new Set(actions1T12.reverse())],
  2
);

export const combinationsOfThree1 = getCombinations(
  [...new Set(actions1T34)],
  3
);
export const combinationsOfThree1Rev = getCombinations(
  [...new Set(actions1T34.reverse())],
  3
);
