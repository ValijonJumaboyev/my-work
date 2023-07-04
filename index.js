/**
 * 
 * @param {string} code 
 */

function stringLogger(code) {
    typeof code === 'string' ? console.log(code) : console.error("Wrong Format of code");
}
/**
 * 
 * @param {number} code 
 */

function numLogger(code) {
    typeof code === 'number' ? console.log(code) : console.error("Wrong Format of code");
}
/**
 * 
 * @param {boolean} code 
 */

function boolLogger(code) {
    typeof code === 'boolean' ? console.log(code) : console.error("Wrong Format of code");
}

numLogger(22)

const arr = [2, 5, 9, 1, 4, 6, 8, 7,]

arr.sort((a, b) => a - b)