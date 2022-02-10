function findAPeak(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    //Else if a[n/2] < a[n/2 + 1] then only look at right half n/2 + 1 . . . n to look for peak
    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else if (arr[mid] < arr[mid - 1]) { //If a[n/2] < a[n/2 − 1] then only look at left half 1 . . . n/2 − − − 1 to look for peak
      end = mid - 1;
    } else { //Else n/2 position is a peak:
        return mid
    }
  }
    return start
}
console.log(findAPeak([9, 7, 10, 3, 2, 1, 4, 5]));
