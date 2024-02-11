export const combatDeck1Db = [
  "Move forward 1",
  "Move forward 2",
  "Basic Attack",
  "Ability 1",
  "Ability 2",
  "Cast spell",
];

const actions = [
  "Move forward 1",
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

const combinationsOfThree = getCombinations(actions, 3);
const combinationsOfTwo = getCombinations(actions, 2);

console.log("Combinations of 3 actions:", combinationsOfThree);
console.log("Combinations of 2 actions:", combinationsOfTwo);
