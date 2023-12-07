# Day Four ⭐⭐

# Task One

- [Task Description](https://adventofcode.com/2023/day/4)
- [Puzzle Input](https://adventofcode.com/2023/day/4/input)

```javascript
const lines = await importFromTextFile();
let total = 0;

for (let index = 0; index < lines.length; index++) {

	const [partOne, partTwo] = lines[index].split('|');
	const winningNumbers = partOne.split(' ')
		.filter(val => partTwo.split(' ').includes(val))
		.filter(val => val !== '');

	if (winningNumbers.length == 0) continue;

	total += (2 ** (winningNumbers.length - 1));
};

console.log(total);
```

# Task Two

- [Task Description](https://adventofcode.com/2023/day/4#part2)
- [Puzzle Input](https://adventofcode.com/2023/day/4/input)

```javascript
const lines = await importFromTextFile();
const cardsWon = [];

for (let index = 0; index < lines.length; index++) {

	if (!cardsWon[index]) cardsWon[index] = 0;
	cardsWon[index] += 1;

	const [partOne, partTwo] = lines[index].split('|');
	const winningNumbers = partOne.split(' ')
		.filter(val => partTwo.split(' ').includes(val))
		.filter(val => val !== '');

	if (winningNumbers.length === 0) continue;

	for (let x = 0; x < winningNumbers.length; x++) {
		if (!cardsWon[index + 1 + x]) cardsWon[index + 1 + x] = 0;
		cardsWon[index + 1 + x] += cardsWon[index];
	};
};

console.log(getSum(cardsWon));
```