/**
 * Generates all possible permutations of a given string.
 *
 * @param input - The input string to permute.
 * @returns An array of strings representing all possible permutations of the input string.
 */
function permute(input: string): string[] {
    const result: string[] = [];

    if (input.length === 1) {
        return [input];
    }

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        const remainingChars = input.slice(0, i) + input.slice(i + 1);
        const remainingPermutations = permute(remainingChars);
        for (const perm of remainingPermutations) {
            result.push(char + perm);
        }
    }

    return result;
}

/**
 * Finds the integer that appears an odd number of times in the given array.
 *
 * @param arr - The array of numbers to search.
 * @returns The integer that appears an odd number of times.
 * @throws {Error} If no integer appears an odd number of times.
 */
function findOdd(arr: number[]): number {
    const countMap: { [key: number]: number } = {};

    for (const num of arr) {
        countMap[num] = (countMap[num] || 0) + 1;
    }

    for (const num in countMap) {
        if (countMap[num] % 2 !== 0) {
            return parseInt(num);
        }
    }

    throw new Error("No integer appears an odd number of times");
}

/**
 * Counts the number of valid smiley faces in the given array.
 * 
 * @param arr - The array of strings containing smiley faces.
 * @returns The number of valid smiley faces.
 */
function countSmileys(arr: string[]): number {
    const smileyRegex = /^[:;][-~]?[)D]$/;
    return arr.filter(face => smileyRegex.test(face)).length;
}

export async function Q1(test : string): Promise<string[]> {
    const textInput = test;
    const uniqueChars = Array.from(new Set(textInput.split(''))).join('');
    const permutations = permute(uniqueChars);
    return permutations;
}

export async function Q2(arr: number[]) {
    const arrayInput = arr;
    const countOdd = findOdd(arrayInput);
    return countOdd;
}

export async function Q3(test : string[]) {
    const arrayInput = test;
    const countSmile = countSmileys(arrayInput);
    return countSmile;
}