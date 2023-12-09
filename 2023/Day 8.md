# Day Eight ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2023/day/8)
- [Puzzle Input](https://adventofcode.com/2023/day/8/input)

```javascript
const lines = await importFromTextFile();
const nodes = {};

for (let index = 2; index < lines.length; index++) {
	const info = lines[index].filter(value => ![' ', '=', '(', ')', ','].includes(value));
	nodes[info.slice(0, 3).join('')] = [info.slice(3, 6).join(''), info.slice(6).join('')];
};

let moves = 0; let index = 0;
let currentNode = 'AAA';

while (currentNode !== 'ZZZ') {
	moves++;

	const [left, right] = nodes[currentNode];
	currentNode = lines[0][index] === 'L' ? left : right;

	index = (index + 1) % lines[0].length;
};
console.log(moves);
```

## Task Two

- [Task Description](https://adventofcode.com/2023/day/8#part2)
- [Puzzle Input](https://adventofcode.com/2023/day/8/input)

```javascript
const lines = await importFromTextFile();
const nodes = {};

for (let index = 2; index < lines.length; index++) {
	const info = lines[index].filter(value => ![' ', '=', '(', ')', ','].includes(value));
	nodes[info.slice(0, 3).join('')] = [info.slice(3, 6).join(''), info.slice(6).join('')];
};

const getSteps = (start) => {
	let moves = 0; let index = 0;
	let currentNode = start;

	while (currentNode.endsWith('Z') == false) {
		moves++;
		const [left, right] = nodes[currentNode];
		currentNode = lines[0][index] === 'L' ? left : right;

		index = (index + 1) % lines[0].length;
	};
	return moves;
};

const data = Object.keys(nodes)
	.filter(key => key.endsWith('A'))
	.map(startingValue => getSteps(startingValue));

console.log(
	data.reduce((accumulator, currentValue) => lowestCommonMultiple(Number(accumulator), Number(currentValue)), 1)
);
```
