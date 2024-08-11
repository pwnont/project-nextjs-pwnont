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

function findOdd(arr: number[]): number {
    const countMap: { [key: number]: number } = {};

    // Count occurrences of each integer
    for (const num of arr) {
        countMap[num] = (countMap[num] || 0) + 1;
    }

    // Find the integer with an odd count
    for (const num in countMap) {
        if (countMap[num] % 2 !== 0) {
            return parseInt(num);
        }
    }

    throw new Error("No integer appears an odd number of times");
}

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