# Day Four ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2022/day/4)
- [Puzzle Input](https://adventofcode.com/2022/day/4/input)

```javascript
const lines = await importFromTextFile();
let total = 0;

for (let index = 0; index < lines.length; index++) {
	const [lowerOne, upperOne] = lines[index][0].split('-').map(num => Number(num));
	const [lowerTwo, upperTwo] = lines[index][1].split('-').map(num => Number(num));

	if ((lowerOne >= lowerTwo && upperOne <= upperTwo) || (lowerTwo >= lowerOne && upperTwo <= upperOne)) {
		total++;
		continue;
	};
};

console.log(total);
```

## Task Two

- [Task Description](https://adventofcode.com/2022/day/4#part2)
- [Puzzle Input](https://adventofcode.com/2022/day/4/input)

```javascript
const lines = await importFromTextFile();
let total = 0;

for (let index = 0; index < lines.length; index++) {
	const [lowerOne, upperOne] = lines[index][0].split('-').map(num => Number(num));
	const [lowerTwo, upperTwo] = lines[index][1].split('-').map(num => Number(num));

	for (let num = lowerOne; num <= upperOne; num++) {
		if (lowerTwo <= num && num <= upperTwo) {
			total++;
			break;
		};
	};
};

console.log(total);
```
