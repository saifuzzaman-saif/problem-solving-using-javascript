/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    let val1, val2;
    
    await promise1.then(
        function(val) {
            val1 = val;
        }
    );

    await promise2.then(
        function(val) {
           val2 = val;
        }
    );

    return val1 + val2;
};
