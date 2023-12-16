# Day Fifteen ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2023/day/15)
- [Puzzle Input](https://adventofcode.com/2023/day/15/input)

```javascript
const input = await importFromTextFile();
const line = input[0].split(',');

/* maps a string into an integer through very specific rules */
const hash = (value) => {
	return value.reduce((accumulator, char) => 
		/* increases the current value by the ascii value */
		/* multiply the current value by 17 */
		/* remainder of dividing the current value by 256 */
		((accumulator + char.charCodeAt(0)) * 17) % 256
	, 0);
};

/* iterate over each element and apply the hash */
const verificationNumbers = line.map( step => hash( step.split('') ) );
console.log(getSum(verificationNumbers));
```

## Task Two

- [Task Description](https://adventofcode.com/2023/day/15#part2)
- [Puzzle Input](https://adventofcode.com/2023/day/15/input)

```javascript
const input = await importFromTextFile();
const line = input[0].split(',');

/* maps a string into an integer through very specific rules */
const hash = (value) => {
	return value.reduce((accumulator, char) => 
		/* increases the current value by the ascii value */
		/* multiply the current value by 17 */
		/* remainder of dividing the current value by 256 */
		((accumulator + char.charCodeAt(0)) * 17) % 256
	, 0);
};

/* generate the array of memory locations */
const box = Array.from({ length: 256 }, () => []);

for (const step of line) {
	
	/* if the step ends with a '-' */
	if (step.endsWith('-')) {
		const name = step.slice(0, -1);
		const hashedLocation = hash(name.split(''));

		/* ensures the location doesn't contain this string */
		box[hashedLocation] = box[hashedLocation].filter(([n]) => n !== name);

	/* if the step ends with '=?' */
	} else if (step[step.length - 2] == '=') {
		const name = step.slice(0, -2);
		const hashedLocation = hash(name.split(''));
		const len_ = Number(step[step.length - 1]);

		/* if the element is already stored */
		if (box[hashedLocation].some((val) => val[0] === name)) {
			/* replace the old element with the new value */
			box[hashedLocation] = box[hashedLocation].map((val) => [val[0], (name === val[0]) ? len_ : val[1]]);
		} else {
			/* add the new element into the memory location */
			box[hashedLocation].push([name, len_]);
		};
	};
};

let sum = 0;
/* iterate over every element in the boxes */
for (let i = 0; i < box.length; i++) {
	for (let j = 0; j < box[i].length; j++) {
		/* sum of Memory Location * Element Id * Element Value */
		sum += (i + 1) * (j + 1) * box[i][j][1];
	};
};
console.log(sum);
```
