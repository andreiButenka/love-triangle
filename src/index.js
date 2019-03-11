/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;  
  for (let i = 1; i <= preferences.length; i++) {
    let loveOfFirst = preferences[i - 1];
    if ( i == loveOfFirst) continue; // checking if he loves himself
    let loveOfSecond = preferences[loveOfFirst - 1];
    if (loveOfSecond == i) continue; // checking if lover2 loves lover1 too
    let loveOfThird = preferences[loveOfSecond - 1];
    if (loveOfThird == loveOfFirst) continue; // checking if lover3 loves lover2 too 
    if (loveOfThird == i) { 
      count += 1;
    }
  }
  return count / 3;
};

