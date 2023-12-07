# Day Six ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2023/day/6)
- [Puzzle Input](https://adventofcode.com/2023/day/6/input)

```javascript
const lines = await importFromTextFile();
const [times, distances] = lines.map(value =>
	value.split(':')[1].split(' ').filter(Boolean).map(Number)
);

const methods = times.map((value, index) => {

	let possibleMethods = 0;
	for (let buttonPressed = 0; buttonPressed < value; buttonPressed++) {
		if ((value - buttonPressed) * buttonPressed > distances[index]) possibleMethods++
	};
	return possibleMethods;
});

console.log( methods.reduce((acc, method) => acc * method, 1) );
```

## Task Two

- [Task Description](https://adventofcode.com/2023/day/6#part2)
- [Puzzle Input](https://adventofcode.com/2023/day/6/input)

```javascript
const lines = await importFromTextFile();
const [time, distance] = lines.map(value =>
	Number(value.split(':')[1].split(' ').join(''))
);

let possibleMethods = 0;
for (let buttonPressed = 0; buttonPressed < time; buttonPressed++) {
	if ((time - buttonPressed) * buttonPressed > distance) possibleMethods++
};

console.log(possibleMethods);
```
