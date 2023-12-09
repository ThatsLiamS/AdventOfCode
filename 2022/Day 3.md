# Day Three ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2022/day/3)
- [Puzzle Input](https://adventofcode.com/2022/day/3/input)

```javascript
const lines = await importFromTextFile();
const data = [];

for (const line of lines) {

	/* splits the line into two equal halves */
	const bagOne = line.slice(0, line.length / 2).split('');
	const bagTwo = line.slice(line.length / 2).split('');

	/* identifies characters in both bags, selects the first element */
	const char = bagOne.filter(character => bagTwo.includes(character))[0];

	/* convert character to an integer. [a (1) to z (26)] and [A (27) to Z (52)] */
	data.push(char.toUpperCase() === char
		? char.charCodeAt(0) - 64 + 26
		: char.charCodeAt(0) - 96
	);
};

console.log(getSum(data));
```

## Task Two

- [Task Description](https://adventofcode.com/2022/day/3#part2)
- [Puzzle Input](https://adventofcode.com/2022/day/3/input)

```javascript
const lines = await importFromTextFile();
const data = [];

let index = 0;
while (index < lines.length) {

	/* scans every character, checks if it is found in the following two lines, selects first */
	const char = lines[index].split('').filter(char => {
		return lines[index + 1].includes(char) && lines[index + 2].includes(char)
	})[0];
	/* convert character to an integer */
	data.push(char.toUpperCase() === char
		? char.charCodeAt(0) - 64 + 26
		: char.charCodeAt(0) - 96
	);

	/* skips the lines already checked above */
	index += 3
};

console.log(getSum(data));
```
