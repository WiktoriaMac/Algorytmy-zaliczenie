// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(array) {
    const length = array.length;
  
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  
    return array;
  }
  
  function selectionSort(array) {
    const length = array.length;
  
    for (let i = 0; i < length; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
  
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  
    return array;
  }
  
  function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  module.exports = { bubbleSort, selectionSort, mergeSort, merge };