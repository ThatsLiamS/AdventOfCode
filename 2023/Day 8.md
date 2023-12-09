# Day Eight ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2023/day/8)
- [Puzzle Input](https://adventofcode.com/2023/day/8/input)

```javascript
const lines = await importFromTextFile();
const nodes = {};

/* splits all the vectors into the letters, and separate them into groups of 3s */
for (let index = 2; index < lines.length; index++) {
	const info = lines[index].filter(value => ![' ', '=', '(', ')', ','].includes(value));
	/* first group is used as the Key, the second is the 'L' path and third is the 'R' path */
	nodes[info.slice(0, 3).join('')] = [info.slice(3, 6).join(''), info.slice(6).join('')];
};

let moves = 0; let index = 0;
let currentNode = 'AAA'; /* as per the puzzle description */

while (currentNode !== 'ZZZ') {
	moves++;

	const [left, right] = nodes[currentNode];
	/* determines the next vector pathway to selected */
	currentNode = lines[0][index] === 'L' ? left : right;

	/* increment the Left-Right line, and reset to 0 upon reaching the end */
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

/* splits all the vectors into the letters, and separate them into groups of 3s */
for (let index = 2; index < lines.length; index++) {
	const info = lines[index].filter(value => ![' ', '=', '(', ')', ','].includes(value));
	/* first group is used as the Key, the second is the 'L' path and third is the 'R' path */
	nodes[info.slice(0, 3).join('')] = [info.slice(3, 6).join(''), info.slice(6).join('')];
};

const getSteps = (start) => {
	let moves = 0; let index = 0;
	let currentNode = start;

	/* the end node only has to end with Z, not be ZZZ */
	while (currentNode.endsWith('Z') == false) {
		moves++;

		const [left, right] = nodes[currentNode];
		/* determines the next vector pathway to selected */
		currentNode = lines[0][index] === 'L' ? left : right;

		/* increment the Left-Right line, and reset to 0 upon reaching the end */
		index = (index + 1) % lines[0].length;
	};
	return moves;
};

/* start at every vector ending with an A, and apply the getSteps function*/
const data = Object.keys(nodes)
	.filter(key => key.endsWith('A'))
	.map(startingValue => getSteps(startingValue));

/* determine when all paths will intersect by ending in Z nodes (LCM) */
console.log(
	data.reduce((accumulator, currentValue) => lowestCommonMultiple(Number(accumulator), Number(currentValue)), 1)
);
```
