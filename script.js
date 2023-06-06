// 1. Create a function that will be able to convert figures from Fahrenheit to Celcius.

function FahrenheitToCelcius(Fahrenheit) {
    let Celcius = (Fahrenheit - 32) * 5/9;
    return Celcius;

    console.log(FahrenheitToCelcius(68)); // output: 20
}


// 2. Create a function that will calculate the avverage numbers in an array.

function calculateAverage(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sun += array[i];
    }
    return sum / array.length;

    // To use this function, simply pass in an array of numbers as an argument:

    const numbers = [4, 2, 7, 8, 5, 9];
    const average = calculateAverage(numbers);
    console.log(average); // Output: 5.83

    /* This function works by first initializing the `sum` variable to 0, then looping through
    each element in the `array` and adding it to `sum`. Finally, it divides `sum` by the length
    of the `array` to get the average.*/
}


// 3. Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true;
    }
    else{
        return false;
    }
    
    //This function takes in three parameters: n (the number to check), x (the first divisor to check), and y (the second divisor to check).
    // It first checks if n is divisible by both x and y using a modulo operator(%). if both conditions are true, it returns true (meaning that n is divisible by both x and y).
    // If at least one of the conditions is false, it returns false (meaning that n is not divisible by both x and y).

    // To use this function, simply call it with the three argument:

    console.log(isDivisible(10, 2, 5)); // output: true
    console.log(isDivisible(10, 3, 5)); // output: false

    // This would output true for the first example because 10 is divisible by both 2 and 5, but it would output false for the second example-
    // because 10 is not divisible by both 3 and 5.
}

// 4. crate a function that will output the first 100 prime numbers.

function getFirst100Primes() {
    const prime = [];
    let num = 2;

    while (getFirst100Primes.length < 100) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(num);
        }

        num++;
    }

    return primes;

    // Call the function to get the first 100 primes const first100Primes = getFirst100Primes();
    console.log(getFirst100Primes);
}

// 5. Create a function that will return a boolean specifying if a number is a prime number.

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;

    /* This function takes a number as its argument and returns `true` if the number is prime, anf `false` otherwise.
    the approach used here is to check all integers fro 2 to the square root of the number, as any factor larger
    than the square root would already have been accounted for.*/
}

// 6. Create a function that receives an array of numbers of divers numbers and returns an arrays containing positive numbers.

function getPositiveNumbers(numbers) {
    const positiveNumbers = [];
    
    for (let i = 0; i , numbers.length; i++) {
        if (numbers[i] > 0) {
            positiveNumbers.push(numbers[i]);
        }
    }

    return positiveNumbers;

    /* This function takes an array of numbers as its argument and creates an empty array `positiveNumbers` to store the positive numbers.
    It then loops throug each elements of the `numbers` array and check if it is greater than 0. If it is, then it is pushed to the `positiveNumbers` array.
    Finally, the function returns `positiveNumbers` containing only the positive numbers.*/
}

/* 7. Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for multiple of 5
prints "Buzz". For numbers which are both multiple of both 3 and 5 print "FizzBuzz".*/

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        //check if i is a multiple of both 3 and 5
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        //check if i is only a multiple of 3
        console.log("Fizz");
    } else if (i % 5 === 0) {
        //check if i is only a multiple of 5
        console.log("Buzz");
    } else {
        // i is not a multiple of 3 or 5
        console.log(i);
    }
}

/* This solution uses a `for` loop to iterate through the numbers 1 to 100. Using the modulo operator (`%`), it checks whether each
number (`i`) is a multiple of 3 and/or 5, and prints either "Fizz," "Buzz," "FizzBuzz," or the orriginal number accordingly.*/

/* The marketing team is spending way too much time typing in hashtags. Let's create a hashtag generator for them,
our hashtag generator will meet the following criteria;
(i). It must start with a hash symbol, #
(ii). Ignore all space input.
(iii). All words must have their first letter capitalized.
(iv). If the final result is going to be longer than 140 characters, it should return false.
(v). If the input or result is an empty string, it should return false.*/

function generateHashtag(str) {
    // If the input string is empty or has only spaces, return false
    if (!str.trim()) {
        return false;
    }

    // Split the input strings into words, capitalize the first letter of each word, and join with no spaces.
    const words = str.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");

    // Add the hash symbol to the begining of the string
    const result = '#' + words;

    // If the result is longer than 140 characters, return false
    if (result.length > 140) {
        return false;
    }

    return result;
}
/* The `generateHashtag` function takes a string parameter, `str`, which represents the input for the hashtag generator.
it first checks if the input string is empty or has only space using the `trim()` method. if the input string is empty or
has only spaces, the function return false.

Then, the function splits the input string into words using the `split()` method. it maps over each words and uses the
`charAt()` and `toUpperCase()` method to capitalize the first letter of each word. it then joins the capitalized words with no spaces.

After that, the function adds the hash symbol to the beginning of the string using the `+` operator. If the final result is longer than
140 characters, the function returns false. Otherwise, it return the generated hashtag.

You can call this function with string argument to generate a hashtag, and it will return the hashtag or false if the input or result is invalid.

Here is an example usage:*/

generateHashtag("hello eord"); // returns "#HelloWord"
generateHashtag(" ") // returns false
generateHashtag("a".repeat(141)); // returns false
generateHashtag("test hashtag generator"); // returns "#TestHashtagGenerator"