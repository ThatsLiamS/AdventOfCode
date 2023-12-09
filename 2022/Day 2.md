# Day Two ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2022/day/2)
- [Puzzle Input](https://adventofcode.com/2022/day/2/input)

```javascript
const lines = await importFromTextFile();
const data = [];

for (const line of lines) {
	/* converts the player's choice to an integer. [Rock (1), Paper (2), Scissors (3)] */
	const player = line[0].charCodeAt(0) - 64;
	/* converts our choice to an integer. [Rock (1), Paper (2), Scissors (3)] */
	const ours = line[2].charCodeAt(0) - 87;

	data.push(ours);
	if (player === ours) data.push(3);

	/* the integer will beat the integer prior. 2 (Paper) beats 1 (Rock). 1 (Rock) beats 3 (Scissors) */
	if ((ours === 1 ? 3 : ours - 1) === player) data.push(6);
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
	/* converts the player's choice to an integer. [Rock (1), Paper (2), Scissors (3)] */
	const player = line[0].charCodeAt(0) - 64;
	/* converts our plan to an integer. [Lose (1), Draw (2), Win (3)] */
	const ours = line[2].charCodeAt(0) - 87;

	/* lose -- an integer will lose to the integer after. 1 (Rock) loses to 2 (Paper). 3 (Scissors) loses to 1 (Rock) */
	if (ours === 1) data.push(0, (player === 1 ? 3 : player - 1));
	/* draw -- both integers are equal */
	if (ours === 2) data.push(3, (player));
	/* win -- an integer will beat the integer prior. 2 (Paper) beats 1 (Rock). 1 (Rock) beats 3 (Scissors) */
	if (ours === 3) data.push(6, (player === 3 ? 1 : player + 1));
};

console.log(getSum(data));
```
