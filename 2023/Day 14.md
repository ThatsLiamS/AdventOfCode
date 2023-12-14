# Day Fourteen ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2023/day/14)
- [Puzzle Input](https://adventofcode.com/2023/day/14/input)

```javascript
const input = await importFromTextFile();
const lines = input.map(line => line.split(''));

const tilt = (grid) => {
	/* nested loop ensures every element is checked */
	for (let c = 0; c < grid[0].length; c++) {
		for (let _ = 0; _ < grid.length; _++) {

			/* bubbles the O to the top */
			for (let r = 0; r < grid.length; r++) {

				/* ensures there is space for the O to move along */
				if (grid[r][c] === 'O' && r > 0 && grid[r - 1][c] === '.') {
					grid[r][c] = '.';
					grid[r - 1][c] = 'O';
				};
			};
		};
	};
	return grid;
};

const calculateStrength = (grid) => {
	/* iterates over every element of the array */
	return grid.reduce((strength, row, rowIndex) => {
		return strength + row.reduce((rowStrength, cell) => {

			/* sum the row numbers (from the bottom), if element is O */
			return cell === 'O' ? rowStrength + grid.length - rowIndex : rowStrength;
		}, 0);
	}, 0);
};  

console.log(calculateStrength(
	tilt(lines)
));
```

## Task Two

- [Task Description](https://adventofcode.com/2023/day/14#part2)
- [Puzzle Input](https://adventofcode.com/2023/day/14/input)

```javascript
const input = await importFromTextFile();
let lines = input.map(line => line.split(''));

const rotate = (grid) => {
	/* generate a blank 2D array of the same dimensions */
	const rotatedGrid = Array.from({ length: grid[0].length }, () => Array(grid.length).fill(''));

	/* iterate through every element */
	for (let row = 0; row < grid.length; row++) {
		for (let column = 0; column < grid[0].length; column++) {
			/* map the element onto the new position */
			rotatedGrid[column][grid.length - 1 - row] = grid[row][column];
		};
	};

	return rotatedGrid;
};

const tilt = (grid) => {
	/* nested loop ensures every element is checked */
	for (let c = 0; c < grid[0].length; c++) {
		for (let _ = 0; _ < grid.length; _++) {

			/* bubbles the O to the top */
			for (let r = 0; r < grid.length; r++) {

				/* ensures there is space for the O to move along */
				if (grid[r][c] === 'O' && r > 0 && grid[r - 1][c] === '.') {
					grid[r][c] = '.';
					grid[r - 1][c] = 'O';
				};
			};
		};
	};
	return grid;
};

const calculateStrength = (grid) => {
	/* iterates over every element of the array */
	return grid.reduce((strength, row, rowIndex) => {
		return strength + row.reduce((rowStrength, cell) => {

			/* sum the row numbers (from the bottom), if element is O */
			return cell === 'O' ? rowStrength + grid.length - rowIndex : rowStrength;
		}, 0);
	}, 0);
};  

const cycleIndexMap = {};
const target = 10**9;

for (let t = 0; t < target; t++) {
	/* complete a 360 degree rotation */
	for (let j = 0; j < 4; j++) lines = rotate( tilt(lines) );

	const gridHash = lines.map(row => row.join('')).join('');

	/* if this position has already occurred */
	if (cycleIndexMap[gridHash] !== undefined) {
		const cycleLength = t - cycleIndexMap[gridHash];
		/* determines how many complete cycles can occur */
		const completeCycles = Math.floor((target - t) / cycleLength);
		t = t + (completeCycles * cycleLength);
	};

	/* add the new position to the map */
	cycleIndexMap[gridHash] = t;
}

console.log(calculateStrength(lines));
```
