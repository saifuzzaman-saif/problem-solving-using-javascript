/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    fn(...args);
    let intervalId = setInterval(() => fn(...args), t);

    return cancelFn = () => clearInterval(intervalId);
};
