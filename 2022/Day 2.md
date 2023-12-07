# Day Two ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2022/day/2)
- [Puzzle Input](https://adventofcode.com/2022/day/2/input)

```javascript
const lines = await importFromTextFile();
const data = [];

for (const line of lines) {
	const player = line[0].charCodeAt(0) - 64;
	const ours = line[1].charCodeAt(0) - 87;

	const oursIfWon = (ours === 1 ? 3 : ours - 1);

	data.push(ours);
	if (player === ours) data.push(3);
	if (oursIfWon === player) data.push(6);
};

console.log(getSum(data));
```

## Task Two

- [Task Description](https://adventofcode.com/2022/day/2#part2)
- [Puzzle Input](https://adventofcode.com/2022/day/2/input)

```javascript
const lines = await importFromTextFile();
const data = [];

for (const line of lines) {
	const player = line[0].charCodeAt(0) - 64;
	const ours = line[1].charCodeAt(0) - 87;

	if (ours === 1) data.push(player === 1 ? 3 : player - 1);
	if (ours === 2) data.push(3, player);
	if (ours === 3) data.push(6, player === 3 ? 1 : player + 1);
};

console.log(getSum(data));
```
