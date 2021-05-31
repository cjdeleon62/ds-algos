function countUniqueValues(values) {
    // check invalid inputs
    if (!values.length) return 0;
    if(values.length === 1) return 1;

    // create pointers
    let i = 0;
    let j = 1;
    
    // iterate through values and check uniqueness until j === arr.length - 1
    while(j < values.length) {
        // if unique, store at index i, then increment j and i and continue
        if (values[i] !== values[j]) {
            values[++i] = values[j++];
        }
        // else increment j
        else {
            j++;
        }
    }
    
    return ++i;
}

module.exports = countUniqueValues;