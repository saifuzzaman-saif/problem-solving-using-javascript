/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function(req_skills, people) {
    let n = req_skills.length;
    let m = people.length;
    const dp = [];
    const skillsMap = new Map();
    const team = [];

    for (i = 0; i < n; i++) {
        skillsMap.set(req_skills[i], i);
    }

    for (i = 0; i < m; i++) {
        dp[i] = new Array(1 << n);
        dp[i].fill(-1);
    }

    getNextMask = (mask, skills) => {
        for (skill of skills) {
            if (skillsMap.has(skill)) {
                mask |= (1 << skillsMap.get(skill));
            }
        }

        return mask;
    }

    findSmallestTeam = (i, mask) => {
        if (i >= m) {
            if (mask == (1 << n) - 1) {
                return 0;
            } else {
                return Number.MAX_SAFE_INTEGER / 2;
            }
        }

        if (dp[i][mask] != -1) {
            return dp[i][mask];
        }

        return dp[i][mask] = Math.min(
            findSmallestTeam(i + 1, mask),
            1 + findSmallestTeam(i + 1, getNextMask(mask, people[i]))
        );
    }

    findSmallestTeamList = (i, mask) => {
        if (i >= m) {
            return;
        }

        if (findSmallestTeam(i + 1, getNextMask(mask, people[i])) < findSmallestTeam(i + 1, mask)) {
            team.push(i);
            findSmallestTeamList(i + 1, getNextMask(mask, people[i]));

        } else {
            findSmallestTeamList(i + 1, mask);
        }
    }

    findSmallestTeam(0, 0);
    findSmallestTeamList(0, 0);

    return team;
};
