# Day Two ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2023/day/2)
- [Puzzle Input](https://adventofcode.com/2023/day/2/input)

```javascript
const lines = await importFromTextFile();
const targetCubes = { red: 12, green: 13, blue: 14 };

const isValidGame = (game) => {
	for (const set of game) {

		const cubeCounts = { red: 0, green: 0, blue: 0 };
		const values = set.split(',').map(item => item.trim().split(' '));

		for (const [count, color] of values) {   cubeCounts[color] += parseInt(count, 10);    };

		if (!Object.entries(targetCubes).every(([color, limit]) => cubeCounts[color] <= limit)) {
			return false;
		};
	};
	return true;
};

const sum = lines.reduce((acc, game, index) => isValidGame(game) ? acc + (index + 1) : acc, 0);
console.log(sum);
```

## Task Two

- [Task Description](https://adventofcode.com/2023/day/2#part2)
- [Puzzle Input](https://adventofcode.com/2023/day/2/input)

```javascript
const lines = await importFromTextFile();

const isValidGame = (game) => {
	const cubeCounts = { red: 0, green: 0, blue: 0 };
	for (const set of game) {
		const values = set.split(',').map(item => item.trim().split(' '));

		for (const [count, color] of values) {
			if (cubeCounts[color] < parseInt(count, 10)) {
				cubeCounts[color] = parseInt(count, 10)
			}
		};
	};
	return (cubeCounts['red'] * cubeCounts['green'] * cubeCounts['blue']);
};

const sum = lines.reduce((acc, game) => acc + Number(isValidGame(game)), 0);
console.log(sum);
```
