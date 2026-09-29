// # Task 1

// დაწერეთ JavaScript ფუნქცია, სახელწოდებითcalaireArea, რომელიც იღებს
// მართკუთხედის სიგრძეს და სიგანეს პარამეტრებად და აბრუნებს მართკუთხედის
// ფართობს.

function calaireArea(width, height) {
    let result = width * height;
    return result;
}

console.log(calaireArea(5, 4));

// Task 2

// შექმენით ფუნქცია სახელად isPrime, რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს
// true თუ ის მარტივი რიცხვია და false თუ არა.

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(18));

// console.log(isPrime());

// Task 3

// დაწერეთ ფუნქცია სახელწოდებით gradeCalculator, რომელიც იღებს სტუდენტის ქულას
// შეყვანის სახით და აბრუნებს მათ ასოებს (A, B, C, D, ან F) შემდეგი შეფასების სკალაზე
// დაყრდნობით:
// პასუხი:
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59

function gradeCalculator(grade) {
    let result = "";
    if (grade >= 90 && grade <= 100) {
        result = "A";
    } else if (grade >= 80 && grade < 90) {
        result = "B";
    } else if (grade >= 70 && grade < 80) {
        result = "C";
    } else if (grade >= 60 && grade < 70) {
        result = "D";
    } else if (grade >= 0 && grade < 60) {
        result = "F";
    } else {
        result = "Unknown Error";
    }
    return result;
}

console.log(gradeCalculator("100"));

//  Task 4

// შექმენით ფუნქცია სახელად isLeapYear, რომელსაც არგუმენტად სჭირდება წელიწადი და
// აბრუნებს ჭეშმარიტს, თუ ის ნაკიანი წელია (იყოფა 4-ზე და არ იყოფა 100-ზე, თუ არ
// იყოფა 400-ზე), ხოლო ცრუ სხვაგვარად.

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2007));
