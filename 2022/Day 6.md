# Day Six ⭐⭐

## Task One

To be able to communicate with the Elves, the device needs to lock on to their signal. The signal is a series of seemingly-random characters that the device receives one at a time.

To fix the communication system, you need to add a subroutine to the device that detects a start-of-packet marker in the datastream. In the protocol being used by the Elves, the start of a packet is indicated by a sequence of four characters that are all different.

The device will send your subroutine a datastream buffer (your puzzle input); your subroutine needs to identify the first position where the four most recently received characters were all different. Specifically, it needs to report the number of characters from the beginning of the buffer to the end of the first such four-character marker.

For example, suppose you receive the following datastream buffer:

```
mjqjpqmgbljsphdztnvjfqwrcgsmlb
```

After the first three characters (`mjq`) have been received, there haven't been enough characters received yet to find the marker. The first time a marker could occur is after the fourth character is received, making the most recent four characters `mjqj`. Because `j` is repeated, this isn't a marker.

The first time a marker appears is after the seventh character arrives. Once it does, the last four characters received are `jpqm`, which are all different. In this case, your subroutine should report the value `7`, because the first start-of-packet marker is complete after `7` characters have been processed.

How many characters need to be processed before the first start-of-packet marker is detected?

```javascript
const [line] = await importFromTextFile();
const word = [];
let result = 0;

for (let index = 0; index < line.length; index++) {
	word.length === 4 
		? (word.shift(),  word.push(line[index]))
		: word.push(line[index]);

	if (word.length === 4 && new Set(word).size === 4) {
		result = index + 1;
		break;
	};
};

console.log(result);
```

## Task Two

Your device's communication system is correctly detecting packets, but still isn't working. It looks like it also needs to look for messages.

A start-of-message marker is just like a start-of-packet marker, except it consists of 14 distinct characters rather than 4.

Here are the first positions of start-of-message markers for all of the above examples:

- `mjqjpqmgbljsphdztnvjfqwrcgsmlb`: first marker after character `19`
- `bvwbjplbgvbhsrlpgdmjqwftvncz`: first marker after character `23`
- `nppdvjthqldpwncqszvftbrmjlhg`: first marker after character `23`
- `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`: first marker after character `29`
- `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`: first marker after character `26`

How many characters need to be processed before the first start-of-message marker is detected?

```javascript
const [line] = await importFromTextFile();
const word = [];
let result = 0;

for (let index = 0; index < line.length; index++) {
	word.length === 14 
		? (word.shift(),  word.push(line[index]))
		: word.push(line[index]);

	if (word.length === 14 && new Set(word).size === 14) {
		result = index + 1;
		break;
	};
};

console.log(result);
```
