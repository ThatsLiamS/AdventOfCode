# Day Seven ⭐⭐

## Task One

- [Task Description](https://adventofcode.com/2023/day/7)
- [Puzzle Input](https://adventofcode.com/2023/day/7/input)

```javascript
const lines = await importFromTextFile();

const calculateStrength = (hand) => {
	/* replace face cards with numbers */
	hand = hand.split('').map((card) => {
		if (card == 'T') return 10;
		if (card == 'J') return 11;
		if (card == 'Q') return 12;
		if (card == 'K') return 13;
		if (card == 'A') return 14;
		return Number(card);
	});

	/* determine how many 'cards of a kind' there are */
	const counter = {};
	for (const card of hand) counter[card] = (counter[card] || 0) + 1;
	const sortedValues = Object.values(counter).sort((a, b) => a - b);

	/* determines the card's rank based on 'counter' */
	if (sortedValues.join() === '5') return [7, hand];
	else if (sortedValues.join() === '1,4') return [6, hand];
	else if (sortedValues.join() === '2,3') return [5, hand];
	else if (sortedValues.join() === '1,1,3') return [4, hand];
	else if (sortedValues.join() === '1,2,2') return [3, hand];
	else if (sortedValues.join() === '1,1,1,2') return [2, hand];
	return [1, hand];
};

/* custom sorting algorithm */
lines.sort((a, b) => {
	/* determines the strength through 'cards of a kind' */
	const [cardA, cardB] = [calculateStrength(a[0]),  calculateStrength(b[0])];
	if (cardA[0] !== cardB[0]) return cardA[0] - cardB[0];

	/* determines card number strength (same 'cards of a kind') */
	for (let index = 0; index < 5; index++) {
		if (cardA[1][index] > cardB[1][index]) return 1;
		if (cardA[1][index] < cardB[1][index]) return -1;
	};
});

const data = [];
/* multiply the bet by the sorted array index */
lines.forEach((value, index) => data.push(Number(value[1]) * (index + 1)));
console.log( getSum(data) );
```

## Task Two

- [Task Description](https://adventofcode.com/2023/day/7#part2)
- [Puzzle Input](https://adventofcode.com/2023/day/7/input)

```javascript
const lines = await importFromTextFile();

const calculateStrength = (hand) => {
	/* replace face cards with numbers */
	hand = hand.split('').map((card) => {
		if (card == 'T') return 10;
		if (card == 'J') return 1;   /* joker is now the weakest card */
		if (card == 'Q') return 11;
		if (card == 'K') return 12;
		if (card == 'A') return 13;
		return Number(card);
	});

	/* determine how many 'cards of a kind' there are */
	const counter = {};
	for (const card of hand) counter[card] = (counter[card] || 0) + 1;

	/* allow jokers to transform into any card */
	let target = Object.keys(counter)[0];
	Object.keys(counter).forEach((k) => {
		if (k !== '1') {
			if (counter[k] > counter[target] || target === '1') target = k;
		};
	});

	if ('1' in counter && target !== '1') {
		counter[target] += counter['1'];
		delete counter['1'];
	};

	/* determines the card's rank based on 'counter' */
	const sortedValues = Object.values(counter).sort((a, b) => a - b);
	if (sortedValues.join() === '5') return [7, hand];
	else if (sortedValues.join() === '1,4') return [6, hand];
	else if (sortedValues.join() === '2,3') return [5, hand];
	else if (sortedValues.join() === '1,1,3') return [4, hand];
	else if (sortedValues.join() === '1,2,2') return [3, hand];
	else if (sortedValues.join() === '1,1,1,2') return [2, hand];
	return [1, hand];
};

/* custom sorting algorithm */
lines.sort((a, b) => {
	/* determines the strength through 'cards of a kind' */
	const [cardA, cardB] = [calculateStrength(a[0]),  calculateStrength(b[0])];
	if (cardA[0] !== cardB[0]) return cardA[0] - cardB[0];

	/* determines card number strength (same 'cards of a kind') */
	for (let index = 0; index < 5; index++) {
		if (cardA[1][index] > cardB[1][index]) return 1;
		if (cardA[1][index] < cardB[1][index]) return -1;
	};
});

const data = [];
/* multiply the bet by the sorted array index */
lines.forEach((value, index) => data.push(Number(value[1]) * (index + 1)));
console.log( getSum(data) );
```
