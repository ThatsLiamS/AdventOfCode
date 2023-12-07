# Day Eight ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2022/day/8)
- [Puzzle Input](https://adventofcode.com/2022/day/8/input)

```javascript
const lines = await importFromTextFile();
let total = 0;

for (let row = 0; row < lines.length; row++) {
	const verticalElements = Array.from({ length: lines[0].length }, (_, i) => lines.map(row => row[i]));
	for (let column = 0; column < lines[row].length; column++) {

		if (row === 0 || row === lines.length - 1 || column === 0 || column === lines[row].length - 1) { total++; continue; }

		const neighbors = [
			verticalElements[column].slice(0, row),
			verticalElements[column].slice(row + 1),
			lines[row].slice(0, column).split(''),
			lines[row].slice(column + 1).split('')
		].map(arr => mergeSort(arr));

		const array = neighbors.filter(array => array[ array.length - 1] < Number(lines[row][column]));
		if (array.length > 0) total++;
	};
};  

console.log(total);
```

## Task Two

- [Task Description](https://adventofcode.com/2022/day/8#part2)
- [Puzzle Input](https://adventofcode.com/2022/day/8/input)

```javascript
const lines = await importFromTextFile();
const directions = [ [-1, 0], [0, 1], [1, 0], [0, -1] ];
let highestScore = 0;

for (let row = 0; row < lines.length; row++) {
	for (let column = 0; column < lines[0].length; column++) {
		let score = 1;

		for (const [dr, dc] of directions) {
			let dist = 1;
			let currentRow = row + dr;
			let currentColumn = column + dc;

			while (true) {
				if (!(0 <= currentRow && currentRow < lines.length && 0 <= currentColumn && currentColumn < lines[0].length)) {
					dist -= 1; break;
				};
				if (lines[currentRow][currentColumn] >= lines[row][column]) { break; }

				dist += 1;
				currentRow += dr;
				currentColumn += dc;
			};
			score *= dist;
		};
		highestScore = Math.max(highestScore, score);
	};
};

console.log(highestScore);
```
