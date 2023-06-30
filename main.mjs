
import { onClick } from "./scripts/eventListeners.mjs";
import * as CONSTANTS from "./scripts/constants.mjs";
import * as CALLBACKS from "./scripts/callbacks.mjs";
// import * as UTILITIES from "./scripts/UtilityFunctions.mjs";
// import * as GRIDPARSER from "./scripts/gridParser.mjs"


setTimeout(
    function(){
        document.querySelector('.calculatorFade').style.display = 'none';
    }, 0
);
setTimeout(function(){
    document.getElementById('preloader').classList.add('fadeOut');
}, 2500);

setTimeout(function(){
    document.getElementById('preloader').style.display = 'none';
    document.querySelector('.calculatorFade').style.display = 'block';
    document.querySelector('.calculatorFade').classList.add('fadeIn');
}, 3000);

onClick(CONSTANTS.WON, CALLBACKS.onClicked);
onClick(CONSTANTS.WOFF, CALLBACKS.offClicked)
onClick(CONSTANTS.SECOND, CALLBACKS.seconded);



var buttonID = 'WOFF';
console.log(CONSTANTS[buttonID]);



const buttonHandlers = {
    
    'CLEAR': CALLBACKS.clearClicked,
    
    'ZERO': CALLBACKS.zeroClicked,
    'ONE': CALLBACKS.oneClicked,
    'TWO': CALLBACKS.twoClicked,
    'THREE': CALLBACKS.threeClicked,
    'FOUR' : CALLBACKS.fourClicked,
    'FIVE' : CALLBACKS.fiveClicked,
    'SIX' : CALLBACKS.sixClicked,
    'SEVEN' : CALLBACKS.sevenClicked,
    'EIGHT' : CALLBACKS.eightClicked,
    'NINE' : CALLBACKS.nineClicked,

    'PI' : CALLBACKS.piClicked,
    'SIN': CALLBACKS.sinClicked,
    'ARCSIN' : CALLBACKS.arcsinClicked,
    'COS' : CALLBACKS.cosClicked,
    'ARCOS' : CALLBACKS.arcosClicked,
    'TAN' : CALLBACKS.tanClicked,
    'ARCTAN' : CALLBACKS.arctanClicked,
    'EXPONENT' : CALLBACKS.exponentClicked,
    'xROOT' : CALLBACKS.xRootClicked,
    'xNEGONE' : CALLBACKS.xNegOneClicked,
    'EE' : CALLBACKS.eeClicked,
    'LEFTPARENTHESES': CALLBACKS.leftPClicked,
    'RIGHTPARENTHESES' : CALLBACKS.rightPClicked,
    'PERCENT_SIGN': CALLBACKS.percentClicked,
    'DIVIDE' : CALLBACKS.divideClicked,
    'SQUARE' : CALLBACKS.squareClicked,
    'SQUAREROOT' : CALLBACKS.rootClicked,
    'MULTIPLY' : CALLBACKS.mulClicked,
    'LOG' : CALLBACKS.logClicked,
    'TENX' : CALLBACKS.tenXClicked,
    'SUBTRACT' : CALLBACKS.subClicked,
    'LN' : CALLBACKS.naturalLogClicked,
    'EX' : CALLBACKS.eXClicked,
    'ADDITION' : CALLBACKS.addClicked,
    'RADIX' : CALLBACKS.radixClicked,
    'NEGATIVE':CALLBACKS.negClicked,
    'ENTER' : CALLBACKS.equalClicked,
    'DEGREE' : CALLBACKS.degClicked,
    'RADIAN' : CALLBACKS.radClicked

};

for (const buttonId in buttonHandlers) {
    const buttonElement = CONSTANTS[buttonId];
    const handler = buttonHandlers[buttonId];
    onClick(buttonElement, handler);
};

console.log(CONSTANTS.EXPRESSION_OBJECT.string.length);





//Uncomment the code below to check all buttons if working or not.
// UTILITIES.applyFunctionToElements(onClick, CALLBACKS.testEvent,
//     [CONSTANTS.WOFF,CONSTANTS.WON,CONSTANTS.SECOND,CONSTANTS.ON],
//     ...Object.values(CONSTANTS)
// );

// console.log(Object.values(CONSTANTS));
