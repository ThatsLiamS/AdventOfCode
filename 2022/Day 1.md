# Day One ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2022/day/1)
- [Puzzle Input](https://adventofcode.com/2022/day/1/input)

```javascript
const input = await importFromTextFile();
/* joins every line together in order to split by every blank line (representing a new elf) */
const elves = input.join('\n').split('\n\n')
	.map(elf => {
		/* splits each number and adds them together */
		return getSum(elf.split('\n').map(Number))
	});
/* sorts the numbers to identify the largest value */
console.log( mergeSort(elves)[elves.length - 1] );
```

## Task Two

- [Task Description](https://adventofcode.com/2022/day/1#part2)
- [Puzzle Input](https://adventofcode.com/2022/day/1/input)

```javascript
const input = await importFromTextFile();
/* joins every line together in order to split by every blank line (representing a new elf) */
const elves = input.join('\n').split('\n\n')
	.map(elf => {
		/* splits each number and adds them together */
		return getSum(elf.split('\n').map(Number))
	});

/* sorts the numbers, separates the last 3 elements, and adds them together */
console.log (getSum(
	mergeSort(elves).slice(elves.length - 3)
));
```
