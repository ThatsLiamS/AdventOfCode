# Day Sixteen ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2023/day/16)
- [Puzzle Input](https://adventofcode.com/2023/day/16/input)

```javascript
const input = await importFromTextFile();
const lines = input.map(line => line.split(''));

const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

/* increase the position by 1 in the direction */
const step = (r, c, d) => { 
	return { r: r + directions[d][0], c: c + directions[d][1], d };
};

const score = (sr, sc, sd) => {
	/* dynamic programming: starter values */
	const positions = [{ r: sr, c: sc, d: sd }];

	/* keeps a record of positions, and the direction through those positions */
	const seenPositions = new Set();

	while (true) {
		const newPositions = [];
		if (positions.length === 0) break;

		for (const { r, c, d } of positions) {
			/* is the position valid */
			if (0 <= r && r < lines.length && 0 <= c && c < lines[0].length) {
				seenPositions.add(`${r},${c}`);

				/* have we already been through this position, in this direction */
				if (seenPositions.has(`${r},${c},${d}`)) continue;
				seenPositions.add(`${r},${c},${d}`);

				if (lines[r][c] === '.') newPositions.push(step(r, c, d));

				/* is there a mirror */
				if (lines[r][c] === '/') newPositions.push(step(r, c, { 0: 1, 1: 0, 2: 3, 3: 2 }[d]));
				if (lines[r][c] === '\\') newPositions.push(step(r, c, 3 - d));

				/* light splitters, generate two beams in opposite directions */
				if (lines[r][c] === '|') {
					if (d === 0 || d === 2) { newPositions.push(step(r, c, d)); }
					else {
						newPositions.push(step(r, c, 0));
						newPositions.push(step(r, c, 2));
					};
				};
				if (lines[r][c] === '-') {
					if (d === 1 || d === 3) { newPositions.push(step(r, c, d)); }
					else {
						newPositions.push(step(r, c, 1));
						newPositions.push(step(r, c, 3));
					};
				};
			};
		};

		/* replace the DP values with the newly generated ones */
		positions.length = 0;
		positions.push(...newPositions);
	};

	/* return the number of position co-ordinates visited */
	return [...seenPositions].filter(pos => /^\d+,\d+$/.test(pos)).length;
};

console.log(score(0, 0, 1));
```

## Task Two

- [Task Description](https://adventofcode.com/2023/day/16#part2)
- [Puzzle Input](https://adventofcode.com/2023/day/16/input)

```javascript
const input = await importFromTextFile();
const lines = input.map(line => line.split(''));

const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

/* increase the position by 1 in the direction */
const step = (r, c, d) => { 
	return { r: r + directions[d][0], c: c + directions[d][1], d };
};

const score = (sr, sc, sd) => {
	/* dynamic programming: starter values */
	const positions = [{ r: sr, c: sc, d: sd }];

	/* keeps a record of positions, and the direction through those positions */
	const seenPositions = new Set();

	while (true) {
		const newPositions = [];
		if (positions.length === 0) break;

		for (const { r, c, d } of positions) {
			/* is the position valid */
			if (0 <= r && r < lines.length && 0 <= c && c < lines[0].length) {
				seenPositions.add(`${r},${c}`);

				/* have we already been through this position, in this direction */
				if (seenPositions.has(`${r},${c},${d}`)) continue;
				seenPositions.add(`${r},${c},${d}`);

				if (lines[r][c] === '.') newPositions.push(step(r, c, d));

				/* is there a mirror */
				if (lines[r][c] === '/') newPositions.push(step(r, c, { 0: 1, 1: 0, 2: 3, 3: 2 }[d]));
				if (lines[r][c] === '\\') newPositions.push(step(r, c, 3 - d));

				/* light splitters, generate two beams in opposite directions */
				if (lines[r][c] === '|') {
					if (d === 0 || d === 2) { newPositions.push(step(r, c, d)); }
					else {
						newPositions.push(step(r, c, 0));
						newPositions.push(step(r, c, 2));
					};
				};
				if (lines[r][c] === '-') {
					if (d === 1 || d === 3) { newPositions.push(step(r, c, d)); }
					else {
						newPositions.push(step(r, c, 1));
						newPositions.push(step(r, c, 3));
					};
				};
			};
		};

		/* replace the DP values with the newly generated ones */
		positions.length = 0;
		positions.push(...newPositions);
	};

	/* return the number of position co-ordinates visited */
	return [...seenPositions].filter(pos => /^\d+,\d+$/.test(pos)).length;
};

let maxEnergized  = 0;
for (let row = 0; row < lines.length; row++) {
	/* iterate over every row, moving right and left */
	maxEnergized = Math.max(maxEnergized, score(row, 0, 1))
	maxEnergized = Math.max(maxEnergized, score(row, lines[0].length - 1, 3))
};
for (let col = 0; col < lines[0].length; col++) {
	/* iterate over every column, moving down and up */
	maxEnergized = Math.max(maxEnergized, score(0, col, 2))
	maxEnergized = Math.max(maxEnergized, score(lines.length - 1, col, 0))
};
console.log(maxEnergized)
```
