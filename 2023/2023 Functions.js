/*
Welcome to the repository! This file contains a collection of custom functions
utilised during the Advent of Code challenges for the year 2023.

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

/* Lowest Common Multiple && Highest Common Factor */
const highestCommonFactor = (numberOne, numberTwo) => {
	while (numberTwo !== 0) {
		const temp = numberTwo;
		numberTwo = numberOne % numberTwo;
		numberOne = temp;
	}
	return numberOne;
};
const lowestCommonMultiple = (numberOne, numberTwo) => {
	return (numberOne * numberTwo) / (highestCommonFactor(numberOne, numberTwo));
};

/* Get the Sum or Product of all Array Elements */
const getSum = (array) => {
	return array.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue), 0);
};
const getProduct = (array) => {
	return array.reduce((accumulator, currentValue) => Number(accumulator) * Number(currentValue), 1);
};

module.exports = {
	importFromTextFile,

	highestCommonFactor,
	lowestCommonMultiple,

	getSum,
	getProduct,
};
