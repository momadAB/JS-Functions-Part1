/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

const name = 'Mohammad Baqer'

function printName(name) {
    console.log(name);
}

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge(birthYear) {
    const age = new Date().getFullYear() - birthYear
    console.log(age)
}

