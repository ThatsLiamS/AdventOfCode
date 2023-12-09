# Day Nine ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2023/day/9)
- [Puzzle Input](https://adventofcode.com/2023/day/9/input)

```javascript
const input = await importFromTextFile();
const lines = input.map(values => values.map(Number));

const extrapolate = (line) => {
	const difference = [line.slice()];

	while (!difference[difference.length - 1].every(diff => diff === 0)) {
		line = difference[difference.length - 1];
		difference.push([]);

		for (let i = 0; i < line.length - 1; i++) {
			difference[difference.length - 1].push(line[i + 1] - line[i]);
		};
	};

	let last = 0;
	for (let i = difference.length - 2; i >= 0; i--) {
		const currentLine = difference[i];
		last = currentLine[currentLine.length - 1] + last;
	};

	return last;
};

console.log(
	lines.reduce((accumulator, currentValue) => accumulator + extrapolate(currentValue), 0)
);
```

## Task Two

- [Task Description](https://adventofcode.com/2023/day/9#part2)
- [Puzzle Input](https://adventofcode.com/2023/day/9/input)

```javascript
const input = await importFromTextFile();
const lines = input.map(values => values.map(Number));

const extrapolate = (line) => {
	const difference = [line.slice()];

	while (!difference[difference.length - 1].every(diff => diff === 0)) {
		line = difference[difference.length - 1];
		difference.push([]);

		for (let i = 0; i < line.length - 1; i++) {
			difference[difference.length - 1].push(line[i + 1] - line[i]);
		};
	};

	let last = 0;
	for (let i = difference.length - 2; i >= 0; i--) {
		const currentLine = difference[i];
		last = currentLine[0] - last;
	};

	return last;
};

console.log(
	lines.reduce((accumulator, currentValue) => accumulator + extrapolate(currentValue), 0)
);
```
