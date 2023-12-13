# Day Thirteen ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2023/day/13)
- [Puzzle Input](https://adventofcode.com/2023/day/13/input)

```javascript
const input = await importFromTextFile();
const grids = input.join('\n').split('\n\n')
	.map(section =>
		section.split('\n').map(line =>
			line.split('')
		)
	);

const summary = grids.map(pattern => {
	/* the total summary for the specific pattern */
	let total = 0;
	for (let column = 0; column < pattern[0].length - 1; column++) {

		let equal = true;
		for (let difference = 0; difference < pattern[0].length; difference++) {
			/* compare the characters on the left and right sides, progressively moving away from the centre */
			const left = column - difference;
			const right = column + 1 + difference;

			/* ensure left, right are valid indexes */
			if (left >= 0 && right < pattern[0].length) {
				/* do any of the characters not match */
				response = !pattern.some((_, row) => pattern[row][left] !== pattern[row][right]);
				if (!response) equal = false;
			};
		};
		/* if a perfect reflection, add the column number */
		if (equal) { total += column + 1; };
	};

	for (let row = 0; row < pattern.length - 1; row++) {

		let equal = true;
		for (let difference = 0; difference < pattern.length; difference++) {
			/* compare the characters above and below, progressively moving away from the centre */
			const up = row - difference;
			const down = row + 1 + difference;

			/* ensure up, down are valid indexes */
			if (up >= 0 && down < pattern.length) {
				/* do any of the characters not match */
				response = !pattern[up].some((_, column) => pattern[up][column] !== pattern[down][column]);
				if (!response) equal = false;
			};
		};
		/* if a perfect reflection, add the row number * 100 */
		if (equal) { total += 100 * (row + 1); }
	};

	/* manipulate the pattern into the summary */
	return total;
});

console.log(getSum(summary));
```

## Task Two

- [Task Description](https://adventofcode.com/2023/day/13#part2)
- [Puzzle Input](https://adventofcode.com/2023/day/13/input)

```javascript
const input = await importFromTextFile();
const grids = input.join('\n').split('\n\n')
	.map(section =>
		section.split('\n').map(line =>
			line.split('')
		)
	);

const summary = grids.map(pattern => {
	/* the total summary for the specific pattern */
	let total = 0;
	for (let column = 0; column < pattern[0].length - 1; column++) {

		let elementsUnequal = 0;
		for (let difference = 0; difference < pattern[0].length; difference++) {
			/* compare the characters on the left and right sides, progressively moving away from the centre */
			const left = column - difference;
			const right = column + 1 + difference;

			/* ensure left, right are valid indexes */
			if (left >= 0 && right < pattern[0].length) {
				/* do any of the characters not match */
				response = pattern.filter((_, row) => pattern[row][left] !== pattern[row][right]);
				elementsUnequal += response.length;
			};
		};
		/* if an almost-perfect reflection, add the column number */
		if (elementsUnequal === 1) { total += column + 1; };
	};

	for (let row = 0; row < pattern.length - 1; row++) {

		let elementsUnequal = 0;
		for (let difference = 0; difference < pattern.length; difference++) {
			/* compare the characters above and below, progressively moving away from the centre */
			const up = row - difference;
			const down = row + 1 + difference;

			/* ensure up, down are valid indexes */
			if (up >= 0 && down < pattern.length) {
				/* do any of the characters not match */
				response = pattern[up].filter((_, column) => pattern[up][column] !== pattern[down][column]);
				elementsUnequal += response.length;
			};
		};
		/* if an almost-perfect reflection, add the row number * 100 */
		if (elementsUnequal === 1) { total += 100 * (row + 1); }
	};

	/* manipulate the pattern into the summary */
	return total;
});

console.log(getSum(summary));
```
