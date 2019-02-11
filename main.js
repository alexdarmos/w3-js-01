/*ex.1*/
// let num1 = parseInt(prompt("Enter a number"));
// let num2 = parseInt(prompt("Enter another number"));
//
// if (num1 > num2) {
//   document.write(num1);
// } else {
//   document.write(num2);
// }



/*ex.2*/
// let numbers = [1,-2,-3];
//
// if(numbers[0] > 0 && numbers[1] > 0 && numbers[2] > 0)  {
//   console.log(`The sign is +`);
// } else if (numbers[0] < 0 && numbers[1] < 0 && numbers[2] < 0)  {
//   console.log( `The sign is +`);
// } else if (numbers[0] < 0 && numbers[1] < 0 && numbers[2] > 0)  {
//   console.log(`The sign is +`);
// } else if (numbers[0] > 0 && numbers[1] < 0 && numbers[2] < 0)  {
//   console.log(`The sign is +`);
// } else if (numbers[0] < 0 && numbers[1] > 0 && numbers[2] < 0)  {
//   console.log('The sign is +');
// } else {
//   console.log(`The sign is -`);
// }

/*ex.3*/
// const num1 = 100;
// const num2 = 3;
// const num3 = 90;
// let first, second, third;
//
// if (num1 > num2 && num1 > num3 && num2 > num3) {
//   first = num1;
//   second = num2;
//   third = num3;
// } else if (num1 > num2 && num1 > num3 && num2 < num3)  {
//   first = num1;
//   second = num3;
//   third = num2;
// } else if (num2 > num1 && num2 > num3 && num1 > num3)  {
//   first = num2;
//   second = num1;
//   third = num3;
// } else if (num2 > num1 && num2 > num3 && num1 < num3) {
//   first = num2;
//   second = num3;
//   third = num1;
// } else if (num3 > num1 && num3 > num2 && num1 > num2) {
//   first = num3;
//   second = num1;
//   third = num2;
// } else if (num3 > num1 && num3 > num2 && num1 < num2) {
//   first = num3;
//   second = num2;
//   third = num1;
// }
// console.log (first, second, third);


/*ex.4*/
// let num1 = 100;
// let num2 = 50;
// let num3 = 300;
// let num4 = 40;
// let num5 = 5;
// let largest;
//
// if (num1 > num2)  {
//   if (num1 > num3)  {
//     if (num1 > num4)  {
//       if (num1 > num5)  {
//         largest = num1;
//       } else {
//         largest = num5;
//       }
//     } else if (num4 > num5) {
//       largest = num4;
//     } else {
//       largest = num5;
//     }
//   } else if (num3 > num4) {
//       if (num3 > num5)  {
//         largest = num3;
//       }
//   } else if (num4 > num5) {
//       largest = num4;
//   } else {
//       largest = num5;
//   }
// } else if (num2 > num3) {
//     if (num2 > num4)  {
//       if (num2 > num5)  {
//         largest = num2;
//       }
//     } else if (num4 > num5) {
//       largest = num4;
//     } else {
//       largest= num5;
//     }
// } else if (num3 > num4) {
//     if (num3 > num5)  {
//       largest = num3;
//     } else {
//       largest = num5;
//     }
// } else if (num4 > num5) {
//     largest = num4;
// } else {
//     largest = num5;
// }
//
// console.log(largest);



/*ex.5*/
// for (let i = 0; i < 16; i++)  {
//   if (i % 2 === 0)  {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }
// }



/*ex.6*/
// let david = 80;
// let vinoth = 77;
// let divya = 88;
// let ishitha = 95;
// let thomas = 68;
//
// let average = ((david + vinoth + divya + ishitha+ thomas) / 5);
// console.log(average);
//
// if (average < 60) {
//   console.log(`The class average is a F.`);
// } else if (average < 70)  {
//   console.log(`The class average is a D.`);
// } else if (average < 80)  {
//   console.log(`The class average is a C.`);
// } else if (average < 90)  {
//   console.log(`The class average is a B.`);
// } else {
//   console.log(`The class average is a A.`);
// }



/*ex.7*/
for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0)  {
    console.log(`FizzBuzz`);
  } else if (i % 5 === 0) {
    console.log(`Buzz`);
  } else if (i % 3 === 0 )  {
    console.log(`Fizz`);
  } else {
    console.log(i);
  }
}



/*ex.8*/
let num1 = 7;
let numx;
