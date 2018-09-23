/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for (let n = preferences.length - 1, a = preferences.length; n >= 0; n-- , a--) {
    let b = preferences[n];
    let c = preferences[b - 1];
    let d = preferences[c - 1];
    console.log(a, b, c, d);
    if (a !== c && a === d) {
      count += 1;
      console.log(count);
      preferences.length--;
    }
    else {
      preferences.length--;
    }
  }
  return count;
  // your implementation
};
