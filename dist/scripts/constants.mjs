
//constant declarations
export /** @type {*} */
var EXPRESSION_OBJECT = {
    string : [],
    listeners: [],
    push(item){
        this.string.push(item);
        this.notify();
    },
    clear(){
        this.string = [];
        this.notify();
    },
    listen(func){
        this.listeners.push(func);
    },
    notify(){
        this.listeners.forEach(func=>func(this.string));
    }
};

export var DISPLAY_WHAT_SINGLE = {
    0 : [1,2,3,5,9,10,13,14,15,17,19,20,21,24,25,29,31,32,33],
    1 : [2,6,7,12,17,22,27,31,32,33],
    2 : [1,2,3,5,9,14,18,22,26,30,31,32,33,34],
    3 : [0,1,2,3,4,8,12,18,24,25,29,31,32,33],
    4 : [3,7,8,11,13,15,18,20,21,22,23,24,28,33],
    5 : [0,1,2,3,4,5,10,11,12,13,19,24,25,29,31,32,33],
    6 : [2,3,6,10,15,16,17,18,20,24,25,29,31,32,33],
    7 : [0,1,2,3,4,9,13,17,21,26,31],
    8 : [1,2,3,5,9,10,14,16,17,18,20,24,25,29,31,32,33],
    9 : [1,2,3,5,9,10,14,16,17,18,19,24,28,31,32],

    'pi' : [10,11,12,13,14,16,18,21,23,26,28,30,33,34],
    '^' : [2,6,8,10,14],
    '^-1' : [3,4,9,10,11,14,19],
    'E' : [11,12,13,14,16,21,22,23,26,31,32,33,34],
    '(' : [3,7,11,16,21,27,33],
    ')' : [1,7,13,18,23,27,31],
    '/' : [9,13,17,21,25],
    'x2' : [1,2,3,5,8,12,16,20,21,22,23],
    '*' : [7,10,12,14,16,17,18,20,22,24,27],
    'sub' : [15,16,17,18,19],
    '-' : [15,16,17,18,19],
    '+'  : [7,12,15,16,17,18,19,22,27],
    '.' : [26,27,31,32],
    '%' : [0,1,5,6,9,13,17,21,25,28,29,33,34],
};

export var MULTIPLE ={
    'sin(' : {
        's' : [11,12,13,15,21,22,23,29,30,31,32,33],
        'i' : [2,11,12,17,22,27,31,32,33],
        'n' : [10,12,13,15,16,19,20,24,25,29,30,34],
        '(' : [3,7,11,16,21,27,33]
    },
    'asin(' : {
        'a' : [11,12,13,19,21,22,23,24,25,29,31,32,33,34],
        's' : [11,12,13,15,21,22,23,29,30,31,32,33],
        'i' : [2,11,12,17,22,27,31,32,33],
        'n' : [10,12,13,15,16,19,20,24,25,29,30,34],
        '(' : [3,7,11,16,21,27,33]
    },
    'cos(' : {
        'c' : [11,12,13,15,20,25,29,31,32,33],
        'o' : [11,12,13,15,19,20,24,25,29,31,32,33],
        's' : [11,12,13,15,21,22,23,29,30,31,32,33],
        '(' : [3,7,11,16,21,27,33]
    },
    'acos(' : {
        'a' : [11,12,13,19,21,22,23,24,25,29,31,32,33,34],
        'c' : [11,12,13,15,20,25,29,31,32,33],
        'o' : [11,12,13,15,19,20,24,25,29,31,32,33],
        's' : [11,12,13,15,21,22,23,29,30,31,32,33],
        '(' : [3,7,11,16,21,27,33]
    },

    'tan(': {
        't' : [1,6,10,11,12,16,21,26,29,32,33],
        'a' : [11,12,13,19,21,22,23,24,25,29,31,32,33,34],
        'n' : [10,12,13,15,16,19,20,24,25,29,30,34],
        '(' : [3,7,11,16,21,27,33]
    },
    'atan(' : {
        'a' : [11,12,13,19,21,22,23,24,25,29,31,32,33,34],
        't' : [1,6,10,11,12,16,21,26,29,32,33],
        'u' : [11,12,13,19,21,22,23,24,25,29,31,32,33,34],
        'n' : [10,12,13,15,16,19,20,24,25,29,30,34],
        '(' : [3,7,11,16,21,27,33]
    },
    'xRoot(' : {
        'x' : [2,4,8,12,14],
        'ro': [2,3,4,7,12,17,20,22,26,27,32],
        '(' : [3,7,11,16,21,27,33]
    },
    '2x' : {
        'ro': [2,3,4,7,12,17,20,22,26,27,32],
        '(' : [3,7,11,16,21,27,33]
    },    
    'log(' : {
        'l' : [1,2,7,12,17,22,27,31,32,33],
        'o' : [11,12,13,15,19,20,24,25,29,31,32,33],
        'g' : [6,7,8,9,10,14,15,19,21,22,23,24,29,31,32,33],
        '(' : [3,7,11,16,21,27,33] 
    },
    'tenX' : {
        'ten' : [10,12,13,14,15,17,19,20,22,24,25,27,29,30,32,33,34],
        '^' : [2,6,8,10,14],
        '(' : [3,7,11,16,21,27,33] 
    },
    'e^(' : {
        'e' : [11,12,13,15,19,20,21,22,23,25,31,32],
        '^' : [2,6,8,10,14],
        '(' : [3,7,11,16,21,27,33] 
    },
    'ln(' : {
        'l' : [1,2,7,12,17,22,27,31,32,33],
        'n' : [10,12,13,15,16,19,20,24,25,29,30,34],
        '(' : [3,7,11,16,21,27,33] 
    }
}

export /** @type {*} Selects for the elements with .flip0*/
const FLIP_ZERO = document.querySelectorAll('.flip0');

export /** @type {*} Selects for the elements with the .flip1*/
const FLIP_ONE = document.querySelectorAll('.flip1');

export /** @type {*} Declares a nodelist with elements of class .screenOff*/
const SCREEN_OFF = document.querySelectorAll('.screenOff');

export /** @type {*}  Selects the ON button*/
const ON = document.querySelector('#On');

export /** @type {*} Selects the entire SECOND button*/
const SECOND = document.querySelector('#Second');

export /** @type {*} Selects for the every container with lcdGridSquare as a class*/
const GRIDS = document.querySelectorAll('.lcdGridSquare');

export /** @type {*} */
const WON = document.querySelector('#onSpan');

export /** @type {*} reference to the offSpan for testing purposes */
const WOFF = document.querySelector('#offSpan');

export /** @type {*} */
const CLEAR = document.querySelector('#CLEAR_BUTTON');

export /** @type {*} */
const DEGREE = document.querySelector('#DEGREE_SPAN');

export /** @type {*} */
const RADIAN = document.querySelector('#RADIAN_SPAN');

export /** @type {*} */
const DELETE = document.querySelector('#DELETE_SPAN');

export /** @type {*} */
const INSERT = document.querySelector('#INSERT_SPAN');

export /** @type {*} */
const UPARROW = document.querySelector('#UPARROW_BUTTON');

export /** @type {*} */
const RIGHTARROW = document.querySelector('#RIGHTARROW_BUTTON');

export /** @type {*} */
const BOTTOMARROW = document.querySelector('#BOTTOMARROW_BUTTON');

export /** @type {*} */
const LEFTARROW = document.querySelector('#LEFTARROW_BUTTON');

export /** @type {*} */
const PI = document.querySelector('#PI_BUTTON');

export /** @type {*} */
const SIN = document.querySelector('#SIN_SPAN');

export /** @type {*} */
const ARCSIN = document.querySelector('#ARCSIN_SPAN');

export /** @type {*} */
const COS = document.querySelector('#COSINE_SPAN');

export /** @type {*} */
const ARCOS = document.querySelector('#ARCOS_SPAN');

export /** @type {*} */
const TAN = document.querySelector('#TANGENT_SPAN');

export /** @type {*} */
const ARCTAN = document.querySelector('#ARCTAN_SPAN');

export /** @type {*} */
const EXPONENT = document.querySelector('#EXPONENT_SPAN');

export /** @type {*} */
const xROOT = document.querySelector('#xROOT_SPAN');

export /** @type {*} */
const xNEGONE = document.querySelector('#xNegOne_SPAN');

export /** @type {*} */
const EE = document.querySelector('#EE_SPAN');

export /** @type {*} */
const LEFTPARENTHESES = document.querySelector('#LEFT_PARENTHESES_SPAN');

export /** @type {*} */
const PERCENT_SIGN = document.querySelector('#PERCENT_SPAN');

export /** @type {*} */
const RIGHTPARENTHESES = document.querySelector('#RIGHT_PARENTHESES_SPAN');

export /** @type {*} */
const COMMA = document.querySelector('#COMMA_SPAN');

export /** @type {*} */
const DIVIDE = document.querySelector('#DIVIDE_BUTTON');

export /** @type {*} */
const SQUARE = document.querySelector('#SQUARE_SPAN');

export /** @type {*} */
const SQUAREROOT = document.querySelector('#SQUARE_ROOT_SPAN');

export /** @type {*} */
const SEVEN = document.querySelector('#SEVEN_BUTTON');

export /** @type {*} */
const EIGHT = document.querySelector('#EIGHT_BUTTON');

export /** @type {*} */
const NINE = document.querySelector('#NINE_BUTTON');

export /** @type {*} */
const MULTIPLY = document.querySelector('#MULTIPLY_BUTTON');

export /** @type {*} */
const LOG = document.querySelector('#LOG_SPAN');

export /** @type {*} */
const TENX = document.querySelector('#TENX_SPAN');

export /** @type {*} */
const FOUR = document.querySelector('#FOUR_BUTTON');

export /** @type {*} */
const FIVE = document.querySelector('#FIVE_BUTTON');

export /** @type {*} */
const SIX = document.querySelector('#SIX_BUTTON');

export /** @type {*} */
const SUBTRACT = document.querySelector('#SUBTRACT_BUTTON');

export /** @type {*} */
const LN = document.querySelector('#NATURAL_LOG_SPAN');

export /** @type {*} */
const EX = document.querySelector('#EX_SPAN');

export /** @type {*} */
const ONE = document.querySelector('#ONE_BUTTON');

export /** @type {*} */
const TWO = document.querySelector('#TWO_BUTTON');

export /** @type {*} */
const THREE = document.querySelector('#THREE_BUTTON');

export /** @type {*} */
const ADDITION = document.querySelector('#ADDITION_BUTTON');

export /** @type {*} */
const ZERO = document.querySelector('#ZERO_BUTTON');

export /** @type {*} */
const RADIX = document.querySelector('#RADIX_BUTTON');

export /** @type {*} */
const NEGATIVE = document.querySelector('#NEGATIVE_BUTTON');

export /** @type {*} */
const ENTER = document.querySelector('#ENTER_BUTTON');

export /** @type {*} */
const SECOND_SCREEN = document.querySelector('#secondScreenText');

export const DEGREE_SCREEN = document.querySelector('#degreeScreenText');

export const RADIAN_SCREEN = document.querySelector('#radianScreenText');

export const FORWARD = document.querySelector('#forwardSlash');

export /** @type {*} Object that defines the flags for state management.*/
const FLAGLIST = {
    isOn : false,
    gridDefined: false,
    angleMode : false,
};


// "": [
//     ["","","","",""],
//     ["","","","",""],
//     ["","","","",""],
//     ["","","","",""],
//     ["","","","",""],
//     ["","","","",""],
//     ["","","","",""],
// ],


