# Day One ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2023/day/1)
- [Puzzle Input](https://adventofcode.com/2023/day/1/input)

```javascript
const inputData = await importFromTextFile();
const data = [];

for (let index = 0; index < inputData.length; index++) {
	const numbers = [];
	
	for (let j = 0; j < inputData[index].length; j++) {
		if (Number(inputData[index][j]) >= 0 && Number(inputData[index][j]) <= 9) {
			numbers.push(inputData[index][j]);
		};
	};

	data.push (Number ( numbers[0] + numbers[numbers.length - 1] ) );
};

console.log(getSum(data));
```

## Task Two

- [Task Description](https://adventofcode.com/2023/day/1#part2)
- [Puzzle Input](https://adventofcode.com/2023/day/1/input)

```python
def solve(line):
	number_mapping = { "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9, }
	ones, tens = -1, -1

	for i in range(len(line)):
		c = line[i]

		if ('0' <= c <= '9'):
			ones = int(c)
		else:
			for word, value in number_mapping.items():
				if (i + len(word) <= len(line)) and (line[i:i + len(word)] == word):
					ones = value
					break

		if ones != -1 and tens == -1:
			tens = ones * 10
	return tens + ones

with open('input.txt', 'r') as file:
	lines = file.readlines()
print( sum(solve(line) for line in lines) )
```
