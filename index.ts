//! My Try
// * New try using ChatGPT
//& New things learn

//! Even Number
//& Learn to use filter by own
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
// let result:number[] = numbers.filter((val:number)=> val % 2 == 0)
// console.log(result);

//! sum of array digits
// const calculateSum = (nums: Array<number>): number =>  {
//     if (nums.length == 0) {
//         return 0
//     }
//     else {
//         let count: number = 0
//         nums.map((val: number)=>{
//             count += val 
//         })
//         return count
//     }    
// }
// let result: number = calculateSum([])
// console.log(result);

//* sum of array digits
//& use (reduce) to compress the syntex and what the importence of the (reduce)
// const calculateSum = (nums: Array<number>): number => {
//     return nums.reduce((sum:number, val:number)=> sum+= val, 0)
// }
// console.log(calculateSum([1,2,3,4,5,8]));

//! find Longest String
// const findLongestString = (array: Array<string>):string => {
//     let max: string = "";
//     array.map((val:string)=>{
//         if (val.length > max.length){
//             max = val
//         }
//     })
//     return max
// } 
// console.log(findLongestString(["apple", "banana", "cherry", "date"]));

//* find Longest String
// const findLongestString = (array: Array<string>):string => {
//     return array.reduce((long: string, curr: string)=> long.length < curr.length ? curr : long, "")
// }
// console.log(findLongestString(["apple", "banana", "cherry", "date"]));

//! count Character Occurrences 
//& why we use (ForEach) instead of map
//& also use how to define type of a object
// const countCharacterOccurrences = (val: string): {[key:string]:number}=> {
//     let occurrences: {[key: string]:number} = {};
//     if (val.length == 0) {
//         return {}
//     }
//     val.split('').forEach((char:string) => {
//         if (char != " ") {
            
//         if (char in occurrences) {
//         occurrences[char]++;
//         }
//         else{
//             occurrences[char] = 1
//         }
//     }
//     })
//     return occurrences
    
// }
// console.log(countCharacterOccurrences("Hello World"));

//! reverse Words In Sentence
//& Learn why we use (trim) and what the importence in the real world
// const reverseWordsInSentence = (str: string):string => {
//     let array: Array<string>;
//     array = str.trim().split(" ").reverse()
//     return array.join(" ")
// }
// console.log(reverseWordsInSentence("Hello world this is TypeScript"));

//! find First Non Repeated Character 