# Day Nine ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2023/day/9)
- [Puzzle Input](https://adventofcode.com/2023/day/9/input)

```javascript
const input = await importFromTextFile();
const lines = input.map(values => values.map(Number));

const extrapolate = (line) => {
	/* convert the line into a 2d array */
	const difference = [line.slice()];

	/* loop through every difference is '0' */
	while (!difference[difference.length - 1].every(diff => diff === 0)) {
		line = difference[difference.length - 1];
		difference.push([]);

		/* calculate the difference between each element of the last line */
		for (let i = 0; i < line.length - 1; i++) {
			difference[difference.length - 1].push(line[i + 1] - line[i]);
		};
	};

	let last = 0;
	/* iterate backwards and add the difference onto the last element */
	for (let i = difference.length - 2; i >= 0; i--) {
		const currentLine = difference[i];
		last = currentLine[currentLine.length - 1] + last;
	};

	return last;
};

console.log(
	/* sum the extrapolated values of each line */
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
	/* convert the line into a 2d array */
	const difference = [line.slice()];

	/* loop through every difference is '0' */
	while (!difference[difference.length - 1].every(diff => diff === 0)) {
		line = difference[difference.length - 1];
		difference.push([]);

		/* calculate the difference between each element of the last line */
		for (let i = 0; i < line.length - 1; i++) {
			difference[difference.length - 1].push(line[i + 1] - line[i]);
		};
	};

	let last = 0;
	/* iterate backwards and remove the difference from the first element */
	for (let i = difference.length - 2; i >= 0; i--) {
		const currentLine = difference[i];
		last = currentLine[0] - last;
	};

	return last;
};

console.log(
	/* sum the extrapolated values of each line */
	lines.reduce((accumulator, currentValue) => accumulator + extrapolate(currentValue), 0)
);
```
