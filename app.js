
//chapter 6 -9//

//1. Write a program to take a number in a variable, do therequired arithmetic to display the following result in yourbrowser://

// let a = prompt("Enter any number")
// document.write("Result:")
// document.write("<br>")

// document.write("The Value of a is: "+ a)
// document.write("<br>")
// document.write("..........................................")
// document.write("<br>")
// document.write("<br>")
// ++a
// document.write("The Value of ++a is: "+ a)
// document.write("<br>")
// document.write("Now the value of a is : " + a)
// document.write("<br>")
// document.write("<br>")
// document.write("The Value of a++ is: "+ a)
// document.write("<br>")
// a++
// document.write("Now the value of a is : " + a)
// document.write("<br>")
// document.write("<br>")
// document.write("<br>")
// --a
// document.write("The Value of --a is: "+ a)
// document.write("<br>")
// document.write("Now the value of a is : " + a)
// document.write("<br>")
// document.write("<br>")
// document.write("<br>")
// document.write("The Value of a-- is: "+ a)
// a--
// document.write("<br>")
// document.write("Now the value of a is : " + a)


// 2. What will be the output in variables a, b & result after execution of the following script:
// let a =2 , b = 1
// document.write("a is:" + a)
// document.write("<br>")
// document.write("b is:" + b)
// document.write("<br>")
// document.write("--a is 1 ")
// document.write("<br>")
// document.write("--b is 0 ")
// document.write("<br>")
// document.write("--a - --b is = 1 ")
// document.write("<br>")
// document.write("++b is 1  ")
// document.write("<br>")
// document.write("b-- is 1  ")
// document.write("<br>")
// document.write("++b + b-- = 2  ")
// document.write("<br>")
// document.write("1+2=3  ")
// document.write("<br>")
// result = --a - --b + ++b + b--
// document.write("Result is:" + result)
// document.write("<br>")

// 3. Write a program that takes input a name from user & greet the user.
// let userName = prompt("Please write your name here")
// alert("Hi welcome to our website " + userName)


// // // 4. Write a program to take input a number from user & display it’s multiplication table on your browser. If user  does not enter a new number, multiplication table of 5 should be displayed by default.


//

// 6. Take
//  var subject1 = prompt("write the subject")
//  var subject2 = prompt("write the subject")
//  var subject3 = prompt("write the subject")

//  var obtainedmarks1 = +prompt("obtained marks of "+ subject1)
//  var obtainedmarks2 = +prompt("obtained marks of "+ subject2)
//  var obtainedmarks3 = +prompt("obtained marks of "+ subject3)

//  var totalmarks = 100
//  var totalresults = obtainedmarks1+obtainedmarks2+obtainedmarks3
//  var gtotalmarks = totalmarks*3
//  document.write(`
//  <table>
//  <tr>
//  <td><h2>Subject<h2></td>
//  <td><h2>Total Marks<h2></td>
//  <td><h2>Obtained Marks<h2></td>
//  <td><h2>Percentage<h2></td>
//  </tr>
//  <tr>
//  <td>${subject1}</td>
//  <td>${totalmarks}</td>
//  <td>${obtainedmarks1}</td>
//  <td>${(obtainedmarks1/totalmarks)*100}%</td>
//  </tr>
//  <tr>
//  <td>${subject2}</td>
//  <td>${totalmarks}</td>
//  <td>${obtainedmarks2}</td>
//  <td>${(obtainedmarks2/totalmarks)*100}%</td>
//  </tr>
//  <tr>
//  <td>${subject3}</td>
//  <td>${totalmarks}</td>
//  <td>${obtainedmarks3}</td>
//  <td>${(obtainedmarks3/totalmarks)*100}%</td>
//  </tr>
//  <tr>
//  <td></td>
//  <td>${gtotalmarks}</td>
//  <td>${totalresults}</td>
//  <td>${(totalresults/gtotalmarks)*100}%</td>

//  </table>
// `)

//chapter 9-11//


//1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

// let userInput= prompt("Enter a City Name")

// if(userInput === "karachi"){
//     document.write("Welcome to the City of light")
// }
// else{
//     document.write("Thanks for Providing Detail")
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am



// let genderCheck = prompt("Enter your Gender : Male/Female")

// if (genderCheck === "Male"){
//     document.write("Good Morning Sir")
// }

// else if (genderCheck === "Female"){
//     document.write("Good Morning Mam")
// }


// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:


// let signalColors = prompt("Enter Traffic signal color : Red/ Yellow / Green ")

// if(signalColors === "Red"){
//     document.write(" Instruction! Must Stop")
// }

// else if(signalColors === "Yellow"){
//     document.write(" Instruction! Ready to move")
// }


// else if (signalColors === "Green") {
//     document.write(" Instruction! Move now")
// }
// else {
//     document.write(" Invalid")
// }


// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”


// let carFuel = +prompt( "Please Write your remaining fuel in cae in litres")

// if ( carFuel <= 0.25  ){
//     document.write("Please refill the fuel in your car")
// }
// else{
//     document.write("No need to fill the fuel")
// }

//5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.


//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

//Answer : Yes alert msg displayed condition true

//  var b = 82;
// if (b++ === 83){
//  alert("given condition for variable b is true");
//  }
//Answer :  alert msg not displayed condition false

 // var c = 12;
//  if (c++ === 13){
//  alert("condition 1 is true");
//  }
// Answer( In given statement Condition 2 and 4  is true 7 condition 1 and 3 are false )

//  if (c === 13){
//  alert("condition 2 is true");
//  }



// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }



//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//// d   ( The  given Condition is true )


// e  (The  given condition will print True)

//  if (true){
// alert("True");
// }

// if (false){
// alert("False");
// }

//  if("car" < "cat"){
// alert("car is smaller than cat");
// }
// f (The condition is true because the letter r is less then t in a sequence manner)

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute 
// grade as per following table:



//  // Prompt the user for marks first
// var subject1ObtainedMrks = +prompt("Enter Your subject 1 marks");
// var subject2ObtainedMrks = +prompt("Enter Your subject 2 marks");
// var subject3ObtainedMrks = +prompt("Enter Your subject 3 marks");

// // Now you can calculate total obtained marks
// var totalMrks = 100 * 3;
// var obtainedMarks = subject1ObtainedMrks + subject2ObtainedMrks + subject3ObtainedMrks;
// var percentage = (obtainedMarks * 100) / totalMrks;

// // Grade and remarks based on percentage
// var grade;
// var remarks;

// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// } else if (percentage < 80 && percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage < 70 && percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else {
//     grade = "Fail";
//     remarks = "Sorry";
// }

// // Output the results
// document.write("<h1>Mark Sheet</h1>");
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("Total Marks : " + totalMrks);
// document.write("<br>");
// document.write("Marks Obtained : " + obtainedMarks);
// document.write("<br>");
// document.write("Percentage : " + percentage.toFixed(2) + "%");  // To limit percentage to 2 decimal places
// document.write("<br>");
// document.write("Grade: " + grade);
// document.write("<br>");
// document.write("Remarks: " + remarks);

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.



// var secretNmbr = 5;
// var guessNmbr = +prompt("Guess the secret number (Ranging from 1 to 10 )")

// if(guessNmbr === secretNmbr ){
//     document.write("Bingo! Correct answer")
// }
// else if (guessNmbr + 1 === secretNmbr){
//     document.write("Close enough to the correct answer")
// }
// else{
//     document.write("Try Again")
// }

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.

// var userInput = +prompt("Enter any value")

// if (userInput % 3 === 0 ){
//     alert("These Number is divisible by three")
// }
// else{
//     document.write("These number is not divisible by 3")
// }


// 9. Write a program that checks whether the given input is an
// even number or an odd number.


// var userInput = +prompt("Enter any number ")

// if (userInput % 2 == 0){
//    alert("Number is Even")
// }
// else {
//    alert("Number is odd")
// }


// 10. Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “c.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”


// var temperature = +prompt("Please tell the Temperature")

// if (temperature >= 40){
//     document.write("It is too hot outside")
// }

// else if (temperature >= 30){
//     document.write("The Weather today is Normal")
// }

// else if (temperature >= 20){
//     document.write("Today's Weather is cool")
// }

// else if (temperature >= 10){
//     document.write("OMG! Today's weather is so Cool")
// }
// else{
//     document.write("Invalid temperature")
// }


// 11. Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user

// var num1 = +prompt ("Enter First Number")
// var num2 = +prompt ("Enter Second Number")
// var Opt = prompt ("Enter Operation (+, -, *, /, %)")


// if (Opt === "+"){
//     alert(num1+num2)
// }
// else if (Opt === "-"){
//     alert(num1-num2)
// }
// else if (Opt === "*"){
//     alert(num1*num2)
// }
// else if (Opt === "/"){
//     alert(num1/num2)
// }
// else if (Opt === "%"){
//     alert(num1%num2)
// }
// else{
//     alert("Invalid Operation")
// }