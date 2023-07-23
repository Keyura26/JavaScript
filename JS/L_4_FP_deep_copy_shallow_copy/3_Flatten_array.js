// input  -> nested array
let input = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];
// output -> single level of array with num 
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// [4, 5] -> [4,5]
// [6, 7, 8, [9, 10, 11]] -> [6, 7, 8, 9, 10, 11]

function flatten(srcArr) {
    let newArr = [];
    for (let i = 0; i < srcArr.length; i++) {
        // check if elemnt -> array -> 
        let elem = srcArr[i];
        let isElemArr = Array.isArray(elem);
        if (isElemArr) {
            // flatten it again
            //flatten always gives an array
            let smalleFlattenArr = flatten(elem);
            console.log("20",smalleFlattenArr);
            // [6, 7, 8, 9, 10, 11] if we directly push it to new array it becomes nested array 
            // to remove this level of nesting we use spread
            newArr.push(...smalleFlattenArr);
        } else {
            //push it to newArr;
            newArr.push(elem);
        }
    }
    return newArr;
}
// let flattenedArr = flatten(input);
// console.log(flattenedArr);

/**
 * Question  -> Array.protype.flat()  -> flatten fn -> option of levels also
 * */
//flat(1) flattens first level , 2 removes second level and infinity removes all levels
let flattenOutput = input.flat();
console.log(flattenOutput);