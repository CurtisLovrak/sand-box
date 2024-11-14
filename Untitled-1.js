// trim length quick maffs

// const findTrim = (a) => {

//     let feetArr = a;

//     feetArr.sort((a, b) => {return a - b});

//     // console.log(feetArr)

//     let counter = 0;

//     const leftOvers = [], stillHave = [];

//     for (let i = feetArr.length-1; i >= 0; i --) {
//         if (feetArr[i] >= 8) {
//             leftOvers.push(feetArr[i] - 8)
//             counter++
//         }
//         else {
//             stillHave.push(feetArr[i])
//         }
//     }
//     // the above is useless if the trim pieces are less than 8' I've noticed;

//     console.log(leftOvers, stillHave)

//     leftOvers.sort((a, b) => {return a - b});

//     let l = 0, r = stillHave.length - 1;

//     while (r >= 0) {
//         if (leftOvers.length > 0) {
//             if (stillHave[r] + leftOvers[l] < 8) {
//                 console.log(stillHave[r], leftOvers[l])
//                 const remaining = 8 - (stillHave[r] + leftOvers[l]);
//                 leftOvers.shift(); // Remove the smallest value from leftOvers
//                 // stillHave[r] += remaining;
//                 leftOvers.push(remaining)
//                 leftOvers.sort((a, b) => {return a - b});
//                 // r--;
//                 // counter++;
//             } else {
        
//                 // r--;
//                 // counter++;
//             }
//         }
//         else if (stillHave[r] + stillHave[l] < 8) {
//                 console.log(stillHave[r], stillHave[l])
//                 const remaining = 8 - (stillHave[r] + stillHave[l]);
//                 stillHave.shift(); // Remove the smallest value from leftOvers
//                 // stillHave[r] += remaining;
//                 leftOvers.push(remaining)
//                 leftOvers.sort((a, b) => {return a - b});
//                 // r--;
//                 // counter++;
//         }
            
//         else {
//             leftOvers.push(8 - stillHave[r]);
//             leftOvers.sort((a, b) => {return a - b});
//             // r--;
//             // counter++;
//         }
//         r--;
//         counter++;
//     }
//     console.log(leftOvers)
//     return counter;
// }

const findTrim = (trimLengths) => {
  // Sort the trim lengths in descending order
  trimLengths.sort((a, b) => b - a);
    
  let piecesNeeded = 0;
  let currentPieceLength = 0;

  for (const length of trimLengths) {
      currentPieceLength += length;

      if (currentPieceLength >= 8) {
          // We can make a piece from the accumulated lengths
          piecesNeeded++;
          currentPieceLength = 0; // Reset the current piece length
      }
  }

  // If there are remaining accumulated lengths, we need one more piece
  if (currentPieceLength > 0) {
      piecesNeeded++;
  }

  return piecesNeeded;
}

const findTrim2 = (trim) => {
    trim.sort((a, b) =>  {return a - b});

    let counter = 0;

    const leftOvers = [];
    // when you trim a piece, push the remainder into an accumulator.
    // check if accumulator contains the current trim piece needed. 

    const trimSticks = Array(28).fill(8);

    //check if accumulator has length
    //start with largest piece
    //push leftover into accumulator
    //search accumulator for the next largest piece in the array
    //we want to use the smallest piece though, so sort though accumulator array
    while (trim.length > 0) {
        if (leftOvers.length > 0) {
            let spare = false;
            for (let i = 0; i < leftOvers.length; i ++) {
                console.log("leftovers")
                if (trim[trim.length-1] + leftOvers[i] > 8) {
                    spare = true;
                    leftOvers.push(trim[trim.length-1] + leftOvers[i] - 8);
                    leftOvers.splice(i, 1)
                    console.log("leftOvers")
                    break;
                }
            }
            if (spare === false) {
                leftOvers.push(8 - trim[trim.length-1]);
            }
        }
        else {
            leftOvers.push(8 - trim[trim.length-1]);
        }
        console.log(leftOvers);
        leftOvers.sort((a, b) => {return a - b})
        trim.pop();
        counter ++;
    }
    return counter;
}

const bigTrim = [4.3, 4.3, 6.25, 6.25, 2.3, 2.3, 2.3, 2.3, 6.25, 6.25, 6.25, 6.25, 4.6, 4.6, 6.25, 6.25, 2.3, 2.3, 2.3, 2.3, 6.25, 6.25, 6.25, 6.25, 4.6, 4.6, 6.25, 6.25];
const smallTrim = [3.6, 3.6, 5.6, 5.6, 1.6, 1.6, 1.6, 1.6, 5.6, 5.6, 5.6, 5.6, 4, 4, 5.6, 5.6, 1.6, 1.6, 1.6, 1.6, 5.6, 5.6, 5.6, 5.6, 4, 4, 5.6, 5.6];

// console.log(findTrim2(bigTrim))
// console.log(bigTrim.length)
// console.log(findTrim(smallTrim))
// console.log(smallTrim.length)

