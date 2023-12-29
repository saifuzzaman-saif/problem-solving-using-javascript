/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    const MAX_LIMIT = 10000001;
    let l = 1, r = MAX_LIMIT;

    canReach = (speed) => {
        let timeNeeded = 0;
        
        for (let i = 0; i < dist.length; i++) {
            if (i == dist.length - 1) {
                timeNeeded += dist[i] / speed;
            } else {
                timeNeeded += Math.floor((dist[i] + (speed - 1)) / speed);
            }
        }
        
        return timeNeeded <= hour;
    }
    
    while (l < r) {
        let m = Math.floor(l + (r - l) / 2);
        
        if (canReach(m)) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    
    return l < MAX_LIMIT ? l : -1;
};
