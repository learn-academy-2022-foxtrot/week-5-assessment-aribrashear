// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("stringEncryptor", () => {
  it(`Takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.`, () => {
    const secretCodeWord1 = "Lackadaisical";
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook";
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric";
    // Expected output: "3cc3ntr1c"
    expect(stringEncryptor(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
    expect(stringEncryptor(secretCodeWord2)).toEqual("G0bbl3dyg00k");
    expect(stringEncryptor(secretCodeWord3)).toEqual("3cc3ntr1c");
  });
});

// GOOD FAIL: ReferenceError: stringEncryptor is not defined

// b) Create the function that makes the test pass.
/*
--------- FUNCTION INFORMATION:
Describe what the function will do: Function will accept a string, and return a string that's been encoded.
Function Name: stringEncryptor
Function Parameter(s): 1, string
--------- INPUT / OUTPUT:
input 1: string
output 1: altered string
--------- STEPS/METHODS:
1. I'm going to need to iterate over the string in order to use a conditional to assess each value, so I'm going to convert the string to an array using .split().
2. I'm going to use .map() on the array since I want a string of the same length, and then iterate through my created array.
3. I'm going to check each value inside of the array to see if it matches a, e, i, or o - and if it does, I'm going to update that value. Otherwise, I'll return the original value.
4. I'm going to use .join() on the array in order to return it to a string.
*/

const stringEncryptor = (str) => {
  return str
    .split("")
    .map((v) => {
      if (v === "a" || v === "A") {
        return 4;
      } else if (v === "e" || v === "E") {
        return 3;
      } else if (v === "i" || v === "I") {
        return 1;
      } else if (v === "o" || v === "O") {
        return 0;
      } else {
        return v;
      }
    })
    .join("");
};

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("findLetterInElement", () => {
  it(`takes in an array of words and a single letter and returns an array of all the words containing that particular letter.`, () => {
    const fruitArray = [
      "Mango",
      "Cherry",
      "Apricot",
      "Blueberry",
      "Peach",
      "Kiwi",
    ];

    const letterA = "a";
    // Expected output: ["Mango", "Apricot", "Peach"]
    const letterE = "e";
    // Expected output: ["Cherry", "Blueberry", "Peach"]

    expect(findLetterInElement(fruitArray, letterA)).toEqual([
      "Mango",
      "Apricot",
      "Peach",
    ]);
    expect(findLetterInElement(fruitArray, letterE)).toEqual([
      "Cherry",
      "Blueberry",
      "Peach",
    ]);
  });
});

// GOOD FAIL:  ReferenceError: findLetterInElement is not defined

// b) Create the function that makes the test pass.

/*
--------- FUNCTION INFORMATION:
Describe what the function will do: Function will take in an array AND a string, then return an array only containing elements which include a specified character.
Function Name: findLetterInElement
Function Parameter(s): 2, array and string
--------- INPUT / OUTPUT:
input 1: An array of strings
input 2: A string of a single letter
output 1: An array of strings that's been filtered

--------- STEPS/METHODS:
1. I'm going to need to iterate over the array and return an array of an altered length, so I'm going to use .filter().
2. I'm going to use a conditional statement to determine if the current element includes the string that was passed in. I'll use .includes() for this.
3. If the element contains the string, I'll return it's value. Using .filter() should automatically remove the elements that don't meet this criteria.

--- AFTER TESTING
4. After running some tests, I realized I need to add another step to this to account for case sensitivity with the input string. So, I'll use an OR operator and .toLowerCase() on both the input array element and the input string to account for this.
*/

const findLetterInElement = (arr, str) => {
  return arr.filter((v) => v.toLowerCase().includes(str.toLowerCase()));
};

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("checkFullHouse", () => {
  it(`Takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.`, () => {
    const hand1 = [5, 5, 5, 3, 3];
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4];
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4];
    // Expected output: false
    const hand4 = [7, 2, 7, 2, 7];
    // Expected output: true
    const hand5 = [5, 5, 5, 3, 3, 6];
    // Expected output: "A full house cannot be more than 5 cards."
    const hand6 = [5, 5, 5, 3];
    // Expected output: "A full house cannot be more than 5 cards."
    expect(checkFullHouse(hand1)).toEqual(true);
    expect(checkFullHouse(hand2)).toEqual(false);
    expect(checkFullHouse(hand3)).toEqual(false);
    expect(checkFullHouse(hand4)).toEqual(true);
    expect(checkFullHouse(hand5)).toEqual(
      "A full house cannot be more than 5 cards."
    );
    expect(checkFullHouse(hand6)).toEqual(
      "A full house cannot be more than 5 cards."
    );
  });
});

// GOOD FAIL:  ReferenceError: checkFullHouse is not defined

// b) Create the function that makes the test pass.

/*
--------- FUNCTION INFORMATION:
Describe what the function will do: Function will take in an array of strings, then check against its values to determine if it's a full house.
Function Name: checkFullHouse
Function Parameter(s): 1, array of strings
--------- INPUT / OUTPUT:
input 1: array of strings
output 1: boolean

--------- RESEARCH PHASE: Before I start on this, I'm going to do some research on some different methods and steps. The array method .every() will return a boolean value based on a specified test, so I think that's what I'm going to use to iterate. A full house should never be larger than 5, so we can use that in a conditional. We want to determine if we have TWO matching instances of an element, one 3 and one 2.
*/

const checkFullHouse = (arr) => {
  // Creating an empty object and an empty array to store values in.
  const obj = {};
  // I'm creating an ampty array because I want to store the result of our Object.values somewhere that I can access the last element's index.
  let arr1 = [];

  if (arr.length !== 5) {
    // A full house will always be a set of 2 and 3 matching numbers. Therefore, If an array has a length that IS NOT 5, it's not a full house.
    return "A full house cannot be more than 5 cards.";
  } else {
    // I'm using for.Each to iterate instead of a for loop.
    arr.forEach((v) => {
      // On the first instance of this loop seeing a number, it will add that to our object with a 1 as the value in the key:value pair. As it progresses, if it sees that number again, it'll update the value +1. Once it finds a new number, it'll reset to 1. This is how we'll keep track of repeating numbers in our array. At the last iteration, a full house pair would look something like this: { '3': 2, '5': 3 }. That means it found '3' twice, and '5' three times.
      obj[v] = obj[v] ? obj[v] + 1 : 1;
      // Once we have our object, I want to extract its' values and place them in an array so that I can access the last index. This will let me see the result of our previous loop, which will look something like this: [2, 3]. Ultimately, I want it in an array because I don't care about the keys (what number it found), I just care about how many times the same number was found.
      arr1.push(Object.values(obj));
    });
    // Now we can access the 4th index (this is static, but a full house should only ever have 0-4 indexes) to check if it includes BOTH a 2 AND a 3. if it does, this will return true. Otherwise, it will return false.
    return arr1[4].includes(2 && 3);
  }
};

////**------ Just in case that's hard to see with all the pseudocode, here's the full function without it:
// const checkFullHouse = (arr) => {
//   const obj = {};
//   let arr1 = [];

//   if (arr.length !== 5) {
//     return "A full house cannot be more than 5 cards.";
//   } else {
//     arr.forEach((v) => {
//       obj[v] = obj[v] ? obj[v] + 1 : 1;
//       arr1.push(Object.values(obj));
//     });
//     return arr1[4].includes(2 && 3);
//   }
// };

// ************--------------------- I've implemented the pseudocode here a little differently, because I wasn't able to clearly plan out the whole function. Instead, I ended up basically console.logging at each step of the function to see what it was outputting, then adjusting my code accordingly and updating my process within the function. I had a lot of help from my classmates, and initially had this running with several loops that would go through object values, then reduce it down. However, this code is the final result that I'm VERY happy with after toiling over it for a while. (:

/////********** This was my very first attempt at the function. I scrapped it pretty early because I wanted to see if there was a way to accomplish this with a different method.
// const checkFullHouse = (arr) => {
//   let temp = 0;
//   return console.log(
//     arr.map((v, i, arr) => {
//       let ind = i + 1;
//       let ind2 = i - 1;
//       if (v === arr[ind]) {
//         return v;
//       }
//     })
//   );
// };
