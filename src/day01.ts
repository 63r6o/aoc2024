import readFrom from "./read-input";

const input = readFrom(process.argv);

const { left, right } = input.split("\n").reduce(
  (list: { left: number[]; right: number[] }, line) => {
    const [leftLocation, rightLocation] = line.split(/[ ]+/);

    return {
      left: list.left.concat(parseInt(leftLocation)),
      right: list.right.concat(parseInt(rightLocation)),
    };
  },
  { left: [], right: [] },
);

left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

const partOne = left.reduce(
  (distance, curr, index) => distance + Math.abs(curr - right[index]),
  0,
);

const apperances = right.reduce(
  (apps, curr) => apps.set(curr, (apps.get(curr) || 0) + 1),
  new Map(),
);

const partTwo = left.reduce(
  (similarity, curr) => (similarity += curr * (apperances.get(curr) || 0)),
  0,
);

console.log("part one:", partOne);

console.log("part two:", partTwo);
