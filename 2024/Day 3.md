# Day Three ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2024/day/3)
- [Puzzle Input](https://adventofcode.com/2024/day/3/input)

```javascript
const lines = await importFromTextFile();
const line = lines.join();

const matches = line.match(/mul\((\d+),(\d+)\)/g)?.map(match => {
	const [, num1, num2] = match.match(/mul\((\d+),(\d+)\)/);
	return [Number(num1), Number(num2)];
}) || [];

const sum = matches.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue[0] * currentValue[1]), 0);
console.log(sum)
```

## Task Two

- [Task Description](https://adventofcode.com/2024/day/3#part2)
- [Puzzle Input](https://adventofcode.com/2024/day/3/input)

```javascript
const lines = await importFromTextFile();
const line = lines.join();

let enabled = true;
let sum = 0;
for (let i = 0; i < line.length; i++) {
	if (line.slice(i).startsWith("do()")) enabled = true;
	else if (line.slice(i).startsWith("don't()")) enabled = false;

	const matches = line.slice(i).match(/^mul\((\d+),(\d+)\)/);
	if (matches && enabled) {
		sum += (parseInt(matches[1], 10) * parseInt(matches[2], 10));
	}
}
console.log(sum)
```