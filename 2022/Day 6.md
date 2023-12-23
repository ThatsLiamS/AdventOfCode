# Day Six ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2022/day/6)
- [Puzzle Input](https://adventofcode.com/2022/day/6/input)

```javascript
const [line] = await importFromTextFile();

const getMarker = (length) => {
	const word = [];

	/* iterate through every character */
	for (let index = 0; index < line.length; index++) {

		/* does the word already meet the length requirements */
		/* if so, remove the first element */
		if (word.length === length) word.shift();

		/* add the next character to the word */
		word.push(line[index]);

		/* if all elements are unique, return the position */
		if (new Set(word).size === length) { return index + 1; };
	};
};

console.log(getMarker(4));
```

## Task Two

- [Task Description](https://adventofcode.com/2022/day/6#part2)
- [Puzzle Input](https://adventofcode.com/2022/day/6/input)

```javascript
const [line] = await importFromTextFile();

const getMarker = (length) => {
	const word = [];

	/* iterate through every character */
	for (let index = 0; index < line.length; index++) {

		/* does the word already meet the length requirements */
		/* if so, remove the first element */
		if (word.length === length) word.shift();

		/* add the next character to the word */
		word.push(line[index]);

		/* if all elements are unique, return the position */
		if (new Set(word).size === length) { return index + 1; };
	};
};

console.log(getMarker(14));
```
