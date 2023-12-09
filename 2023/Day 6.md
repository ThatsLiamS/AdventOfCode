# Day Six ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2023/day/6)
- [Puzzle Input](https://adventofcode.com/2023/day/6/input)

```javascript
const lines = await importFromTextFile();
/* splits the line, discards row name, and extracts the numbers */
const [times, distances] = lines.map(value =>
	value.split(':')[1].split(' ').filter(Boolean).map(Number)
);

const methods = times.map((value, index) => {

	/* brute-force holding the button for every option */
	let possibleMethods = 0;
	for (let buttonPressed = 0; buttonPressed < value; buttonPressed++) {
		/* speed = timePressed and distance = speed * time */
		/* hence: distance = timePressed * (time - timePressed) */
		if (buttonPressed * (value - buttonPressed) > distances[index]) possibleMethods++
	};
	return possibleMethods;
});

console.log(getProduct(methods));
```

## Task Two

- [Task Description](https://adventofcode.com/2023/day/6#part2)
- [Puzzle Input](https://adventofcode.com/2023/day/6/input)

```javascript
const lines = await importFromTextFile();
/* splits the line, discards row name, extracts the numbers, and combine into one */
const [time, distance] = lines.map(value =>
	Number(value.split(':')[1].split(' ').join(''))
);

/* brute-force holding the button for every option */
let possibleMethods = 0;
for (let buttonPressed = 0; buttonPressed < time; buttonPressed++) {
	/* speed = timePressed and distance = speed * time */
	/* hence: distance = timePressed * (time - timePressed) */
	if ((time - buttonPressed) * buttonPressed > distance) possibleMethods++
};

console.log(possibleMethods);
```
