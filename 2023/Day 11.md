# Day Eleven ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2023/day/11)
- [Puzzle Input](https://adventofcode.com/2023/day/11/input)

```javascript
const input = await importFromTextFile()
const lines = input.map(line => line.split(''));

/* generates a list of row indices with no galaxies within */
const emptyRows = Array.from({ length: lines.length }, (v, r) => r)
	.filter((r) => lines[r].every((cell) => cell !== '#'));

/* generates a list of columns indices with no galaxies within */
const emptyColumns = Array.from({ length: lines[0].length }, (v, c) => c)
	.filter((c) => lines.every((row) => row[c] !== '#'));

/* determines the coordinates of every galaxy's location */
const galaxyPositions = lines.reduce((positions, row, r) => {
	row.forEach((cell, c) => {
		if (cell === '#') positions.push([r, c]);
	});
	return positions;
}, []);

let distance = 0;

/* nested loop ensures every combination of two galaxies is found */
galaxyPositions.forEach(([rowOne, colOne], i) => {
	galaxyPositions.slice(i).forEach(([rowTwo, colTwo]) => {

		/* calculates the manhattan distance between both galaxies */
		/*         shortest path  = |x2 - x1| + |y2 - y1|           */
		/* https://en.wikipedia.org/wiki/Taxicab_geometry#Arc_length */
		distance += Math.abs(rowTwo - rowOne) + Math.abs(colTwo - colOne);

		const checkEmpty = (coord, minCoord, maxCoord) => (
			coord >= minCoord && coord <= maxCoord
		);

		/* calculates the number of empty rows, and columns between the galaxies */
		/* this allows for obstacle assessment, and avoidance */
		const countRowsWithinRange = emptyRows.filter(eRow =>
			checkEmpty(eRow, Math.min(rowOne, rowTwo), Math.max(rowOne, rowTwo))
		).length;

		const countColumnsWithinRange = emptyColumns.filter(eColumn =>
			checkEmpty(eColumn, Math.min(colOne, colTwo), Math.max(colOne, colTwo))
		).length;

		/* add additional distance onto the total */
		distance += countRowsWithinRange + countColumnsWithinRange;
	});
});
console.log(distance);
```

## Task Two

- [Task Description](https://adventofcode.com/2023/day/11#part2)
- [Puzzle Input](https://adventofcode.com/2023/day/11/input)

```javascript
const input = await importFromTextFile()
const lines = input.map(line => line.split(''));

/* generates a list of row indices with no galaxies within */
const emptyRows = Array.from({ length: lines.length }, (v, r) => r)
	.filter((r) => lines[r].every((cell) => cell !== '#'));

/* generates a list of columns indices with no galaxies within */
const emptyColumns = Array.from({ length: lines[0].length }, (v, c) => c)
	.filter((c) => lines.every((row) => row[c] !== '#'));

/* determines the coordinates of every galaxy's location */
const galaxyPositions = lines.reduce((positions, row, r) => {
	row.forEach((cell, c) => {
		if (cell === '#') positions.push([r, c]);
	});
	return positions;
}, []);

let distance = 0;

/* nested loop ensures every combination of two galaxies is found */
galaxyPositions.forEach(([rowOne, colOne], i) => {
	galaxyPositions.slice(i).forEach(([rowTwo, colTwo]) => {

		/* calculates the manhattan distance between both galaxies */
		/*         shortest path  = |x2 - x1| + |y2 - y1|           */
		/* https://en.wikipedia.org/wiki/Taxicab_geometry#Arc_length */
		distance += Math.abs(rowTwo - rowOne) + Math.abs(colTwo - colOne);

		const checkEmpty = (coord, minCoord, maxCoord) => (
			coord >= minCoord && coord <= maxCoord
		);

		/* calculates the number of empty rows, and columns between the galaxies */
		/* this allows for obstacle assessment, and avoidance */
		const countRowsWithinRange = emptyRows.filter(eRow =>
			checkEmpty(eRow, Math.min(rowOne, rowTwo), Math.max(rowOne, rowTwo))
		).length;

		const countColumnsWithinRange = emptyColumns.filter(eColumn =>
			checkEmpty(eColumn, Math.min(colOne, colTwo), Math.max(colOne, colTwo))
		).length;

		/* add additional distance onto the total */
		distance += (countRowsWithinRange + countColumnsWithinRange) * 999_999;
	});
});
console.log(distance);
```
