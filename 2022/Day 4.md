# Day Four ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2022/day/4)
- [Puzzle Input](https://adventofcode.com/2022/day/4/input)

```javascript
const input = await importFromTextFile();
/* splits the input "1-2,8-9" into ["1-2", "8-9"] */
const lines = input.map(value => value.split(','));

/* determines how many ranges completely overlaps */
const completeOverlaps = lines.filter(line => {
	/* splits range "1-2" into [1, 2] */
	const [lowerOne, upperOne] = line[0].split('-').map(Number);
	const [lowerTwo, upperTwo] = line[1].split('-').map(Number);

	/* checks if a range completely fits within the other */
	if ((lowerOne >= lowerTwo && upperOne <= upperTwo) || (lowerTwo >= lowerOne && upperTwo <= upperOne)) {
		return true;
	};
});

console.log(completeOverlaps.length);
```

## Task Two

- [Task Description](https://adventofcode.com/2022/day/4#part2)
- [Puzzle Input](https://adventofcode.com/2022/day/4/input)

```javascript
const input = await importFromTextFile();
/* splits the input "1-2,8-9" into ["1-2", "8-9"] */
const lines = input.map(value => value.split(','));

/* determines how many ranges partially or completely overlaps */
const partialOverlaps = lines.filter(line => {
	/* splits range "1-2" into [1, 2] */
	const [lowerOne, upperOne] = line[0].split('-').map(Number);
	const [lowerTwo, upperTwo] = line[1].split('-').map(Number);

	/* loops through all numbers within range one */
	for (let num = lowerOne; num <= upperOne; num++) {
		/* checks if the number fits within range two */
		if (lowerTwo <= num && num <= upperTwo) {
			return true;
		};
	};
});

console.log(partialOverlaps.length);
```
