const actions1T12 = [
  "Move forward 1",
  "Basic Attack",
  "Ability 1",
  "Ability 2",
  "Move forward 2",
];
// const actions2T12 = [
//   "Move forward 2",
//   "Basic Attack",
//   "Ability 1",
//   "Ability 2",
// ];
const actions1T34 = [
  "Move forward 1",
  "Basic Attack",
  "Ability 1",
  "Ability 2",
  "Cast spell",
  "Move forward 2",
];

// const actions2T34 = [
//   "Move forward 2",
//   "Basic Attack",
//   "Ability 1",
//   "Ability 2",
//   "Cast spell",
// ];

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
    for (let i = arr.length - 1; i >= 0; i--) {
      generate(i + 1, [...combination, arr[i]]);
    }
  };
  generate(0, []);

  return combinations;
}

export const combinationsOfTwo1 = getCombinations([...new Set(actions1T12)], 2);
export const combinationsOfThree1 = getCombinations(
  [...new Set(actions1T34)],
  3
);
// export const combinationsOfThree2 = getCombinations(
//   [...new Set(actions2T34)],
//   3
// );
// export const combinationsOfTwo2 = getCombinations([...new Set(actions2T12)], 2);
