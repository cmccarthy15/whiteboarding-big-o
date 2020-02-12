let arr = [1,6,7,3,4,8,9,2,5,10],
    testArr = [-1, 3, 8, 12, 4, 11, 7],
    testTarget = 10;

// testArr and testTarget answer is [[-1, 11], [3, 7]]
 

/**
 * 
 * 
 Write a function called
 `hasTargetSum` that receives two arguments:
   * an array of integers
   * a target integer
 
 The function should return all pairs of numbers found in the array that add up to the target number.
 hasTargetSum([-1, 3, 8, 12, 4, 11, 7], 10) ==>  [[-1, 11], [3, 7]]

hasTargetSum([-1, 3, 8, 12, 4, 11, 7], 10) ==>  [[-1, 11], [3, 7], [11, -1], [7, 3]]
hasTargetSum([-1, 3, 8, 5, 12, 4, 11, 7], 10) ==>  [[-1, 11], [3, 7], [5, 5]]
hasTargetSum([-1, 3, 8, 5, 12, 4, 11, 7, 5], 10) ==>  [[-1, 11], [3, 7], [5, 5]]

 */

function hasTargetSumNonOptimal(arr, target){ // O(n^2)
    let answers = [] // O(1) ==> Constant Time
    // looping through arrays and indexOf are Linear Time
         // [1,2,3,5].indexOf(4) ===> O(n)
    // finding an item in an object however is ConstantTime
        //{1: true, 2: true, 3: true, 5: true}[4] ==> O(1)


    for (let first = 0; first < arr.length; first++){    // runs O(n) times ==> Linear Time
        let compliment = target - arr[first]


        for(let second=0; second < arr.length; second++){   /// runs O(n) times  ==> Linear Time

            if (arr[first] + arr[second] === target){   // O(1) ==> Constant Time
                answers.push([arr[first],arr[second]])  // O(1) ==> Constant Time
            }
        }
    }
    return answers


    // .find method inside of first loop ==> also Linear so we still end up quadratric
    // sorting the array and/or splitting it 
    // converting the array into an object and using it to see if compliment exists



 /**
  * create an array to hold answers
  * loop though numbers in the array, starting with checking the first one
  * loop through the rest of the numbers
  * check the sum and if its our target sum, add the pair to our answerArray
  * return the answerArray at the end 
  */
 // this might not catch all of our clarifications (ie neg numbers) but we're gonna build it and see what happens

}

function hasTargetSum(arr, target){ 
    console.log(arr, target)
    let answers = []
    let seenNumbers = {}

    for (let first = 0; first < arr.length; first++){   // O(n)
        let compliment = target - arr[first] // O(1)
        if (seenNumbers[compliment]){ // O(1)
            answers.push([arr[first], compliment]) // O(1)
        }
        seenNumbers[arr[first]] = true // O(1)

        console.log('FIRST NUMBER', arr[first])
        console.log('COMPLIMENT', compliment)
        console.log('seen numbers', seenNumbers)

    }
    return answers

}

console.log(hasTargetSum([-1, 3, 8, 12, 4, 11, 7], testTarget))
// console.log(hasTargetSum([3,5,10,11],-1)) // []
// console.log(hasTargetSum([],13)) // []
// console.log(hasTargetSum([1,3,5,7],8))































/*********************** 
 * 
 * 
 * 
 * SECRETS BELOW DO NOT PROCEED 
 * 
 * 
 * 
 * ***********************/






const arrSum = arr => arr.reduce((a,b) => a + b, 0)

function containsAverage(arr){    // O(n)
    let sum = arrSum(arr)      // Linear O(n)         
    let average = sum / arr.length     // Constant O(1)   
    return arr.indexOf(average) != -1     // Linear O(n)
}


containsAverage(arr)

// Constant O(1) 
// Linear O(n)
// Quadratic O(n^2) 






/**
 * EXPLORING 
 * DIFFERENT VERSIONS OF 
 * HASTARGETSUM 
 * **without completed code body**
 */
// quadratic time O(n^2)
function version1m(arr, target){
    for(let i = 0; i < arr.length; i++){ // Linear Time: O(n)
        // look at each number
        for(let j = 0; j < arr.length; j++){ // Linear Time: O(n)
            // if i+j === target
            console.log('running')
        }
    }
}

// quadratic time O(n^2)
function version2(arr, target){
    for(let i = 0; i < arr.length; i++){ // Linear Time: O(n)
        let compliment = target - arr[i];
        if (arr.indexOf(compliment) > -1){  // Linear Time: O(n)
            console.log('found')
        }
    }
}


// Linear Time: O(n)
function version3(arr, target){
    let numsWeveSeen = {}
    for(let i = 0; i < arr.length; i++){ // Linear Time: O(n)
        let compliment = target - arr[i];
        if(numsWeveSeen[compliment]) console.log('found');

        numsWeveSeen[arr[i]] = true
    }
}




// Cubic time O(n^2)
function hasTargetSumCubic(arr, target){
    for(let i = 0; i < arr.length; i++){ // Linear Time: O(n)
        // look at each number
        for(let j = 0; j < arr.length; j++){ // Linear Time: O(n)
            // if i+j === target
            for(let m = 0; m < arr.length; m++){ // Linear Time: O(n)
                // if i+j === target
                console.log('running')
            }
        }
    }
}