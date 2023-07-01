// import { compare, typeOf } from 'mathjs';
// import * as CONSTANTS from './constants.mjs';


// function updateGrids(expressionArray) {
//   console.log(`Updating grids with expression array ${expressionArray}`);

//   const flatArray = expressionArray.flatMap((token) => {
//     if (CONSTANTS.MULTIPLE[token]) {
//       return Object.keys(CONSTANTS.MULTIPLE[token]).map((key) => ({
//         token: token,
//         key: key,
//       }));
//     } else {
//       return { token: token, key: token };
//     }
//   });

//   // Only select the elements that should be displayed, based on scrollOffset
//   const displayedElements = flatArray.slice(scrollOffset, scrollOffset + 11);

//   displayedElements.forEach((item, index) => {
//     const displayDataObject =
//       CONSTANTS.MULTIPLE[item.token] ? CONSTANTS.MULTIPLE : CONSTANTS.DISPLAY_WHAT_SINGLE;

//     populateGrids(item.token, item.key, index + 1, displayDataObject);
//   });
// }

// function populateGrids(token, key, containerID, displayDataObject) {
//   const container = document.getElementById(`gridspace${containerID.toString().padStart(2, '0')}`);

//   if (!container) {
//     console.error(`No container found with ID gridspace${containerID}`);
//     return;
//   }

//   const children = Array.from(container.children);
//   children.forEach(child => child.classList.remove('activatedPixel'));

//   const displayData = displayDataObject[token];

//   if (!displayData) {
//     console.error(`No display data found for token '${token}'`);
//     return;
//   }

//   const indices = Array.isArray(displayData[key]) ? displayData[key] : displayData;

//   if (!Array.isArray(indices)) {
//     console.error(`No array of indices found for token '${token}', key '${key}'`);
//     return;
//   }

//   indices.forEach(index => {
//     if (index < children.length) {
//       children[index].classList.add('activatedPixel');
//       console.log(`Added 'activatedPixel' to child at index ${index}`);
//     }
//   });
// }
  


// // Add updateGrids as a listener to EXPRESSION_OBJECT
// CONSTANTS.EXPRESSION_OBJECT.listen(updateGrids);


