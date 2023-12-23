# Day Eight ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2022/day/8)
- [Puzzle Input](https://adventofcode.com/2022/day/8/input)

```javascript
const lines = await importFromTextFile();
let total = 0;

for (let row = 0; row < lines.length; row++) {
	/* create an array with the same length as the first row */
	/* populate array with the rows in column 'i' */
	const verticalElements = Array.from({ length: lines[0].length }, (_, i) => lines.map(rows => rows[i]));

	for (let column = 0; column < lines[row].length; column++) {

		/* if the element is on the border, it can always be seen */
		if (row === 0 || row === lines.length - 1 || column === 0 || column === lines[row].length - 1) { total++; continue; }

		/* splits rows, or columns based on index points provided */
		const getVerticalElements = (array, start, end) => array.slice(start, end);
		const getHorizontalElements = (array, start, end) => array.slice(start, end).split('');

		/* calculate neighboring elements: [North, East, South, West] */
		const neighbors = [
			getVerticalElements(verticalElements[column], 0, row),
			getHorizontalElements(lines[row], column + 1),
			getVerticalElements(verticalElements[column], row + 1),
			getHorizontalElements(lines[row], 0, column),
		].map(array => mergeSort(array));

		/* if the number is greater than the highest neighbor, then it can be seen */
		const array = neighbors.filter(array => array[array.length - 1] < Number(lines[row][column]));
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
let highestScore = 0;

for (let row = 0; row < lines.length; row++) {
	/* create an array with the same length as the first row */
	/* populate array with the rows in column 'i' */
	const verticalElements = Array.from({ length: lines[0].length }, (_, i) => lines.map(rows => rows[i]));

	for (let column = 0; column < lines[row].length; column++) {

		/* splits rows, or columns based on index points provided */
		const getVerticalElements = (array, start, end) => array.slice(start, end);
		const getHorizontalElements = (array, start, end) => array.slice(start, end).split('');

		/* calculate neighboring elements: [North, East, South, West] */
		const neighbors = [
			getVerticalElements(verticalElements[column], 0, row).reverse(),
			getHorizontalElements(lines[row], column + 1),
			getVerticalElements(verticalElements[column], row + 1),
			getHorizontalElements(lines[row], 0, column).reverse(),
		];

		const currentHeight = Number(lines[row][column]);
		let productScore = 1;

		for (const array of neighbors) {
			let localScore = 0;

			for (const tree of array) {
				/* if the tree is smaller then the currentHeight, it can be seen */
				if (tree < currentHeight) localScore++;
				/* trees taller then the current can be seen, however blocks all others behind */
				if (tree >= currentHeight) { localScore++; break; };
			};
			/* multiply the number of trees in each direction together */
			productScore = productScore * localScore
		};

		/* selects the greater value, between the current highestScore and productScore */
		highestScore = (highestScore > productScore) ? highestScore : productScore;
	};
};
console.log(highestScore);
```
