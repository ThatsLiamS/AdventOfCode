# Day Ten ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2023/day/10)
- [Puzzle Input](https://adventofcode.com/2023/day/10/input)

```javascript
const input = await importFromTextFile();
const lines = input.map(line => line);

/* locates the starting position */
const startPos = [];
for (let row = 0; row < lines.length; row++) {
	/* determines if the line contains the starting value */
	if (lines[row].includes('S')) {
		/* saves the xPos, and yPos of the value */
		startPos.push(row, lines[row].indexOf('S'));
	};
};

/* valid symbols to allow movement in each direction */
const directions = [[0,1], [1,0], [0,-1], [-1,0]];
const potentialPaths = ['-7J', '|LJ', '-FL', '|F7'];

/* determines which directions are possible from the startPos */
const validDirections = [];
for(let index = 0; index < 4; index++) {
	pos = directions[index]
	newX = startPos[0] + pos[0]
	newY = startPos[1] + pos[1]

	if ((0 <= newY && newY < lines.length) && (0 <= newY && newY < lines[index].length) && (potentialPaths[index].includes(lines[newX][newY]))) {
		validDirections.push(index);
	};
};

/* maps current direction onto the next */
/* based on current direction and pipe */
const transform = {
	'0-': 0, '07': 1, '0J': 3,
	'2-': 2, '2F': 1, '2L': 3,
	'1|': 1, '1L': 0, '1J': 2,
	'3|': 3, '3F': 0, '37': 2,
};

/* prepare variables to be used in the loop */
let currentDirection = validDirections[0];
let currentX = startPos[0] + directions[currentDirection][0];
let currentY = startPos[1] + directions[currentDirection][1];
let length = 1;

/* iterate around the entire connected pipe system */
while (currentX != startPos[0] || currentY != startPos[1]) {
	length += 1
	currentDirection = transform[`${currentDirection}${lines[currentX][currentY]}`];
	currentX += directions[currentDirection][0];
	currentY += directions[currentDirection][1];
};

/* the further point, in either direction, is the median */
console.log(length / 2);
```

## Task Two

- [Task Description](https://adventofcode.com/2023/day/10#part2)
- [Puzzle Input](https://adventofcode.com/2023/day/10/input)

```javascript
const input = await importFromTextFile();
const lines = input.map(line => line);

/* locates the starting position */
const startPos = [];
for (let row = 0; row < lines.length; row++) {
	/* determines if the line contains the starting value */
	if (lines[row].includes('S')) {
		/* saves the xPos, and yPos of the value */
		startPos.push(row, lines[row].indexOf('S'));
	};
};

/* valid symbols to allow movement in each direction */
const directions = [[0,1], [1,0], [0,-1], [-1,0]];
const potentialPaths = ['-7J', '|LJ', '-FL', '|F7'];

/* determines which directions are possible from the startPos */
const validDirections = [];
for(let index = 0; index < 4; index++) {
	pos = directions[index]
    newX = startPos[0] + pos[0]
    newY = startPos[1] + pos[1]

    if ((0 <= newY && newY < lines.length) && (0 <= newY && newY < lines[index].length) && (potentialPaths[index].includes(lines[newX][newY]))) {
        validDirections.push(index);
	};
};
const isValid = validDirections.filter(val => val == 3).length > 0;

/* maps current direction onto the next */
/* based on current direction and pipe */
const transform = {
	'0-': 0, '07': 1, '0J': 3,
	'2-': 2, '2F': 1, '2L': 3,
	'1|': 1, '1L': 0, '1J': 2,
	'3|': 3, '3F': 0, '37': 2,
};

/* create a map of all the visited positions */
const visitedPos = lines.map(line => line.split('').map(() => [0]));

/* prepare variables to be used in the loop */
visitedPos[startPos[0]][startPos[1]] = 1;

let currentDirection = validDirections[0];
let currentX = startPos[0] + directions[currentDirection][0];
let currentY = startPos[1] + directions[currentDirection][1];

/* iterate around the entire connected pipe system */
while (currentX != startPos[0] || currentY != startPos[1]) {
	/* mark off every visited position */
	visitedPos[currentX][currentY] = 1;

    currentDirection = transform[`${currentDirection}${lines[currentX][currentY]}`];
    currentX += directions[currentDirection][0];
    currentY += directions[currentDirection][1];
};

/* determine the enclosed area */
let area = 0;

for (let row = 0; row < lines.length; row++) {
	let flag = false;
	for (let column = 0; column < lines[row].length; column++) {

		/* is the position a pipe */
		if (visitedPos[row][column] == 1) {
			/* determines if next position is enclosed within the pipe */
			/* toggles to true after the first cross in, and turns false upon exiting */
			const condition = ('|JL'.includes(lines[row][column]) || (lines[row][column] == 'S' && isValid));
			flag = condition ? !flag : flag;
			continue;
		};
		/* increase the area by one, if enclosed */
		area = area + (flag ? 1 : 0);
	};
};

console.log(area);
```
