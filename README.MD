# TypeScript Algorithms

This repository contains a collection of TypeScript algorithms that demonstrate key programming concepts like filtering, array manipulation, string handling, and more. Each section provides a description of the problem and solution. You can use this as a reference or practice with these exercises.

## Table of Contents

- [TypeScript Algorithms](#typescript-algorithms)
  - [Table of Contents](#table-of-contents)
    - [Even Number](#even-number)
    - [Sum of Array Digits](#sum-of-array-digits)
    - [Find Longest String](#find-longest-string)
    - [Count Character Occurrences](#count-character-occurrences)
    - [Reverse Words in Sentence](#reverse-words-in-sentence)
    - [Find First Non-Repeated Character](#find-first-non-repeated-character)
    - [Is Palindrome](#is-palindrome)
    - [Length of Longest Substring](#length-of-longest-substring)
    - [Find Missing Number](#find-missing-number)
    - [Group Anagrams](#group-anagrams)
  - [How to Use](#how-to-use)
  - [License](#license)

---

### Even Number
This section filters even numbers from a given array.

```typescript
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
let result: number[] = numbers.filter((val: number) => val % 2 == 0);
console.log(result);
```

### Sum of Array Digits
This section demonstrates how to calculate the sum of array digits using `reduce`.

```typescript
const calculateSum = (nums: Array<number>): number => {
    return nums.reduce((sum: number, val: number) => sum += val, 0);
};
console.log(calculateSum([1, 2, 3, 4, 5, 8]));
```

### Find Longest String
This algorithm finds the longest string in an array of strings.

```typescript
const findLongestString = (array: Array<string>): string => {
    return array.reduce((long: string, curr: string) => long.length < curr.length ? curr : long, "");
};
console.log(findLongestString(["apple", "banana", "cherry", "date"]));
```

### Count Character Occurrences
This algorithm counts the occurrences of each character in a string using `forEach`.

```typescript
const countCharacterOccurrences = (val: string): { [key: string]: number } => {
    let occurrences: { [key: string]: number } = {};
    val.split('').forEach((char: string) => {
        if (char !== " ") {
            occurrences[char] = (occurrences[char] || 0) + 1;
        }
    });
    return occurrences;
};
console.log(countCharacterOccurrences("Hello World"));
```

### Reverse Words in Sentence
This function reverses the words in a sentence, trimming any extra spaces.

```typescript
const reverseWordsInSentence = (str: string): string => {
    let array: Array<string> = str.trim().split(" ").reverse();
    return array.join(" ");
};
console.log(reverseWordsInSentence("Hello world this is TypeScript"));
```

### Find First Non-Repeated Character
This function finds the first non-repeated character in a string.

```typescript
const findFirstNonRepeatedCharacter = (str: string): string | null => {
    let occurs: { [key: string]: number } = {};
    let stringArr: Array<string> = str.trim().split("");
    stringArr.forEach((char: string) => {
        if (char !== " ") {
            occurs[char] = (occurs[char] || 0) + 1;
        }
    });
    for (const char of stringArr) {
        if (occurs[char] === 1) {
            return char;
        }
    }
    return null;
};
console.log(findFirstNonRepeatedCharacter("wiss"));
```

### Is Palindrome
This function checks if a string is a palindrome, ignoring spaces and case.

```typescript
const isPalindrome = (str: string): boolean => {
    let normalStr: string = str.toLowerCase().trim().split("").join("").replace(/\s+/g, "");
    let reverseStr: string = normalStr.split("").reverse().join("");
    return normalStr === reverseStr;
};
console.log(isPalindrome("A man a plan a canal Panama"));
```

### Length of Longest Substring
This function finds the length of the longest substring without repeating characters using a sliding window approach.

```typescript
const lengthOfLongestSubstring = (str: string): number => {
    let window: Set<string> = new Set();
    let left: number = 0;
    let right: number = 0;
    let maxLength: number = 0;
    for (right = 0; right < str.length; right++) {
        while (window.has(str[right])) {
            window.delete(str[left]);
            left++;
        }
        window.add(str[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};
console.log(lengthOfLongestSubstring("abcabcbb"));
```

### Find Missing Number
This function finds the missing number in a sequence of integers using the sum formula.

```typescript
const findMissingNumber = (arr: Array<number>): number => {
    let sum: number = arr.reduce((sum: number, val: number): number => sum + val, 0);
    let count: number = 0;
    for (let i = 0; i <= arr[arr.length - 1]; i++) {
        count += i;
    }
    return count - sum;
};
console.log(findMissingNumber([1, 2, 4, 6, 3, 7, 8]));
console.log(findMissingNumber([1, 2, 3, 5]));
```

### Group Anagrams
This function groups anagrams from an array of strings.

```typescript
const groupAnagrams = (arr: Array<string>): Array<string> => {
    let anagram: { [key: string]: string[] } = {};
    arr.forEach((str: string) => {
        let sortStr: string = str.split("").sort().join("");
        if (anagram[sortStr]) {
            anagram[sortStr].push(str);
        } else {
            anagram[sortStr] = [str];
        }
    });
    return Object.values(anagram);
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
```

## How to Use

1. Clone this repository.
2. Install TypeScript if you haven't already:
   ```bash
   npm install -g typescript
   ```
3. Compile the TypeScript files:
   ```bash
   tsc filename.ts
   ```
4. Run the compiled JavaScript:
   ```bash
   npx tsx index.ts
   ```

## License

This repository is licensed under the MIT License. See `LICENSE` for more information.
```

This `README.md` provides a clean and structured description of your code, along with usage instructions. You can update the sections and examples as needed.