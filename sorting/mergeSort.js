
function merge(left, right) {
    let sortedArr = [] // the sorted items will go here
    while (left.length && right.length) {
      // Insert the smallest item into sortedArr
      if (left[0] < right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }
    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right]
  }
//   merge([1, 4], [2, 6, 9]) // [1, 2, 4, 6, 9]

function mergeSort(arr) {
    // Base case
    console.log(arr , "first");
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    // Recursive calls
    console.log(arr , "wwww");
    let left = mergeSort(arr.slice(0, mid)) // 6 ==> 3
    console.log(arr , " zzz ");
    let right = mergeSort(arr.slice(mid)) // ==>
    return merge(left, right)
  }
  mergeSort([3, 5, 8, 5, 99, 1]) // [1, 3, 5, 5, 8, 99]