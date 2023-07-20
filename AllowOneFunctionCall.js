/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let isCalled = false;

    return function(...args){
        if (isCalled) {
            return undefined;
        }

        isCalled = true;

        return fn(...args);
    }
};
