# Day Six ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2022/day/6)
- [Puzzle Input](https://adventofcode.com/2022/day/6/input)

```javascript
const [line] = await importFromTextFile();
const word = [];
let result = 0;

for (let index = 0; index < line.length; index++) {
	word.length === 4 
		? (word.shift(),  word.push(line[index]))
		: word.push(line[index]);

	if (word.length === 4 && new Set(word).size === 4) {
		result = index + 1;
		break;
	};
};

console.log(result);
```

## Task Two

- [Task Description](https://adventofcode.com/2022/day/6#part2)
- [Puzzle Input](https://adventofcode.com/2022/day/6/input)

```javascript
const [line] = await importFromTextFile();
const word = [];
let result = 0;

for (let index = 0; index < line.length; index++) {
	word.length === 14 
		? (word.shift(),  word.push(line[index]))
		: word.push(line[index]);

	if (word.length === 14 && new Set(word).size === 14) {
		result = index + 1;
		break;
	};
};

console.log(result);
```
