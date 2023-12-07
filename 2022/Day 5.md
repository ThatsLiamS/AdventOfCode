# Day Five ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2022/day/5)
- [Puzzle Input](https://adventofcode.com/2022/day/5/input)

```javascript
const lines = await importFromTextFile();
const stacks = Array.from({ length: 9 }, () => new Stack());

/* Stack # Push () to set up Starting Layout */

for(let index = 0; index < lines.length; index++) {
	const [_, amount, origin, destination] = lines[index].match(/(\d+)\D+(\d+)\D+(\d+)/);

	for (let index = 0; index < amount; index++) {
		const item = stacks[origin - 1].pop();
		stacks[destination - 1].push(item);
	};
};

console.log(stacks.map(s => s.pop()).join(''));
```

## Task Two

- [Task Description](https://adventofcode.com/2022/day/5#part2)
- [Puzzle Input](https://adventofcode.com/2022/day/5/input)

```javascript
const lines = await importFromTextFile();
const stacks = Array.from({ length: 9 }, () => new Stack());

/* Stack # Push () to set up Starting Layout */

for(let index = 0; index < lines.length; index++) {

	const [_, amount, origin, destination] = lines[index].match(/(\d+)\D+(\d+)\D+(\d+)/);
	const array = [];

	for (let index = 0; index < amount; index++) {
		array.push(stacks[origin - 1].pop());
	};
	
	for (let item of array.reverse()) {
		stacks[destination - 1].push(item);
	};
};

console.log(stacks.map(s => s.pop()).join(''));
```
