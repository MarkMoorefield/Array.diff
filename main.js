// The first thing I did was create the function that takes in a and b as the two arrays.
// The next thing I did was grab a and attach the filter method to it. 
// In the filter I asked it to check every element (elem) and check that it DOESN'T include b.
// It then returns the elements that aren't the value of b. 
function arrayDiff(a, b) {
    return a.filter((elem) => !b.includes(elem))
   }