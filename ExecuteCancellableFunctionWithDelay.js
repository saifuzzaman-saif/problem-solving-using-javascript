/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    timeoutId = setTimeout(() => fn(...args), t);

    return cancelFn = () => clearTimeout(timeoutId);
};
