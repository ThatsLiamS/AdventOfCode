/*
Welcome to the repository! This file contains a collection of custom functions
utilised during the Advent of Code challenges for the year 2022.

Important Note:
  - Only functions used in this specific year's challenges are displayed here.
  - The purpose is to provide transparency and clarity on the tools employed
    for the solutions without overwhelming with unnecessary information.
  - The complete file is not disclosed to protect the integrity and intellectual
    property encapsulated in the broader set of functions.
*/

const fs = require('fs');
const readline = require('readline');

/* Import the Puzzle Input from a TXT File */
const importFromTextFile = async () => {
	const dataArray = [];

	try {
		const fileStream = fs.createReadStream('src/input.txt', { encoding: 'utf-8' });
		const rl = readline.createInterface({
			input: fileStream,
			crlfDelay: Infinity,
		});

		for await (const line of rl) {
			dataArray.push(line);
		};

		return dataArray;

	} catch (error) {
		console.error('Error reading the file:', error);
		throw error;
	};
};

/* Create a Stack Data Type */
class Stack {
 
	constructor() {
		this.stack = [];
	};
 
	push(item) {
		this.stack.push(item);
	}
 
	pop() {
		return this.stack.pop();
	};
 
};

/* Merge Sort */
const mergeSort = (arr) => {
	if (arr.length <= 1) {
		return arr;
	};
  
	const mid = Math.floor(arr.length / 2);
	const leftHalf = arr.slice(0, mid);
	const rightHalf = arr.slice(mid);
  
	return merge(mergeSort(leftHalf), mergeSort(rightHalf));
};
const merge = (left, right) => {
	let result = [];
	let leftIndex = 0;
	let rightIndex = 0;
  
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex]);
			leftIndex++;
		} else {
			result.push(right[rightIndex]);
			rightIndex++;
		};
	};
  
	result = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
	return result;
};

/* Get the Sum or Product of all Array Elements */
const getSum = (array) => {
	return array.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue), 0);
};

module.exports = {
	importFromTextFile,

	Stack,

	mergeSort,

	getSum,
};
