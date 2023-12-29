/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stk = [];
    
    for (let x of asteroids) {
        if (x > 0) {
            stk.push(x);
            continue;
        }
        
        while (stk.length > 0 && stk[stk.length - 1] > 0 && stk[stk.length - 1] < Math.abs(x)) {
            stk.pop();
        }
        
        if (stk.length == 0 || stk[stk.length - 1] < 0) {
            stk.push(x);
        } else if (stk[stk.length - 1] == Math.abs(x)) {
            stk.pop();
        }
    }
    
    return stk;
};
