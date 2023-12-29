/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    const obj = {};

    for (let val of this) {
        let key = fn(val);

        if (obj[key] == undefined) {
            obj[key] = [val];
        } else {
            obj[key].push(val);
        }
    }

    return obj;
};