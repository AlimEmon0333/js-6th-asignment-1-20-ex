//===Chapter 1 (Alerts)===//

// Q:1. Alert these following (individually):I. First Name II. Last Name III. Email IV. Phone Number V. Password

/*alert("Enter your first name");
alert("Enter your last name");
alert("Enter your email");
alert("Enter your phone number");
alert("Enter your password");*/

// Q:2 Correct this statement: alert"You're learning JavaScript!";

/*alert("You're learning JavaScript!")*/

// Q:3 Code an alert statement displaying any message you like.

/*alert("Hello, welcome to our website!");*/

//===Chapter 2 (Variables for string)===//

//Q:1 Declare any variable in the camelCase format.

/*var myFavoriteColor = "blue";*/

//Q:2 Declare a variable of your choice without defining it. Then, in asecond statement, assign it a string of your choice.

/*var myVariable;
myVariable = "Hello, world!";*/

//Q:3 Declare the variable teamName and Alert your Team name.

/*var teamName = "front end Coders";
alert("Our team name is: " + teamName);*/

//Q:4 This statement has already been coded. var bestMan = "Charlie";Assign the variable a new string.

/*var bestMan = "Charlie"
bestMan = "David" ;*/

//===Chapter 3 (Variables for numbers)===//

// Q:1 Declare a variable “caseQty”

// var caseQty;

// Q:2 Assign to the variable caseQty, which has already been declared,the value 144.

// caseQty=144;

// Q:3 Rewrite this statement so the variable can be used in a math operation. var num = "9";

// var num = 9;

// Q:4 In one statement declare a variable. In a second statement assign it the sum of 2 numbers.

// var sum;
// sum = 5 + 3;

// Q:5 What is the value of orderTotal? var merchTotal = 100; var shippingCharge = 10; var orderTotal = merchTotal + shippingCharge; Try it yourself.

/*var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
console.log(orderTotal) // 110 is order total */

// Q:6 In the first statement declare a variable and assign it a number. In the second statement, change the value of the variable by adding it together with a number.

/*var myNumber = 10;
myNumber = myNumber + 5; */

//===Chapter 4 (Variable names Legal and Illegal)===//

// 1. Correct this statement.var product cost = 3.45;

// var productCost=3.45;

// 2.Rewrite this using camelCase.var Nameofband;

// var nameofband;

// 3: In a single statement declare a legally - named variable and assign a number to it.in javaScript

// let legallyNamedVariable = 42;

// 4. Declare a variable that is a combination of your first and last names.Use camelCase.

// let aliAmin;

// 5. List the legal and Illegal Variables

/*Legal variable names:

    firstName
lastName
age
_privateVariable
camelCaseVariable
myVariable123
$specialVar
x
i
myFunction
Illegal variable names:

    123 variable(starts with a number)
first - name(contains a hyphen)

function(reserved keyword)
my variable(contains a space)
var (reserved keyword)
class(reserved keyword)
break (reserved keyword)
let (reserved keyword)
return (reserved keyword)
default (reserved keyword)*/

//===Chapter 5(Math Expression I)===//

// 1. What is the name and symbol of the arithmetic operator that gives you the remainder when one number is divided by another ?

// var percent = 10 % 9
// console.log(percent); // Output: 12. 

// 2.What is the value of num ?

// var num = 20 % 6;
// console.log(num) // output is 2

// 3.In a single statement, declare the variable largeNum and assign itthe result of 1, 000 multiplied by 2, 000.

// var largeNum = 1000 * 2000;
// console.log(largeNum) == output is 2000000

// 4. Assign to a variable the value represented by one variable subtracted from the value represented by another variable

// var num1 = 10;
// var num2 = 5;
// var result = num1 - num2;

// console.log(result); // Output: 5


// 5. Assign to a variable the remainder when one number is divided byanother. The variable hasn't been declared beforehand. Make upthe variable name.

// var dividend = 20;
// var divisor = 7;
// var remainder = dividend % divisor;

// console.log(remainder); // Output: 6

// 6. Code an alert that displays the result of a multiplication on 2 numbers.

// var num1 = 5;
// var num2 = 3;
// var result = num1 * num2;

// alert("The result of the multiplication is: " + result);

//===Chapter 6 (Math Expression II)===//

// 1. Code a short form of x = x + 1; Use either of the two legal expressions.

// var x = 1;
// x++;

// console.log(x); // Output: 2

// 2. If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?

// var x = 100;
// x--
// console.log(x); // Output: 99

// 3. var x = 50; var y = x++; What is the value of y?

// var x = 50;
// var y = x++;
// console.log(y)// output is 50 // beacause The x++ expression is a post-increment operator, which means that the value of x is first assigned to y and then incremented by 1. Therefore, when y is assigned the value of x++, it takes the current value of x, which is 50, and then x is incremented to 51. As a result, the value of y is 50.

// 4. var y = 50;var z = --y; what is the value of z

// the value of z is 49 beacause The --y expression is a pre-decrement operator, which means that the value of y is first decremented by 1 and then assigned to z. Therefore, when z is assigned the value of --y, y is first decremented to 49, and then the value 49 is assigned to z. As a result, the value of z is 49.

// 5. In a single statement, decrement num and assign its original value to newNum.

// var num = 10;
// var newNum = num--;
// console.log(newNum) // output is 10

// 6. In a single statement add 1 to a variable and assign its original value to another variable.

// var num1 = 5;
// var num2 = num1++; 
// console.log(num2) //output is 5

// 7. Assign a number value to a variable. Increment the variable.Display the new value in an alert

// var num = 10;
// num++;
// alert("The new value is: " + num);

//===Chapter 7 (Math Expression III)===//

// 1. var calculatedNum = 2 + (2 * 6); What is the value of calculatedNum?

// calculatedNum would be 14.

// 2. var calculatedNum = (2 + 2) * 6; What is the value of calculatedNum?

// calculatedNum will be 24

// 3. var calculatedNum = (2 + 2) * (4 + 2); What is the value of calculatedNum?

// calculatedNum will be 24

// 4. var calculatedNum = ((2 + 2) * 4) + 2; What is the value of calculatedNum?

// calculatedNum will be 18

// 5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 56.

// var cost = (2 + 2) * 4 + 34;

// 6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10,clarified with parentheses, producing 20.

// var units = (2 + 2 * 4) + 10;

// 7. Write a statement that assigns to pressure the result of 4 / 2 * 4, clarified with parentheses, producing 5.

// var pressure = (4 / 2) * 4-3;

//===Chapter 8 (Concatenating Text Strings)===//

// 1. var num = "2" + "2"; What is the value of num? Include quotation marks.

// In the given code, the variables "2" and "2" are represented as strings since they are enclosed in quotation marks. When the + operator is used with strings, it performs concatenation, meaning it combines the two strings together.

// So, in this case, the string "2" is concatenated with the string "2", resulting in the string "22". Therefore, the value of num would be "22".

// 2. message = ("Hello," + "Dolly");What is the value of message? (Include the quotation marks.)Alert the statement

// var message = ("Hello," + "Dolly");
// alert(message);

// 3.alert("33" + 3);What message displays in the alert box?

// alert("33" + 3);// output is 333

// 4. Write an alert that displays the concatenation of the two parts of "Pakistan Zindabad".

// var part1 = "Pakistan";
// var part2 = " Zindabad";
// var message = part1 + part2;

// alert(message);

// 5. Write a statement that assigns to a variable the concatenation of a string with a number

// var result = "Hello" + 123;

// 6. Assign strings to two variables. Then concatenate them and assign the result to a third variable.

// var str1 = "Hello";
// var str2 = "World";
// var combined = str1 + str2;

//===Chapter 9 (Prompts)===//

// 1. Code a prompt with the message "Enter first name". The user'sresponse is assigned to firstName.

// var firstName = prompt("Enter first name");

// 2. Code a prompt with the message "Country?" and the default answer "China". The user's response is assigned to country.

// var country = prompt("Country?", "China");

// 3. Correct this statement var yourName = prompt(Enter Your Name");

// var yourName = prompt("Enter Your Name");

// 4. Code a prompt that specifies a string as the message Include a default input.

// var userInput = prompt("Please enter your input", "Default value");

// 5. Assign strings to two variables. Code a prompt specifying the first variable as the message and the second variable as the default

// var str1 = "First name";
// var str2 = "Hafiz Ali";

// var userInput = prompt(str1, str2);

// 6. Display a prompt, including both a message and a default response.Display the user's response in an alert.

// var message = "What is your favorite color?";
// var defaultResponse = "Blue";

// var userInput = prompt(message, defaultResponse);
// alert("Your favorite color is: " + userInput);

//===Chapter 10 (if statments)===//

// 1. var city = "Karachi"if (city = "Karachi") {console.log("The City OF Lights")Correct the above statement:Also try this statement by yourself

// var input = +prompt("Enter the name of city of lights" ,"Karachi")
// var city = "karachi";
// var lowerCase = city.toLocaleLowerCase
// if (city == "karachi") {
//   alert("The City OF Lights");
// }

// 2. This is the first line of an if statement:if (x === y) {Complete the statement. If the condition is true, display a box that asks the user value of z? and assign it to another variable.

// var x= prompt("enter your coupon num" )
// var y = 1244
// if (x == y) {
//     var z = prompt("Please enter the value of z");
//   }
//   else{
//     alert("enter valid num")
//   }
  
// 3. Code an if statement that tests if ZipCode is "10010" so, Alert that "Karachi". if not then alert ("Please write correct city")

    // var ZipCode = prompt("Enter your city Zipcode")
    // if (ZipCode === "10010") {
    //     alert("Karachi");
    //   } else {
    //     alert("Please write correct  ZipCode");
    //   }

// 4. Code an if statement. Test whether a variable has a particular numerical value. If so, assign a new value to that variable, as in x = 1;

// var x = 1;

// if (x === 1) {
//   x = 2;
// }

//===Chapter 11 (Comparison Operators)===//

// 1. Code the first line of an if statement that tests whether one variable is unequal to another. (Use !)

// if (variable1 !== variable2) {
//     // Rest of the code...
//   }

// 2. Code the first line of an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable.

// if (variable1 >= variable2) {
//     // Rest of the code...
//   }

// 3. Code an if statement. Test whether a variable is unequal to a particular number. If so, assign a number to that variable.

// if (variable !== 5) {
//     variable = 10;
//   }

// 4. Code an if statement that tests whether a number is unequal to a different number. If the condition is true (it will be), display a congratulations alert.

    // var number = 10;
    // var differentNumber = 5;

    // if (number !== differentNumber) {
    //   alert("Congratulations!");
    // }

// 5. Code a prompt asking for your first name. Code an if statement that tests whether the name you entered is unequal to another name. If the condition is true (it will be), display an alert that says "No match"

// var enteredName = prompt("Please enter your first name:");

// if (enteredName !== "John") {
//   // Code to be executed if the entered name is not "John"
//   alert("No match");
// }


//===Chapter 12 (if...else and else if statements)===//

// 1. Code an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable. If so, display an alert. If not, display a different alert.

// var variable1 = 10;
// var variable2 = 5;

// if (variable1 >= variable2) {
//   alert("Value of variable1 is greater than or equal to variable2");
// } else {
//   alert("Value of variable1 is less than variable2");
// }

// 2. Write a program using if else and else if statement which take marks from user. And the program will calculate your percentage and give you grade A/C to Your percentage. (MARKSHEET)

// // Take marks input from the user
// var marks = +prompt("Enter your marks:");

// // Calculate the percentage
// var percentage = (marks / 100) * 100;

// // Determine the grade based on the percentage
// var grade;

// if (percentage >= 90) {
//   grade = "A";
// } else if (percentage >= 80) {
//   grade = "B";
// } else if (percentage >= 70) {
//   grade = "C";
// } else if (percentage >= 60) {
//   grade = "D";
// } else {
//   grade = "F";
// }

// // Display the result
// alert("Your percentage is: " + percentage +"%");

// alert("Your grade is: " + grade);


// 3. This is the if statement that begins the code. if (a === 10) { alert("a is 10"); } If a isn't 10, display an alert that says The correct value of a is____

// var a = +prompt ("Enter your seat Num")
// if (a === 10) {
//     alert("Welcome Mrs Ali");
//   } else {
//     alert("Please go back home");
//   }

// 4. Prompt the user to enter a city. If the city is Karachi, display an alert acknowledging it is Karachi. If not, check to see if it's Lahore. If it is, display an alert acknowledging it's Lahore. Otherwise, display a different alert.

// var city = prompt("Enter a city:");

// if (city === "Karachi") {
//   alert("Acknowledging it is Karachi");
// } else if (city === "Lahore") {
//   alert("Acknowledging it is Lahore");
// } else {
//   alert("City not recognized");
// }

//===Chapter 13 (Testing sets of conditions)===//

// 1. Code the first line of an if statement that tests whether both are true: a has the same value as b and c has the same value as d.

// if (a === b && c === d) {
//     // Rest of the if statement code
//   }

//  2. Code the first line of an if statement that tests whether either or both are true: a has the same value as b or c doesn't have the same value as d.

// if (a === b || c !== d) {
//     // Rest of the if statement code
//   }

// 3. Code the first line of an if statement that tests whether I. name is either "Hamza" or "Arsalan". II. age is Less than 60.

// if ((name === "Hamza" || name === "Arsalan") && age < 60) {
//     // Rest of the if statement code
//   }

// 4. Declare two variables and assign them number values. If the first variable is less than the second variable or greater than the second variable, display an alert.

// let num1 = 10;
// let num2 = 20;

// if (num1 < num2 || num1 > num2) {
//   alert("The condition is true!");
// }

// 5. Declare 2 variables. Assign one of them your first name and the other one your last name. Code 2 prompts, asking for your first and your last name.If your answers match the two variables, display an alert.

// let firstName = "John";
// let lastName = "Doe";

// let enteredFirstName = prompt("Enter your first name:");
// let enteredLastName = prompt("Enter your last name:");

// if (enteredFirstName === firstName && enteredLastName === lastName) {
//   alert("Names match!");
// }

//===Chapter 14 (If statements nested)===//

// 1. Code an if statement enclosing a nested if. If password is not empty, then check if password is not greater than 5 , then display an alert that says "Password must be greater than 5" if greater than 5 then Alert "OK".

// let password = prompt("Enter your password:");

// if (password !== "") {
//   if (password.length <= 5) {
//     alert("Password must be greater than 5");
//   } else {
//     alert("OK");
//   }
// }

// 2. Try this statement by yourself if (a === 1) { if (c === "Max") { alert("OK"); } }

// var a = 1;
// var c = "Max";

// if (a === 1) {
//   if (c === "Max") {
//     alert("OK");
//   }
// }

// 3. Code the first line of an if statement that avoids the nesting above by testing for multiple conditions. if (a === 1) { if (c === "Max") {  alert("OK"); } }

// if (a === 1 && c === "Max") {
//     alert("OK");
//   }

// 4. Declare two variables and assign them the same number value. Test two conditions, using nested if statements. Test whether the first variable equals the second variable and also whether it is less than or equal to the second variable. If the test passes—and it will—display an alert message.

// let a = 5;
// let b = 5;

// if (a === b) {
//   if (a <= b) {
//     alert("Conditions passed!");
//   }
// }

//===Chapter 15 (Array I)===//

// 1. Declare an empty array.

// var arr= []

//2. Code an array with 1 string element

// let myArray = ["Hello"];

//3. var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert using array index

// var alphabet = ["h", "i", "j", "k"];
// alert(alphabet[2]);

//4. var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total length of array.

// var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
// var length = alphabet.length;

// console.log(length);

// 5. Declare an array with one element and Add a second element with index in array. Create an alert whose message is the new element.

// let myArray = ["First Element"];
// myArray[1] = "Second Element";
// alert(myArray[1]);

//===Chapter 16 (Array II)===//

// 1. Code an array with 1 string element. Add an additional element to the array using push. Create an alert whose message is the last element.

// let myArray = ["Hello"];
// myArray.push("World");
// alert(myArray[myArray.length - 1]);

//2. var Alphabet=["h","i","j","k"] Remove the last element from the array Alphabet.

// var Alphabet = ["h", "i", "j", "k"];
// Alphabet.pop();
// console.log(Alphabet);

//3. var Alphabet=["h","i","j","k"] Add a new element, a number, to the end of an array.

// var Alphabet = ["h", "i", "j", "k"];
// Alphabet.push(42);
// console.log(Alphabet);

// 1. var sizes = ["S", "M", "XL", "XXL", "XXXL"]. Remove the first element of an array.

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.shift();
// console.log(sizes);

// 2. var sizes = ["S", "M", "XL", "XXL", "XXXL"].Add three number elements to the beginning of an array.

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.unshift(1, 2, 3);
// console.log(sizes);

// 3. Declare an array with one element. Add a second element to the beginning of the array.

// var myArray = ["first element"];
// myArray.unshift("second element");
// alert(myArray[0]);

// 4. var sizes = ["S", "M", "XL", "XXL", "XXXL"]. Insert "L" into the array between "M" and "XL".
 
// var sites = ["S", "M", "XL", "XXL", "XXXL"]
// sites[2]="L"
// alert (sites)

// 5. var sizes = ["S", "M", "XL", "XXL", "XXXL"]. Copy the first 3 sizes of the array and put them into a new array,regSizes.

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// var regSizes = sizes.slice(0, 3);
// console.log(regSizes);

// 6. var pets = ["dog", "cat", "ox", "duck", "frog"]. Add 2 elements after "dog" and remove "cat", "ox", and "duck".

// var pets = ["dog", "cat", "ox", "duck", "frog"];

// // Find the index of "dog" in the array
// var dogIndex = pets.indexOf("dog");

// // Remove "cat", "ox", and "duck" from the array
// pets.splice(dogIndex + 1, 3);

// // Add two elements after "dog"
// pets.splice(dogIndex + 1, 0, "elephant", "giraffe");

// console.log(pets);

// 7. var pets = ["dog", "cat", "ox", "duck", "frog"]; Remove "cat" and "ox".

// var pets = ["dog", "cat", "ox", "duck", "frog"];

// // Find the indices of "cat" and "ox" in the array
// var catIndex = pets.indexOf("cat");
// var oxIndex = pets.indexOf("ox");

// // Remove "cat" and "ox" from the array
// pets.splice(catIndex, 1);
// pets.splice(oxIndex, 1);

// console.log(pets);

// 8. var pets = ["dog", "cat", "ox", "duck", "frog", "flea"]; Reduce it to "duck" and "frog" using slice.

// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];

// // Use slice to extract the desired elements
// var reducedPets = pets.slice(3, 5);

// console.log(reducedPets);

// === Chapter 17 - 20 (for Loops)===//

// 1. Write a statement in which loop is to run 10 times.

// for (var i = 0; i < 10; i++) {
//   // Code to be executed inside the loop
// }

// 2. Code the first line of a for loop with the usual counter name, usual starting value, and usual increment. Run it 12 times using <= to specify how many loops.

// for (var usual = 0; usual <= 11; usual++) {
//   // Code to be executed inside the loop
// }

// 3. What are the 5 characters missing from this code, excluding any spaces that are missing? Type them in order, with no spaces or commas between them.for var i = 0 i <= 4 i++

// for (var i = 0; i <= 4; i++) {
//   // Code to be executed inside the loop
// }

// The missing characters were:

// Opening parenthesis "("
// Semicolon ";" after the initialization statement
// Semicolon ";" after the loop condition
// Closing parenthesis ")"
// Opening curly brace "{" to start the loop body

// 4. Code the first line of a for loop with a counter name that's not i. Code the usual starting value and usual increment. Run it 100 times using < to specify how many loops.

// for (var counter = 0; counter < 100; counter++) {
//   // Code to be executed inside the loop
// }

// 5. Code the first line of a for loop with the usual counter and the usual starting value. Run it 3 times using > to specify how manyn loops. Decrement it with each iteration.

// for (var counter = 3; counter > 0; counter--) {
//   // Code to be executed inside the loop
// }

// 6. The statement assigns the number of elements in the array to the variable.

// var variable = array.length;

// 7. Set a variable named “flag” with an initial Boolean value of your choice.

// var flag = true;

// 8. Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array pets.

// var pets = ["dog", "cat", "bird", "fish"];
// for (var i = 0; i < pets.length; i++) {
//   // Code to be executed inside the loop
// }

// 9. Coding Exercise: Set a for loop to run 10 iterations. On the second iteration, display the counter in an alert. (It should be 1.)

// for (let i = 0; i < 10; i++) {
//   if (i === 1) {
//     alert(i);
//   }
// }

// 10. Create an array which contains user names Code a prompt with the message "Enter first name". The user's response is assigned to firstName. Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array user names. Code an if statement that tests the presense of (user name) in an array.

// var userNames = ["ali", "ahad", "basit", "hassan"];
// var firstName = prompt("Enter first name");
// for (var i = 0; i < userNames.length; i++) {
//   if (userNames[i] === firstName) {
//     alert("Welcome, " + firstName);
//     break; 
//   }
//   if (i !== userNames.length ) {
//     alert("Please write the correct user name");
//     break;
//   }
// }

// 11. Complete this code to display an alert if a match isn't found. var matchFound = false; for (var i = 0; i < list.length; i++) {if (userInput === list[i]) { alert("Match found"); matchFound = true; break; } };

// var userInput=prompt("enter city name")
// var list=['karachi','islamabad']
// var matchFound = true;
// for (var i = 0; i < list.length; i++) {
//   if (userInput === list[i]) {
//     alert("Match found");
//     matchFound = false;
//     break;
//   }
// }

// if (matchFound) {
//   alert("Match not found");
// }

//  12. var firstArr = [“a”, “b”, “c”, “d”, “e”, “f”]; var secondArr = [1, 2, 3, 4, 5, 6]; Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array firstArr. In the scope of main loop Code the nested loop. Limit the number of nested loops by the number of elements in the array secondArr.After that concatenate the both loops. Expected Output: a1 a2 a3 a4 ... f6

// var firstArr = ["a", "b", "c", "d", "e", "f"];
// var secondArr = [1, 2, 3, 4, 5, 6];

// // Code the first line of the main for loop
// for (var i = 0; i < firstArr.length; i++) {
//   // Code to be executed inside the main loop
  
//   // Code the first line of the nested for loop
//   for (var j = 0; j < secondArr.length; j++) {
//     // Code to be executed inside the nested loop
//     console.log(firstArr[i] + secondArr[j]);
//   }
// }






  











