
import * as CONSTANTS from "./constants.mjs";
import * as GRIDPARSER from "./gridParser.mjs"


/**
* Handles the second click event. Flips the spans with class flipF and flipB
* Toggles the the activateBOW class for the SECOND button
* Changes the current isOn flag to the inverse on click.
*
* @export
* @param {event} 
* @return {void}
*/
export function seconded(e){
   console.log(e);
   if(CONSTANTS.FLAGLIST.isOn){
       CONSTANTS.FLIP_ZERO.forEach(btn => btn.classList.toggle('flipF'));
       CONSTANTS.FLIP_ONE.forEach(btn => btn.classList.toggle('flipB'));
       CONSTANTS.SECOND.classList.toggle('activatedBOW');
       CONSTANTS.SECOND_SCREEN.classList.toggle('activeScreenText');
   }
}
let cursorPosition = 0;
let cursorInterval;
let scrollOffset = 0;

/**
* Draws the cursor on the screen.
*
* @return {void} 
*/
function drawCursor() {
 if (CONSTANTS.FLAGLIST.isOn) {
   // Clear previous interval
   clearInterval(cursorInterval);

   // Select the gridSpace corresponding to cursorPosition
   let gridSpace = document.getElementById(`gridspace${String(cursorPosition + 1).padStart(2, '0')}`);

   if (!gridSpace) {
     console.error(`No gridSpace found for cursorPosition ${cursorPosition}`);
     return;
   }

   // Select the children of the gridSpace
   let children = Array.from(gridSpace.children);

   // Blink the selected gridSpace's children
   cursorInterval = setInterval(() => {
     children.forEach(child => {
       child.classList.toggle('activeCursor');
     });
   }, 500);
 }
}

let isCursorMoving = false;
let updateTimeout;

function moveCursor(delta, newCursorPosition) {
 if (isCursorMoving) {
   // If the cursor is already moving, exit the function to prevent overlapping movements
   return;
 }

 isCursorMoving = true;

 // Clear current interval and cursor style
 let currentGridSpace = document.getElementById(`gridspace${String(cursorPosition + 1).padStart(2, '0')}`);
 if (currentGridSpace) {
   let children = Array.from(currentGridSpace.children);
   children.forEach(child => {
     child.classList.remove('activeCursor');
   });
 }
 clearInterval(cursorInterval);

 // Check bounds and scroll if necessary
 while (newCursorPosition >= 11) {
   newCursorPosition--;
   if (scrollOffset + newCursorPosition < CONSTANTS.EXPRESSION_OBJECT.getCharacterLength()) {
     scrollOffset++;
   }
 }
 while (newCursorPosition < 0 && scrollOffset > 0) {
   newCursorPosition++;
   scrollOffset--;
 }

 // Ensure the new cursor position is within bounds
 newCursorPosition = Math.max(0, newCursorPosition);
 newCursorPosition = Math.min(CONSTANTS.EXPRESSION_OBJECT.getCharacterLength(), newCursorPosition);

 // Update cursorPosition
 cursorPosition = newCursorPosition;

 // Clear the update timeout to prevent delayed grid updates
 clearTimeout(updateTimeout);

 if (CONSTANTS.FLAGLIST.isOn) {
   // Draw cursor at new position immediately
   drawCursor();

   // Delay the grid update to prevent freezing the cursor
   updateTimeout = setTimeout(() => {
     updateGrids(CONSTANTS.EXPRESSION_OBJECT.string);
     isCursorMoving = false;
   }, 10);
 } else {
   // Cursor is toggled off, clear it immediately
   clearCursor();
   isCursorMoving = false;
 }
}

function updateGrids(expressionArray) {
  console.log(`Updating grids with expression array ${expressionArray}`);
 
  const flatArray = expressionArray.flatMap((token) => {
    console.log(`Processing token: ${token}`);
    if (CONSTANTS.MULTIPLE[token]) {
      return Object.keys(CONSTANTS.MULTIPLE[token]).map((key) => {
        console.log(`Processing key: ${key}`);
        return {
          token: token,
          key: key,
        };
      });
    } else {
      console.log(`No multiple for token: ${token}`);
      return { token: token, key: token };
    }
  });
 
  // Only select the elements that should be displayed, based on scrollOffset
  const displayedElements = flatArray.slice(scrollOffset, scrollOffset + 11);
 
  displayedElements.forEach((item, index) => {
    console.log(`Processing item at index ${index}:`, item);
    const displayDataObject =
      CONSTANTS.MULTIPLE[item.token] ? CONSTANTS.MULTIPLE : CONSTANTS.DISPLAY_WHAT_SINGLE;
 
    populateGrids(item.token, item.key, index + 1, displayDataObject);
  });
 
  console.log("Drawing cursor...");
  drawCursor(); // Add this line to draw the cursor after updating the grids
 }
 

function populateGrids(token, key, containerID, displayDataObject) {
 const container = document.getElementById(`gridspace${containerID.toString().padStart(2, '0')}`);

 if (!container) {
   console.error(`No container found with ID gridspace${containerID}`);
   return;
 }

 const children = Array.from(container.children);
 children.forEach(child => child.classList.remove('activatedPixel'));

 const displayData = displayDataObject[token];

 if (!displayData) {
   console.error(`No display data found for token '${token}'`);
   return;
 }

 const indices = Array.isArray(displayData[key]) ? displayData[key] : displayData;

 if (!Array.isArray(indices)) {
   console.error(`No array of indices found for token '${token}', key '${key}'`);
   return;
 }

 indices.forEach(index => {
   if (index < children.length) {
     children[index].classList.add('activatedPixel');
     console.log(`Added 'activatedPixel' to child at index ${index}`);
   }
 });
}
let isClearing = false;
let resetTimeout;

function clearCursor() {
 if (isClearing) {
   // Clearing already in progress, ignore subsequent calls
   return;
 }

 isClearing = true;

 clearInterval(cursorInterval);

 // Clear current interval and cursor style for the previous cursor position
 let previousGridSpace = document.getElementById(`gridspace${String(cursorPosition + 1).padStart(2, '0')}`);
 if (previousGridSpace) {
   let children = Array.from(previousGridSpace.children);
   children.forEach(child => {
     child.classList.remove('activeCursor');
   });
 }

 // Reset cursorInterval to null
 cursorInterval = null;

 // Update the grids immediately to clear the cursor
 updateGrids(CONSTANTS.EXPRESSION_OBJECT.string);

 // Reset cursorPosition to 0
 cursorPosition = 0;

 // Draw cursor at new position (which is 0)
 drawCursor();

 // Delay the scroll offset reset by 100 milliseconds
 resetTimeout = setTimeout(() => {
   scrollOffset = 0; // Reset scroll offset to 0
   isClearing = false; // Reset the clearing flag
 }, 100);
}

// Clear the timeout if the cursor is cleared before the resetTimeout is triggered
function clearResetTimeout() {
 clearTimeout(resetTimeout);
}

// Add event listeners to clear the resetTimeout
CONSTANTS.CLEAR.addEventListener('mousedown', clearResetTimeout);
CONSTANTS.WOFF.addEventListener('mousedown', clearResetTimeout);


/**
* A function that handles the right arrow click event.
*
* @return {undefined} This function does not return a value.
*/
export function rightArrowClicked() {
 moveCursor(1);
}

/**
* Moves the cursor to the left.
*
* @param {number} amount - The amount to move the cursor by.
* @return {void}
*/
export function leftArrowClicked() {
 moveCursor(-1);
}

export function numberClickHandler(number) {
 return function (e) {
   if (CONSTANTS.FLAGLIST.isOn) {
     CONSTANTS.EXPRESSION_OBJECT.push(String(number));
     updateGrids(CONSTANTS.EXPRESSION_OBJECT.string);
     moveCursor(0, CONSTANTS.EXPRESSION_OBJECT.getGridCountForToken(String(number)));
   }
 }
}

export function expressionClickHandler(string) {
 return function (e) {
   if (CONSTANTS.FLAGLIST.isOn) {
     CONSTANTS.EXPRESSION_OBJECT.push(string);
     updateGrids(CONSTANTS.EXPRESSION_OBJECT.string);
     moveCursor(0, CONSTANTS.EXPRESSION_OBJECT.getGridCountForToken(string));
   }
 }
}

/**
* Resets the expression and performs additional actions if a flag is on.
*
* @param {Event} e - the event triggering the function
* @return {undefined} - no return value
*/
export function expressionReset() {
 return function (e) {
   if (CONSTANTS.FLAGLIST.isOn) {
     CONSTANTS.EXPRESSION_OBJECT.clear();
     removeClass('activatedPixel');
     clearCursor();
   }
 }
}

/**
* Takes the onSpan and on click activates the various classes and assigns the inner grid
*
* @export
* @param {*} e
*/
export function onClicked(e){
   
   // const TOP_GRID = CONSTANTS.topGridSpacesDefined();
   // console.log(TOP_GRID);
   // console.log(TOP_GRID.length);
   CONSTANTS.EXPRESSION_OBJECT.string = [];
   CONSTANTS.ON.classList.add('activatedBLUEOW');
   CONSTANTS.SCREEN_OFF.forEach(x=>x.classList.add('on'));
   CONSTANTS.FLAGLIST.isOn = true;
   CONSTANTS.RADIAN_SCREEN.classList.add('activeScreenText');
   CONSTANTS.FORWARD.classList.add('activeScreenText');
   toggleGridClass('onGrid');
   clearCursor();
  
}


  
/**
* Removes a specified class from all buttons within grid spaces.
*
* @param {string} toRemove - The class to be removed from the buttons.
* @return {undefined} This function does not return a value.
*/
function removeClass(toRemove){
   for(let i = 1; i <= 22; i++) {
       let id = 'gridspace' + (i > 9 ? i : '0' + i); //this will ensure single digit numbers have a leading zero.
       let gridSpace = Array.from(document.querySelector('#' + id).children);
       gridSpace.forEach(btn => {
           btn.classList.remove(toRemove);
       });
   }  
}

/**
* Toggle the grid class for all grid spaces.
*
* @param {string} changeTo - The class to change to.
* @return {undefined} No return value.
*/
function toggleGridClass(changeTo){
   for(let i = 1; i <= 22; i++) {
       let id = 'gridspace' + (i > 9 ? i : '0' + i); //this will ensure single digit numbers have a leading zero.
       let gridSpace = Array.from(document.querySelector('#' + id).children);
       gridSpace.forEach(btn => {
           btn.className = changeTo;
       });
   }  
}

/**
* Listens for the offSpan and then removes a bunch of styles as well
* as unassign the grid.
*
* @export
* @param {*} e
*/
export function offClicked(e){
   CONSTANTS.TON.remove();
   CONSTANTS.ON.classList.remove('activatedBLUEOW');
   CONSTANTS.SCREEN_OFF.forEach(x=>x.classList.remove('on'));
   CONSTANTS.FLIP_ZERO.forEach(btn => btn.classList.remove('flipF'));
   CONSTANTS.FLIP_ONE.forEach(btn => btn.classList.remove('flipB'));
   CONSTANTS.SECOND.classList.remove('activatedBOW'); 
   CONSTANTS.SECOND_SCREEN.classList.remove('activeScreenText');
   CONSTANTS.RADIAN_SCREEN.classList.remove('activeScreenText');
   CONSTANTS.DEGREE_SCREEN.classList.remove('activeScreenText');
   CONSTANTS.FORWARD.classList.remove('activeScreenText');
   CONSTANTS.FLAGLIST.angleMode = false;
   CONSTANTS.FLAGLIST.isOn = false;
   CONSTANTS.EXPRESSION_OBJECT.string = [];
   removeClass('activatedPixel');
   removeClass('onGrid');
   
   clearCursor();
}

/**
* Click handler for the 'deg' button.
*
* @return {undefined} No return value.
*/
export function degClicked(){
   if(CONSTANTS.FLAGLIST.isOn){
       CONSTANTS.RADIAN_SCREEN.classList.remove('activeScreenText');
       CONSTANTS.DEGREE_SCREEN.classList.add('activeScreenText');
       CONSTANTS.FLAGLIST.angleMode = true;
       console.log(CONSTANTS.FLAGLIST.angleMode); 
   }
}

/**
* Function to handle the click event on the radian button.
*
* @return {undefined} No return value.
*/
export function radClicked(){
   if(CONSTANTS.FLAGLIST.isOn){
       CONSTANTS.RADIAN_SCREEN.classList.add('activeScreenText');
       CONSTANTS.DEGREE_SCREEN.classList.remove('activeScreenText');
       CONSTANTS.FLAGLIST.angleMode = true;
       console.log(CONSTANTS.FLAGLIST.angleMode);  
   }
}






/**
* Escapes special characters in a string to be used as a regular expression pattern.
*
* @param {string} string - The string to escape.
* @return {string} The escaped string.
*/
function escapeRegExp(string){
   return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
}

function displayResult(result) {
  if (typeof(result) === 'object') {
    console.log('DomainErr.');
    let resultString = 'DOMAIN.err.';
    let resultArray = resultString.split('');
    for (let i = 0; i < resultArray.length; i++) {
      const containerID = i + 12;
      const container = document.getElementById(`gridspace${String(containerID).padStart(2, '0')}`);
   
      if (container) {
        const digit = resultArray[i];
   
        // Clear existing classes
        const children = Array.from(container.children);
        children.forEach(child => child.classList.remove('activatedPixel'));
   
        // Add 'activatedPixel' class to the corresponding digit
        const displayData = CONSTANTS.DISPLAY_WHAT_SINGLE[digit];
        if (displayData) {
          const indices = Array.isArray(displayData) ? displayData : [displayData];
          indices.forEach(index => {
            if (index < children.length) {
              children[index].classList.add('activatedPixel');
              console.log(`Added 'activatedPixel' to child at index ${index}`);
            }
          });
        }
      }
    }
    }else if(typeof(result) === 'number'){
      console.log('Result: ', result);
      console.log("Type: ", typeof result);
     const resultString = String(result);
     const resultArray = resultString.split('');
     console.log(resultArray);
    
     for (let i = 0; i < resultArray.length; i++) {
       const containerID = i + 12;
       const container = document.getElementById(`gridspace${String(containerID).padStart(2, '0')}`);
    
       if (container) {
         const digit = resultArray[i];
    
         // Clear existing classes
         const children = Array.from(container.children);
         children.forEach(child => child.classList.remove('activatedPixel'));
    
         // Add 'activatedPixel' class to the corresponding digit
         const displayData = CONSTANTS.DISPLAY_WHAT_SINGLE[digit];
         if (displayData) {
           const indices = Array.isArray(displayData) ? displayData : [displayData];
           indices.forEach(index => {
             if (index < children.length) {
               children[index].classList.add('activatedPixel');
               console.log(`Added 'activatedPixel' to child at index ${index}`);
             }
           });
         }
       }
     }
    }
}

// Modify enterClicked function to call displayResult with the result
export function enterClicked() {
 return async function (e) {
   let arr = CONSTANTS.EXPRESSION_OBJECT.string;
   console.log(arr);

   let dictionaryOfArrayElementsToChange = {
     p: '(pi)',
     "E": "*10^",
      "!" : "^-1",
      "S" : "-",
      "@" : "^2",
      "xRt":"nthRoot(",
      "(tn" : "(10^",
   }

   var newArr = arr.map(item => {
     let newItem = item;
     for (let key in dictionaryOfArrayElementsToChange) {
       if (newItem.includes(key)) {
         newItem = newItem.replace(new RegExp(escapeRegExp(key), 'g'), dictionaryOfArrayElementsToChange[key]);
       }
     }
     return newItem;
   });

   console.log(newArr);
   var arrToString = newArr.join('');

   // Dynamically import mathjs
   // Dynamically import mathjs
  const math = await import('./custom-math.js');

  var result = math.default.evaluate(arrToString);

   console.log(result);

   displayResult(result);
 }
}




export const zeroClicked = numberClickHandler(0);
export const oneClicked = numberClickHandler(1);
export const twoClicked = numberClickHandler(2);
export const threeClicked = numberClickHandler(3);
export const fourClicked = numberClickHandler(4);
export const fiveClicked = numberClickHandler(5);
export const sixClicked = numberClickHandler(6);
export const sevenClicked = numberClickHandler(7);
export const eightClicked = numberClickHandler(8);
export const nineClicked = numberClickHandler(9);
export const clearClicked = expressionReset();

export const piClicked = expressionClickHandler('p');
export const sinClicked = expressionClickHandler('sin(');
export const arcsinClicked = expressionClickHandler('asin(');
export const cosClicked = expressionClickHandler('cos(');
export const arcosClicked = expressionClickHandler('acos(');
export const tanClicked = expressionClickHandler('tan(');
export const arctanClicked = expressionClickHandler('atan(');
export const exponentClicked = expressionClickHandler('^');
export const xRootClicked = expressionClickHandler('xRt');
export const xNegOneClicked = expressionClickHandler('!');
export const eeClicked = expressionClickHandler('(tn');
export const leftPClicked = expressionClickHandler('(');
export const rightPClicked = expressionClickHandler(')');
export const divideClicked = expressionClickHandler('/');
export const squareClicked = expressionClickHandler('@');
export const rootClicked = expressionClickHandler('2x');
export const mulClicked = expressionClickHandler('*');
export const subClicked = expressionClickHandler('S');
export const addClicked = expressionClickHandler('+');
export const logClicked = expressionClickHandler('log(');
export const tenXClicked = expressionClickHandler('(tn');
export const eXClicked = expressionClickHandler('e^(');
export const naturalLogClicked = expressionClickHandler('ln(');
export const radixClicked = expressionClickHandler('.');
export const negClicked = expressionClickHandler('-');
export const percentClicked = expressionClickHandler('%');
export const equalClicked = enterClicked(CONSTANTS.EXPRESSION_OBJECT, CONSTANTS.EXPRESSION_OBJECT.string);