# Day One ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2024/day/1)
- [Puzzle Input](https://adventofcode.com/2024/day/1/input)

```javascript
const lines = await importFromTextFile();

const part1 = [];
const part2 = [];
for (const line of lines) {
	const [one, two] = line.split('   ').map(Number);
	part1.push(one);
	part2.push(two);
}

part1.sort((a, b) => a - b);
part2.sort((a, b) => a - b);

let sum = 0;
for (let i = 0; i < part1.length; i++) {
	sum += Math.abs(part1[i] - part2[i]);
}

console.log(sum);
```

## Task Two

- [Task Description](https://adventofcode.com/2024/day/1#part2)
- [Puzzle Input](https://adventofcode.com/2024/day/1/input)

```javascript
const lines = await importFromTextFile();

const part1 = [];
const part2 = [];
for (const line of lines) {
	const [one, two] = line.split('   ').map(Number);
	part1.push(one);
	part2.push(two);
}

part1.sort((a, b) => a - b);
part2.sort((a, b) => a - b);

const frequencyMap = new Map();
for (const value of part2) {
	frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
}

let sum = 0;
for (const value of part1) {
	const occurrences = frequencyMap.get(value) || 0;
	sum += value * occurrences;
}

console.log(sum);
```

## Times

Part 1: 00:07:36 (Rank 3469)
Part 2: 00:13:24 (Rank 3791)
