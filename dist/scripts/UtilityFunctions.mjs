//Uncomment this code to check for event logging
// /**
//  * A simple function to check if an object is a DOM element
//  */
// function isDOMElement(obj) {
//     return obj instanceof Element || obj instanceof HTMLDocument; 
// }

// /**
//  * Takes the event function, callback function, removeArray, ...elements array as parameters.
//  * Declares a variable filteredElements that creates a new array of elements that do not include
//  * remove elements. 
//  * 
//  * It achieves this by first declaring an arrow function that calls includes() for each
//  * element. It returns true if the element is found within the removeArray 
//  * and returns false if the element is not found in the array. We need the negation because we do NOT 
//  * want to include true cases where elements exist in the filtered array coexist in the remove array.
//  * !is used to negate the condition and return true or false for that element. 
//  * 
//  * I.E, If the element is not found we want it to pass the condition, IF the element is found we 
//  * want it to fail the condition when includes() is called.
//  * 
//  * filteredElements is the result of this method. 
//  * We then add the event function to handle the element and the various callback functions for each
//  * element in filteredElements.
//  *
//  * @export
//  * @param {*} eventFunc
//  * @param {*} callbackFunc
//  * @param {*} removeArray
//  * @param {*} elements
//  */
// export function applyFunctionToElements(eventFunc, callbackFunc, removeArray, ...elements){
//     var filteredElements = elements.filter(element => !removeArray.includes(element) && isDOMElement(element));
    
//     filteredElements.forEach(element => eventFunc(element, callbackFunc))
// }