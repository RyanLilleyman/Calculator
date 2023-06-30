


/**
 * Used to handle click events with specific elements 
 *
 * @export
 * @param {*} element
 * @param {*} callback
 */
export function onClick(element, callback) {
    element.addEventListener('click', callback);
}

/**
 * Used to handle mouseover events with 
 *
 * @export
 * @param {*} element
 * @param {*} callback
 */
export function onHover(element, callback) {
    element.addEventListener('mouseover', callback);
}
