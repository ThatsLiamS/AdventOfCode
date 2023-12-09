# Day Two ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2023/day/2)
- [Puzzle Input](https://adventofcode.com/2023/day/2/input)

```javascript
const input = await importFromTextFile();
/* splits the line by ":", discards first part, and splits remaining by ";" */
/* "Game 1: 3 blue; 1 red, 2 green" => ["3 blue", "1 red, 2 green"] */
const lines = input.map(line => line
	.split(': ')[1]
	.split(';')
);

const targetCubes = { 'red': 12, 'green': 13, 'blue': 14 };
const isValidGame = (game) => {
	for (const set of game) {

		const cubeCounts = { 'red': 0, 'green': 0, 'blue': 0 };
		/* splits the set into each individual entry (number + color) */
		const values = set.split(',').map(item => item.trim().split(' '));

		/* loops through each individual entry, splits, and sets value within the object */
		for (const [count, color] of values) { cubeCounts[color] += parseInt(count, 10); };

		/* compares each color with the pre-set maximum values */
		if (!Object.entries(targetCubes).every(([color, limit]) => cubeCounts[color] <= limit)) {
			/* exceeds the value hence the game cannot occur */
			return false;
		};
	};
	return true;
};

/* applys the isValidGame function to each game, and if valid, adds the gameID to the total */
const sum = lines.reduce((acc, game, index) => isValidGame(game) ? acc + (index + 1) : acc, 0);
console.log(sum);
```

## Task Two

- [Task Description](https://adventofcode.com/2023/day/2#part2)
- [Puzzle Input](https://adventofcode.com/2023/day/2/input)

```javascript
const input = await importFromTextFile();
/* splits the line by ":", discards first part, and splits remaining by ";" */
/* "Game 1: 3 blue; 1 red, 2 green" => ["3 blue", "1 red, 2 green"] */
const lines = input.map(line => line
	.split(': ')[1]
	.split(';')
);

const getMinimumCubes = (game) => {
	const cubeCounts = { 'red': 0, 'green': 0, 'blue': 0 };
	for (const set of game) {
		/* splits the set into each individual entry (number + color) */
		const values = set.split(',').map(item => item.trim().split(' '));

		/* loops through every entry, and compares with the maximum already seen */
		for (const [count, color] of values) {
			if (cubeCounts[color] < parseInt(count, 10)) {
				/* sets the highest value seen as the maximum */
				cubeCounts[color] = parseInt(count, 10)
			};
		};
	};
	return (cubeCounts['red'] * cubeCounts['green'] * cubeCounts['blue']);
};

/* applys the function to each line, and sums the result */
const sum = lines.reduce((acc, game) => acc + getMinimumCubes(game), 0);
console.log(sum);
```
