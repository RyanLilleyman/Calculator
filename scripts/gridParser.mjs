import { compare, typeOf } from 'mathjs';
import * as CONSTANTS from './constants.mjs';

// var DISPLAY_STACK = [];

/**
 * This function defines an interval to toggle a class which
 * shows a cursor on the main display
 *
 * @export
 * @param {*} gridSpace
 */
export function drawCursor(gridSpace){
    setInterval(() => {
        gridSpace.forEach(grid => {
            grid.classList.toggle('activatedPixel');
        });
    }, 1000);
};


function updateGrids(expressionArray) {
    console.log(`Updating grids with expression array ${expressionArray}`);
  
    let flatArray = [];
  
    expressionArray.forEach((token) => {
      if (CONSTANTS.MULTIPLE[token]) {
        // If the token maps to an object in MULTIPLE, split it into individual characters
        // but keep the full token as reference for the lookup in MULTIPLE
        Object.keys(CONSTANTS.MULTIPLE[token]).forEach((key) => {
          flatArray.push({ token: token, key: key });
        });
      } else {
        // If the token does not map to an object in MULTIPLE, keep it as it is
        flatArray.push({ token: token, key: token });
      }
    });
  
    flatArray.forEach((item, index) => {
      // Determine the correct display data object (single or multiple)
      let displayDataObject =
        CONSTANTS.MULTIPLE[item.token] ? CONSTANTS.MULTIPLE : CONSTANTS.DISPLAY_WHAT_SINGLE;
  
      // Pass the full token, the key, and the display data object to the populateGrids function
      populateGrids(item.token, item.key, index + 1, displayDataObject);
    });
  }
  
  function populateGrids(token, key, containerID, displayDataObject) {
    console.log(`Populating grid ${containerID} with token '${token}', key '${key}'`);
  
    var container = document.getElementById(
      `gridspace${containerID < 10 ? `0${containerID}` : containerID}`
    );
    if (!container) {
      console.error(`No container found with ID gridspace${containerID}`);
      return;
    }
  
    let children = Array.from(container.children);
    children.forEach((child) => child.classList.remove('activatedPixel'));
  
    let displayData = displayDataObject[token];
    if (!displayData) {
      console.error(`No display data found for token '${token}'`);
      return;
    }
  
    let indices = Array.isArray(displayData[key]) ? displayData[key] : displayData;
    if (!Array.isArray(indices)) {
      console.error(`No array of indices found for token '${token}', key '${key}'`);
      return;
    }
  
    console.log(`Indices for token '${token}', key '${key}': ${indices}`);
    indices.forEach((index) => {
      if (index < children.length) {
        children[index].classList.add('activatedPixel');
        console.log(`Added 'activatedPixel' to child at index ${index}`);
      }
    });
  }
  

// Add updateGrids as a listener to EXPRESSION_OBJECT
CONSTANTS.EXPRESSION_OBJECT.listen(updateGrids);


CONSTANTS.EXPRESSION_OBJECT.listen(function(arr) {
    console.log('Listener 1: ', arr);
});


