# Day Twelve ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2023/day/12)
- [Puzzle Input](https://adventofcode.com/2023/day/12/input)

```javascript
const countCombinations = (dots, blocks, i = 0, bi = 0, current = 0) => {
	/* if we've reached the end of the dots*/
	if (i === dots.length) {
		/* if it is a valid pattern, return 1, else 0 */
		return (bi === blocks.length && current === 0) || (bi === blocks.length - 1 && blocks[bi] === current) ? 1 : 0;
	};

	let totalCombinations = 0;
	/* iterate through both options for characters */
	for (const char of ['.', '#']) {

		/* runs for every wildcard, or the current char from the array */
		if (dots[i] === char || dots[i] === '?') {

			/* recursively calls 'self' based on the various situation */
			if (char === '.' && current === 0) {
				totalCombinations += countCombinations(dots, blocks, i + 1, bi, 0);
			}
			else if (char === '.' && current > 0 && bi < blocks.length && blocks[bi] === current) {
				totalCombinations += countCombinations(dots, blocks, i + 1, bi + 1, 0);
			}
			else if (char === '#') {
				totalCombinations += countCombinations(dots, blocks, i + 1, bi, current + 1);
			};
		};
	};

	/* returns combinations for this section of the pattern */
	return totalCombinations;
};

const input = await importFromTextFile();
const lines = input.map(line => line.split(' '));

/* iterate and manipulate every line */
const data = lines.map(line => {

	/* extract the data from the input, and covert the datatype */
	const [dots, blocksData] = line;
	const blocks = blocksData.split(',').map(x => parseInt(x, 10));

	/* manipulates the line into the combination count */
	return countCombinations(dots, blocks);
});

/* retrieve the sum of all the elements */
console.log(getSum(data));
```

## Task Two

- [Task Description](https://adventofcode.com/2023/day/12#part2)
- [Puzzle Input](https://adventofcode.com/2023/day/12/input)

```javascript
const countCombinations = (dots, blocks, i = 0, bi = 0, current = 0, optimisation = {}) => {
	/* has this pattern already been searched */
	const key = `${i}_${bi}_${current}`;
	if (optimisation[key] !== undefined) {
		/* reduces redundant calculations */
		return optimisation[key];
	};

	/* if we've reached the end of the dots*/
	if (i === dots.length) {
		/* if it is a valid pattern, return 1, else 0 */
		return (bi === blocks.length && current === 0) || (bi === blocks.length - 1 && blocks[bi] === current) ? 1 : 0;
	};

	let totalCombinations = 0;
	/* iterate through both options for characters */
	for (const char of ['.', '#']) {

		/* runs for every wildcard, or the current char from the array */
		if (dots[i] === char || dots[i] === '?') {

			/* recursively calls 'self' based on the various situation */
			if (char === '.' && current === 0) {
				totalCombinations += countCombinations(dots, blocks, i + 1, bi, 0, optimisation);
			}
			else if (char === '.' && current > 0 && bi < blocks.length && blocks[bi] === current) {
				totalCombinations += countCombinations(dots, blocks, i + 1, bi + 1, 0, optimisation);
			}
			else if (char === '#') {
				totalCombinations += countCombinations(dots, blocks, i + 1, bi, current + 1, optimisation);
			};
		};
	};

	/* set this pattern in the optimisation object */
	optimisation[key] = totalCombinations;
	/* returns combinations for this section of the pattern */
	return totalCombinations;
};

const input = await importFromTextFile();
const lines = input.map(line => line.split(' '));

/* iterate and manipulate every line */
const data = lines.map(line => {

	/* extract the data from the input */
	const [dots, blocksData] = line;

	/* repeat the pattern instruction as indicated */
	const dotsExtended = [dots, dots, dots, dots, dots].join('?');
	const blocksExtended = [blocksData, blocksData, blocksData, blocksData, blocksData].join(',');

	/* convert the data-type into an Integer */
	const blocks = blocksExtended.split(',').map(x => parseInt(x, 10));

	/* manipulates the line into the combination count */
	return countCombinations(dotsExtended, blocks);
});

/* retrieve the sum of all the elements */
console.log(getSum(data));
```
