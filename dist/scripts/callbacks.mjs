
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

   
}
   
function removeClass(toRemove){
    for(let i = 1; i <= 22; i++) {
        let id = 'gridspace' + (i > 9 ? i : '0' + i); //this will ensure single digit numbers have a leading zero.
        let gridSpace = Array.from(document.querySelector('#' + id).children);
        gridSpace.forEach(btn => {
            btn.classList.remove(toRemove);
        });
    }  
}

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
    
}

export function degClicked(){
    if(CONSTANTS.FLAGLIST.isOn){
        CONSTANTS.RADIAN_SCREEN.classList.remove('activeScreenText');
        CONSTANTS.DEGREE_SCREEN.classList.add('activeScreenText');
        CONSTANTS.FLAGLIST.angleMode = true;
        console.log(CONSTANTS.FLAGLIST.angleMode); 
    }
}

export function radClicked(){
    if(CONSTANTS.FLAGLIST.isOn){
        CONSTANTS.RADIAN_SCREEN.classList.add('activeScreenText');
        CONSTANTS.DEGREE_SCREEN.classList.remove('activeScreenText');
        CONSTANTS.FLAGLIST.angleMode = true;
        console.log(CONSTANTS.FLAGLIST.angleMode);  
    }
}



export function numberClickHandler(number){
    return function(e) {
        if(CONSTANTS.FLAGLIST.isOn) {
            
            CONSTANTS.EXPRESSION_OBJECT.push(String(number));  
        }
    }
}

export function expressionClickHandler(string){
    return function(e){
        if(CONSTANTS.FLAGLIST.isOn) {
            CONSTANTS.EXPRESSION_OBJECT.push(string);
        }
    }
}

export function expressionReset(){
    return function(e){
        if(CONSTANTS.FLAGLIST.isOn) {
            CONSTANTS.EXPRESSION_OBJECT.clear();
            removeClass('activatedPixel');
        }
    }
}




function escapeRegExp(string){
    return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
}

export function enterClicked(){
    return async function(e){  // make this function async
        let arr = CONSTANTS.EXPRESSION_OBJECT.string;
        console.log(arr);

        let dictionaryOfArrayElementsToChange = {
            pi : '(pi)',
            "xRoot(" : "nthRoot(",
            "E" : "*10^"
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
        
        // dynamically import mathjs
        const math = await import('mathjs');
        
        var result = math.evaluate(arrToString);
        console.log(result);
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

export const piClicked = expressionClickHandler('pi');
export const sinClicked = expressionClickHandler('sin(');
export const arcsinClicked = expressionClickHandler('asin(');
export const cosClicked = expressionClickHandler('cos(');
export const arcosClicked = expressionClickHandler('acos(');
export const tanClicked = expressionClickHandler('tan(');
export const arctanClicked = expressionClickHandler('atan(');
export const exponentClicked = expressionClickHandler('^');
export const xRootClicked = expressionClickHandler('xRoot(');
export const xNegOneClicked = expressionClickHandler('^-1');
export const eeClicked = expressionClickHandler('E');
export const leftPClicked = expressionClickHandler('(');
export const rightPClicked = expressionClickHandler(')');
export const divideClicked = expressionClickHandler('/');
export const squareClicked = expressionClickHandler('x2');
export const rootClicked = expressionClickHandler('2x');
export const mulClicked = expressionClickHandler('*');
export const subClicked = expressionClickHandler('sub');
export const addClicked = expressionClickHandler('+');
export const logClicked = expressionClickHandler('log(');
export const tenXClicked = expressionClickHandler('tenX');
export const eXClicked = expressionClickHandler('e^(');
export const naturalLogClicked = expressionClickHandler('ln(');
export const radixClicked = expressionClickHandler('.');
export const negClicked = expressionClickHandler('-');
export const percentClicked = expressionClickHandler('%');
export const equalClicked = enterClicked(CONSTANTS.EXPRESSION_OBJECT, CONSTANTS.EXPRESSION_OBJECT.string);