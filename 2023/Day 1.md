# Day One ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2023/day/1)
- [Puzzle Input](https://adventofcode.com/2023/day/1/input)

```javascript
const lines = await importFromTextFile();
const data = lines.map(line => {
	/* loops through every character, and discard any non-digits */
	const numbers = line.split('').filter(digit => /[0-9]/.test(digit));
	/* combines the first and last number into a two-digit number */
	return (Number(numbers[0] + numbers[numbers.length - 1]));
});

console.log(getSum(data));
```

## Task Two

- [Task Description](https://adventofcode.com/2023/day/1#part2)
- [Puzzle Input](https://adventofcode.com/2023/day/1/input)

```javascript
const lines = await importFromTextFile();
const numbers = { 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9 };

const data = lines.map(line => {
	const numbersFound = [];

	/* loops through every character in the line */
	for (let index = 0; index < line.length; index++) {
		/* is the character a digit */
		if (/[0-9]/.test(line[index])) numbersFound.push(Number(line[index]));

		/* loops through every number spelt out [one, two, ..., nine] */
		for (const word of Object.keys(numbers)) {
			/* is it possible for the word to fit within the remaining characters */
			const validLength = word.length + index <= line.length;

			/* splits the line based on the words length, and checks for equality */
			if (validLength && (line.slice(index, index + word.length) == word)) {
				numbersFound.push(numbers[word]);
			};
		};
	};

	/* combines the first and last number into a two-digit number */
	return (numbersFound[0] * 10) + (numbersFound[numbersFound.length - 1]);
});

console.log(getSum(data));
```
