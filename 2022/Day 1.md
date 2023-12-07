# Day One ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2022/day/1)
- [Puzzle Input](https://adventofcode.com/2022/day/1/input)

```javascript
const lines = await importFromTextFile();
const data = [0]; let elfNumber = 0;

lines.forEach((line) => {
	if (line === "") {
		elfNumber++;
		data.push(0);
		return;
	};
  
	data[elfNumber] += Number(line);
});
console.log ( mergeSort(data)[data.length - 1] );
```

## Task Two

- [Task Description](https://adventofcode.com/2022/day/1#part2)
- [Puzzle Input](https://adventofcode.com/2022/day/1/input)

```javascript
const lines = await importFromTextFile();
let data = [0]; let elfNumber = 0;

lines.forEach((line) => {
	if (line === "") {
		elfNumber++;
		data.push(0);
		return;
	};
  
	data[elfNumber] += Number(line);
});

data = mergeSort(data);
console.log ( data[data.length - 1] + data[data.length - 2] + data[data.length - 3] );
```
