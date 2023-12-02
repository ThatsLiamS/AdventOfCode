# Day Five ⭐⭐

## Task One

The ship has a giant cargo crane capable of moving crates between stacks. To ensure none of the crates get crushed or fall over, the crane operator will rearrange them in a series of carefully-planned steps. After the crates are rearranged, the desired crates will be at the top of each stack.

The Elves don't want to interrupt the crane operator during this delicate procedure, but they forgot to ask her which crate will end up where, and they want to be ready to unload them as soon as possible so they can embark.

They do, however, have a drawing of the starting stacks of crates and the rearrangement procedure (your puzzle input). For example:

```
    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
...
```

In this example, there are three stacks of crates. Stack 1 contains two crates: crate Z is on the bottom, and crate N is on top. Stack 2 contains three crates; from bottom to top, they are crates `M`, `C`, and `D`. Finally, stack 3 contains a single crate, `P`.

Then, the rearrangement procedure is given. In each step of the procedure, a quantity of crates is moved from one stack to a different stack. In the first step of the above rearrangement procedure, one crate is moved from stack 2 to stack 1, resulting in this configuration:

```
[D]        
[N] [C]    
[Z] [M] [P]
 1   2   3
```
The Elves just need to know which crate will end up on top of each stack; in this example, the top crates are `D` in stack 1, `C` in stack 2, and `P` in stack 3, so you should combine these together and give the Elves the message `DCP`.

After the rearrangement procedure completes, what crate ends up on top of each stack?

```javascript
const lines = await importFromTextFile();
const stacks = Array.from({ length: 9 }, () => new Stack());

/* Stack # Push () to set up Starting Layout */

for(let index = 0; index < lines.length; index++) {
	const [_, amount, origin, destination] = lines[index].match(/(\d+)\D+(\d+)\D+(\d+)/);

	for (let index = 0; index < amount; index++) {
		const item = stacks[origin - 1].pop();
		stacks[destination - 1].push(item);
	};
};

console.log(stacks.map(s => s.pop()).join(''));
```

## Task Two

As you watch the crane operator expertly rearrange the crates, you notice the process isn't following your prediction.

Some mud was covering the writing on the side of the crane, and you quickly wipe it away. The crane isn't a CrateMover 9000 - it's a CrateMover 9001.

The CrateMover 9001 is notable for many new and exciting features: air conditioning, leather seats, an extra cup holder, and the ability to pick up and move multiple crates at once.

Again considering the example above, the crates begin in the same configuration:

```
    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 
```

Moving a single crate from stack 2 to stack 1 behaves the same as before:

```
[D]        
[N] [C]    
[Z] [M] [P]
 1   2   3 
```
However, the action of moving three crates from stack 1 to stack 3 means that those three moved crates stay in the same order, resulting in this new configuration:

```
        [D]
        [N]
    [C] [Z]
    [M] [P]
 1   2   3
```

Before the rearrangement process finishes, update your simulation so that the Elves know where they should stand to be ready to unload the final supplies. After the rearrangement procedure completes, what crate ends up on top of each stack?

```javascript
const lines = await importFromTextFile();
const stacks = Array.from({ length: 9 }, () => new Stack());

/* Stack # Push () to set up Starting Layout */

for(let index = 0; index < lines.length; index++) {

	const [_, amount, origin, destination] = lines[index].match(/(\d+)\D+(\d+)\D+(\d+)/);
	const array = [];

	for (let index = 0; index < amount; index++) {
		array.push(stacks[origin - 1].pop());
	};
	
	for (let item of array.reverse()) {
		stacks[destination - 1].push(item);
	};
};

console.log(stacks.map(s => s.pop()).join(''));
```
