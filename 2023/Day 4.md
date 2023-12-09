# Day Four ⭐⭐

# Task One

- [Task Description](https://adventofcode.com/2023/day/4)
- [Puzzle Input](https://adventofcode.com/2023/day/4/input)

```javascript
const input = await importFromTextFile();
/* splits the line, discarding the card ID */
const lines = input.map(line => line.split(':')[1]);

const data = lines.map(line => {
	const [partOne, partTwo] = line.split('|');

	/* determine the numbers which appear in both lists */
	const winningNumbers = partOne.split(' ')
		.filter(val => partTwo.split(' ').includes(val))
		.filter(val => val !== '');

	/* for every winning number, the prize doubles [1, 2, 4, 8, ...] */
	if (winningNumbers.length == 0) return 0;
	return (2 ** (winningNumbers.length - 1));
});

console.log(getSum(data));
```

# Task Two

- [Task Description](https://adventofcode.com/2023/day/4#part2)
- [Puzzle Input](https://adventofcode.com/2023/day/4/input)

```javascript
const input = await importFromTextFile();
/* splits the line, discarding the card ID */
const lines = input.map(line => line.split(':')[1]);
/* create an array where each element corresponds to the number of cards with that ID */
const cardsWon = new Array(lines.length).fill(0);

for (let index = 0; index < lines.length; index++) {
	/* by default, we have one of each card */
	cardsWon[index] += 1;

	const [partOne, partTwo] = lines[index].split('|');
	/* determine the numbers which appear in both lists */
	const winningNumbers = partOne.split(' ')
		.filter(val => partTwo.split(' ').includes(val) && val !== '');

	/* generate new cards for each winning number */
	for (let x = 1; x <= winningNumbers.length; x++) {
		/* increase the number of the next cards by the number of the current card */
		cardsWon[index + x] += cardsWon[index];
	};
};

console.log(getSum(cardsWon));
```
