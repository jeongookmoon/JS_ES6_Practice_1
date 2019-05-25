/**
 * @author Jeong Ook Moon
 * @description practicing JS ES6
 */
const LINE = "--------------------------------------------------------------------"

// Display content
const DISPLAY = (description, result = "") => {
  console.log(description, result)
  document.write(`<p><span>` + description + `</span><span style="color:blue;">` + result + `</span></p>`)
}

const INTRO = (title) => {
  DISPLAY(LINE)
  DISPLAY(title)
}

const OUTRO = (description, result, endOfLine = true) => {
  DISPLAY("Results: ".concat(description + " => "), result)
  if (endOfLine)
    DISPLAY(LINE)
}

// Filter & Update Elements in Array by One Line Code
INTRO("Filter & Update Elements in Array by One Line Code")
const randNumArray = [1, 213, 29.21, -2122.2, 0, 289.2, 8]
const squareIntArray = arr => arr.filter(num => Number.isInteger(num) && num > 0).map(el => el * el)

OUTRO("squareIntArray(randNumArray)", squareIntArray(randNumArray))

// Handling Default Parameter
INTRO("Handling Default Parameter")
const increment = (num1, num2 = 1) => num1 + num2
OUTRO("increment(5, 6)", increment(5, 6), false)
OUTRO("increment(5)", increment(5))

// Summing Integers with Rest Operator
INTRO("Summing Integers with Rest Operator")
// rest operator here convert parameters to 1 array
const sum = (...arr) => arr.reduce((acc, cur) => acc + cur, 0)
OUTRO("sum(4,5,6)", sum(4, 5, 6))

// Destructing Assignment from Object
INTRO("Destructing Assignment from Object")
const hotFashionItems = {
  converse: "70s Chuck Taylor",
  drmartens: "Adrian"
}
const getHotConverseItem = ({ converse }) => converse;
OUTRO("getHotConverseItem(hotFashionItems)", getHotConverseItem(hotFashionItems))

// Remove First Three Elements from Array
INTRO("Remove First Three Elements from Array")
const intArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const removeFirstTwo = arr => {
  const [, , ...result] = arr
  return result
}
OUTRO("removeFirstTwo(intArray)", removeFirstTwo(intArray))

