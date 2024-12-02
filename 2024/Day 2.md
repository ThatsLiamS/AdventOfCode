# Day Two ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2024/day/2)
- [Puzzle Input](https://adventofcode.com/2024/day/2/input)

```javascript
let lines = await importFromTextFile();
lines = lines.map(line => line.split(' ').map(Number));

const check = (arr) => {
	const isIncreasing = arr.every((val, i, array) => i === 0 || array[i] > array[i - 1]);
	const isDecreasing = arr.every((val, i, array) => i === 0 || array[i] < array[i - 1]);

	return isIncreasing || isDecreasing;
};

let total = 0;
for (const line of lines) {
	if (!check(line, line.length)) continue;

	let isValid = true;
	for (let i = 1; i < line.length; i++) {
		const dif = Math.abs(line[i - 1] - line[i]);
		if (dif > 3 || dif < 1) {
			isValid = false;
			break;
		}
	}

	if (isValid) total++;
}

console.log(total);
```

## Task Two

- [Task Description](https://adventofcode.com/2024/day/2#part2)
- [Puzzle Input](https://adventofcode.com/2024/day/2/input)

```javascript
let lines = await importFromTextFile();
lines = lines.map(line => line.split(' ').map(Number));

const check = (arr) => {
	const isIncreasing = arr.every((val, i, array) => i === 0 || array[i] > array[i - 1]);
	const isDecreasing = arr.every((val, i, array) => i === 0 || array[i] < array[i - 1]);

	return isIncreasing || isDecreasing;
};


let safe = 0;
const nonSafe = []
lines.forEach((line, index) => {
	if (!check(line)) {
		nonSafe.push(index);
		return;
	}

	let isValid = true;
	for (let i = 1; i < line.length; i++) {
		const dif = Math.abs(line[i - 1] - line[i]);
		if (dif > 3 || dif < 1) {
			nonSafe.push(index);
			isValid = false;
			break;
		}
	}

	if (isValid) safe++;
});


nonSafe.forEach(nonSafeIndex => {
	const line = lines[nonSafeIndex];
	for (let c = 0; c < line.length; c++) {
		const originalValue = line[c];
		line[c] = undefined;

		const newLine = line.filter(Boolean);

		if (check(newLine)) {
			let isValid = true;
			for (let i = 1; i < newLine.length; i++) {
				const dif = Math.abs(newLine[i - 1] - newLine[i]);
				if (dif > 3 || dif < 1) {
					isValid = false;
					break;
				}
			}

			if (isValid) {
				safe++;
				return;
			}
		}

		line[c] = originalValue;
	}
});

console.log(safe);
```