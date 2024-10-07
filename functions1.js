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

/**
 * Task 3:
 * Create a function named `printAgeAndName`
 * - that takes a birth year and your name as parameters,
 * - and prints 'Hello NAME you are AGE years old' on the screen.
 * - Age = current year - birth
 */

function printAgeAndName(birthYear, name) {
    console.log(`Hello ${name} you are ${new Date().getFullYear() - birthYear} years old`)
}

/**
 * Task 4:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

function printHello(name, language) {
    switch(language) {
        case 'en':
            console.log(`Hello ${name}`)
            break;
        case 'es':
            console.log(`Hola ${name}`)
            break;
        case 'fr':
            console.log(`Bonjour ${name}`)
            break;
        case 'tr':
            console.log(`Merhaba ${name}`)    
    }

}