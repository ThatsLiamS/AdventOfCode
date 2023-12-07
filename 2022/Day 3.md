# Day Three ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2022/day/3)
- [Puzzle Input](https://adventofcode.com/2022/day/3/input)

```javascript
const lines = await importFromTextFile();
const data = [];

for (const line of lines) {
	
	const bagOne = line.slice(0, line.length / 2);
	const bagTwo = line.slice(line.length / 2);

	for (const char of bagOne) {
		if (bagTwo.includes(char)){
			data.push(char.toUpperCase() === char
				? char.charCodeAt(0) - 64 + 26
				: char.charCodeAt(0) - 96
			);
			break;
		};
	};
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

	const char = Array.from(lines[index]).find(char =>
		lines[index + 1].includes(char) && lines[index + 2].includes(char)
	);
	data.push(char.toUpperCase() === char
		? char.charCodeAt(0) - 64 + 26
		: char.charCodeAt(0) - 96
	);
	index += 3
};

console.log(getSum(data));
```
