# Day Three ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2023/day/3)
- [Puzzle Input](https://adventofcode.com/2023/day/3/input)

```javascript
const lines = await importFromTextFile();
const data = [];
const visitedPositions = new Set();

const directions = [
	{ row: -1, col: 0 }, // Above
	{ row: 1, col: 0 },  // Below
	{ row: 0, col: -1 }, // Left
	{ row: 0, col: 1 },  // Right
	{ row: -1, col: -1 },// Diagonal Up-Left
	{ row: -1, col: 1 }, // Diagonal Up-Right
	{ row: 1, col: -1 }, // Diagonal Down-Left
	{ row: 1, col: 1 },  // Diagonal Down-Right
];

const isValidPosition = (row, col, lines) => {
	return row >= 0 && row < lines.length && col >= 0 && col < lines[row].length;
};

for (let index = 0; index < lines.length; index++) {
	for (let j = 0; j < lines[index].length; j++) {
		const value = lines[index][j];

		if (/^[0-9]$/.test(value) && !visitedPositions.has(`${index}-${j}`)) {
			let symbols = false;;

			for (const dir of directions) {
				const newRow = index + dir.row;
				const newCol = j + dir.col;

				if (isValidPosition(newRow, newCol, lines)) {
					if ((/\d/.test(lines[newRow][newCol])  == false && lines[newRow][newCol] !== ".")) {
						symbols = true;
					};
				};
			};

			if (symbols == true) {
				const numberDigits = [];
	
				let k = j;
				while (k >= 0 && /^[0-9]$/.test(lines[index][k])) {
					numberDigits.unshift(lines[index][k]);
					visitedPositions.add(`${index}-${k}`);
					k--;
				};

				k = j + 1;
				while (k < lines[index].length && /^[0-9]$/.test(lines[index][k])) {
					numberDigits.push(lines[index][k]);
					visitedPositions.add(`${index}-${k}`);
					k++;
				};

				data.push(Number(numberDigits.join('')));
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
	{ row: -1, col: 0 }, // Above
	{ row: 1, col: 0 },  // Below
	{ row: 0, col: -1 }, // Left
	{ row: 0, col: 1 },  // Right
	{ row: -1, col: -1 },// Diagonal Up-Left
	{ row: -1, col: 1 }, // Diagonal Up-Right
	{ row: 1, col: -1 }, // Diagonal Down-Left
	{ row: 1, col: 1 },  // Diagonal Down-Right
];

for (let index = 0; index < lines.length; index++) {
	for (let j = 0; j < lines[index].length; j++) {
		const value = lines[index][j];
		let symX = 0; let symY = 0;

		if (/^[0-9]$/.test(value) && !visitedPositions.has(`${index}-${j}`)) {
			let symbol = false;

			for (const dir of directions) {
				const newRow = index + dir.row;
				const newCol = j + dir.col;

				if (newRow >= 0 && newRow < lines.length && newCol >= 0 && newCol < lines[newRow].length) {
					const neighborSymbol = lines[newRow][newCol];

					if ('*' == neighborSymbol) {
						symbol = true
						symX = newRow; symY = newCol;
					};
				};
			};

			if (symbol == true) {
				const numberDigits = [];

				let k = j;
				while (k >= 0 && /^[0-9]$/.test(lines[index][k])) {
					numberDigits.unshift(lines[index][k]);
					visitedPositions.add(`${index}-${k}`);
					k--;
				};

				k = j + 1;
				while (k < lines[index].length && /^[0-9]$/.test(lines[index][k])) {
					numberDigits.push(lines[index][k]);
					visitedPositions.add(`${index}-${k}`);
					k++;
				};

				const number = numberDigits.join('');

				let foundValue;
				foundSymbols.forEach(symbol => {
					const [x, y, value] = symbol.split('--');
					if (x === String(symX) && y === String(symY)) foundValue = value;
				});

				if (foundValue) {
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
