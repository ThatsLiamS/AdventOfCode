# Day Three ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2023/day/3)
- [Puzzle Input](https://adventofcode.com/2023/day/3/input)

```javascript
const lines = await importFromTextFile();
const data = [];
const visitedPositions = new Set();

const directions = [
	{ row: -1, col: 0 }, // North
	{ row: 1, col: 0 },  // South
	{ row: 0, col: -1 }, // West
	{ row: 0, col: 1 },  // East
	{ row: -1, col: -1 },// North West
	{ row: -1, col: 1 }, // North East
	{ row: 1, col: -1 }, // South West
	{ row: 1, col: 1 },  // South East
];

/* is the position on the board */
const isValidPosition = (row, col, lines) => {
	return row >= 0 && row < lines.length && col >= 0 && col < lines[row].length;
};

/* iterate over every element in the grid */
for (let index = 0; index < lines.length; index++) {
	for (let j = 0; j < lines[index].length; j++) {
		const value = lines[index][j];

		/* is it a number that we haven't visited before */
		if (/^[0-9]$/.test(value) && !visitedPositions.has(`${index}-${j}`)) {
			let symbols = false;;

			/* check every adjacent cell */
			for (const dir of directions) {
				const newRow = index + dir.row;
				const newCol = j + dir.col;

				if (isValidPosition(newRow, newCol, lines)) {
					/* is the cell a symbol */
					if ((/\d/.test(lines[newRow][newCol]) == false && lines[newRow][newCol] !== ".")) {
						symbols = true;
					};
				};
			};

			if (symbols == true) {
				const numberDigits = [];
	
				/* identify all numbers to the left */
				let k = j;
				while (k >= 0 && /^[0-9]$/.test(lines[index][k])) {
					numberDigits.unshift(lines[index][k]);
					visitedPositions.add(`${index}-${k}`);
					k--;
				};

				/* identify all the numbers to the right */
				k = j + 1;
				while (k < lines[index].length && /^[0-9]$/.test(lines[index][k])) {
					numberDigits.push(lines[index][k]);
					visitedPositions.add(`${index}-${k}`);
					k++;
				};

				/* get the complete number */
				data.push( Number(numberDigits.join('')) );
			};
		};
	};
};

console.log(getSum(data));
```

## Task Two

- [Task Description](https://adventofcode.com/2023/day/3#part2)
- [Puzzle Input](https://adventofcode.com/2023/day/3/input)

```javascript
const lines = await importFromTextFile();
let total = 0;

const foundSymbols = new Set();
const visitedPositions = new Set();

const directions = [
	{ row: -1, col: 0 }, // North
	{ row: 1, col: 0 },  // South
	{ row: 0, col: -1 }, // West
	{ row: 0, col: 1 },  // East
	{ row: -1, col: -1 },// North West
	{ row: -1, col: 1 }, // North East
	{ row: 1, col: -1 }, // South West
	{ row: 1, col: 1 },  // South East
];

/* is the position on the board */
const isValidPosition = (row, col, lines) => {
	return row >= 0 && row < lines.length && col >= 0 && col < lines[row].length;
};

/* iterate over every element in the grid */
for (let index = 0; index < lines.length; index++) {
	for (let j = 0; j < lines[index].length; j++) {
		const value = lines[index][j];
		let symX = 0; let symY = 0;

		/* is it a number that we haven't visited before */
		if (/^[0-9]$/.test(value) && !visitedPositions.has(`${index}-${j}`)) {
			let symbol = false;

			/* check every adjacent cell */
			for (const dir of directions) {
				const newRow = index + dir.row;
				const newCol = j + dir.col;

				if (isValidPosition(newRow, newCol, lines)) {
					/* is the cell an asterisk */
					if ('*' == lines[newRow][newCol]) {
						symbol = true
						symX = newRow; symY = newCol;
					};
				};
			};

			if (symbol == true) {
				const numberDigits = [];

				/* identify all numbers to the left */
				let k = j;
				while (k >= 0 && /^[0-9]$/.test(lines[index][k])) {
					numberDigits.unshift(lines[index][k]);
					visitedPositions.add(`${index}-${k}`);
					k--;
				};

				/* identify all the numbers to the right */
				k = j + 1;
				while (k < lines[index].length && /^[0-9]$/.test(lines[index][k])) {
					numberDigits.push(lines[index][k]);
					visitedPositions.add(`${index}-${k}`);
					k++;
				};

				const number = numberDigits.join('');

				/* have we already seen this symbol */
				let foundValue;
				foundSymbols.forEach(symbol => {
					const [x, y, value] = symbol.split('--');
					/* have we already stored this symbol */
					if (x === String(symX) && y === String(symY)) foundValue = value;
				});

				if (foundValue) {
					/* if we've seen the symbol twice now */
					total += Number(foundValue) * Number(number);
				} else {
					foundSymbols.add(`${symX}--${symY}--${number}`);
				};
			};
		};
	};
};

console.log(total);
```
