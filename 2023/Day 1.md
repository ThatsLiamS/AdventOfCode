# Day One ⭐⭐

## Task One

You try to ask why they can't just use a weather machine ("not powerful enough") and where they're even sending you ("the sky") and why your map looks mostly blank ("you sure ask a lot of questions") and hang on did you just say the sky ("of course, where do you think snow comes from") when you realize that the Elves are already loading you into a trebuchet ("please hold still, we need to strap you in").

As they're making the final adjustments, they discover that their calibration document (your puzzle input) has been amended by a very young Elf who was apparently just excited to show off her art skills. Consequently, the Elves are having trouble reading the values on the document.

The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

For example:

```
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
```

In this example, the calibration values of these four lines are `12`, `38`, `15`, and `77`. Adding these together produces `142`.

Consider your entire calibration document. What is the sum of all of the calibration values?

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

Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, and `nine` also count as valid "digits".

Equipped with this new information, you now need to find the real first and last digit on each line. For example:
```
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
```

In this example, the calibration values are `29`, `83`, `13`, `24`, `42`, `14`, and `76`. Adding these together produces `281`.

What is the sum of all of the calibration values?

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
