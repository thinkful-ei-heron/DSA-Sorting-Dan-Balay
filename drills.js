/**
 * #1
 * 
 * Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

What is the resulting list that will be sorted after 3 recursive calls to mergesort?
What is the resulting list that will be sorted after 16 recursive calls to mergesort?
What are the first 2 lists to be merged?
Which two lists would be merged on the 7th merge?
 

21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

a) [21]
b) [2]
c) [1, 21]
d) [28, 29], [2, 9]


2. Understanding quicksort
1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. 
After the first partition step has been completed, the contents of the array is in the following 
order: 3 9 1 14 17 24 22 20. 
Which of the following statements is correct about the partition step? Explain your answer.

The pivot could have been 17, but could not have been 14
The pivot could have been either 14 or 17
Neither 14 nor 17 could have been the pivot
The pivot could have been 14, but could not have been 17

A: Both 14 and 17 are in the correct place in the array, either one could have been the pivot.



2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting 
list after the second partitioning according to the quicksort algorithm.

When using the last item on the list as a pivot
When using the first item on the list as a pivot

14, 17, 13, 15, 19, 10, 3, 16, 9, 12



pivot = 12;

i = 5
j = 0

10, 17, 13, 15, 19, 14, 3, 16, 9, 12

i = 6
j = 1

10, 3, 13, 15, 19, 14, 17, 16, 9, 12

i = 7
j = 2

10, 3, 9, 15, 19, 14, 17, 16, 13, 12

i = 8
j = 3

10, 3, 9, 12, 19, 14, 17, 16, 13, 15

middle = 3

quicksort on 10, 3, 9, 12

pivot = 12

i = 1
j = 1

returns j = 3

answer-> 10, 3, 9, 12

b) with first item as pivot

pivot = 14
i, j = 0

i = 2
j = 1

13, 17, 14, 15, 19, 10, 3, 16, 9, 12

i = 5
j = 2

13, 10, 14, 15, 19, 17, 3, 16, 9, 12

i = 6
j = 3

13, 10, 3, 15, 19, 17, 14, 16, 9, 12

i = 8
j = 4

13, 10, 3, 9, 19, 17, 14, 16, 15, 12

i = 9
j = 5

13, 10, 3, 9, 12, 17, 14, 16, 15, 19

place pivot

13, 10, 3, 9, 12, 14, 17,  16, 15, 19

quicksort 13, 10, 3, 9, 12, 14

pivot = 13
i,j = 0

10, 13, 3, 9, 12, 14

i = 2
j = 1

10, 3, 13, 9, 12, 14

i = 3
j = 2
10, 3, 9, 13, 12, 14

i = 4
j = 3

10, 3, 9, 12, 13, 14

i = 5
j = 4

pivot already in place

answer: 10, 3, 9, 12, 13, 14


 */

//let arr = [24, 9, 1, 3, 17, 22, 20, 14];

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

//console.log(partition(arr, 0, arr.length));
let arr = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  32,
  26,
  2,
  14,
  33,
  45,
  72,
  56,
  44,
  21,
  88,
  27,
  68,
  15,
  62,
  93,
  98,
  73,
  28,
  16,
  46,
  87,
  28,
  65,
  38,
  67,
  16,
  85,
  63,
  23,
  69,
  64,
  91,
  9,
  70,
  81,
  27,
  97,
  82,
  6,
  88,
  3,
  7,
  46,
  13,
  11,
  64,
  76,
  31,
  26,
  38,
  28,
  13,
  17,
  69,
  90,
  1,
  6,
  7,
  64,
  43,
  9,
  73,
  80,
  98,
  46,
  27,
  22,
  87,
  49,
  83,
  6,
  39,
  42,
  51,
  54,
  84,
  34,
  53,
  78,
  40,
  14,
  5
];

//console.log(quickSort(arr));

//# 4 implement mergesort

function mSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mSort(left);
  right = mSort(right);
  return merge(left, right, array);
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}

//console.log(mSort(arr));

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
               and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(key, item) {
    let currNode = this.find(key);
    let tempNode = new _Node(currNode.value, currNode.next);
    currNode.value = item;
    currNode.next = tempNode;
  }

  insertAfter(key, item) {
    let currNode = this.find(key);
    let tempNode = new _Node(item, currNode.next);
    tempNode.next = currNode.next;
    currNode.next = tempNode;
  }

  insertAt(position, item) {
    let currNode = this.head;
    for (let i = 0; i <= position; i++) {
      currNode = currNode.next;
    }
    let tempNode = new _Node(currNode.value, currNode.next);
    currNode.value = item;
    currNode.next = tempNode;
  }
}

function size(ll) {
  if (!ll.head) return 0;
  let size = 0;
  let currNode = ll.head;
  while (currNode.next !== null) {
    size += 1;
    currNode = currNode.next;
  }
  return size + 1;
}

function display(ll) {
  console.log('_________________Linked list:_____________________');
  let currNode = ll.head;
  while (currNode.next !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
  console.log(currNode.value);
}

function middleOfList(position, ll) {
  let currNode = ll.head;
  for (let i = 0; i < position; i++) {
    currNode = currNode.next;
  }

  return currNode;
}

let LL = new LinkedList();
LL.insertLast(3);
LL.insertLast(7);
LL.insertLast(2);
LL.insertLast(20);
LL.insertLast(43);
LL.insertLast(5);
LL.insertLast(1);
LL.insertLast(100);
LL.insertLast(29);
LL.insertLast(33);

function sortLinkedList(list) {
  const sizeList = size(list);
  if (sizeList <= 1) {
    return list;
  }
  const middle = Math.floor(sizeList / 2);
  let left = splitList(list, 0, middle);
  let right = splitList(list, middle, sizeList);

  left = sortLinkedList(left);
  right = sortLinkedList(right);

  return mergeList(left, right);
}

function mergeList(left, right) {
  let newList = new LinkedList();
  let leftCurrNode = left.head;
  let rightCurrNode = right.head;

  while (leftCurrNode && rightCurrNode) {
    if (leftCurrNode.value < rightCurrNode.value) {
      newList.insertLast(leftCurrNode.value);
      leftCurrNode = leftCurrNode.next;
    } else {
      newList.insertLast(rightCurrNode.value);
      rightCurrNode = rightCurrNode.next;
    }
  }

  while (leftCurrNode) {
    newList.insertLast(leftCurrNode.value);
    leftCurrNode = leftCurrNode.next;
  }
  while (rightCurrNode) {
    newList.insertLast(rightCurrNode.value);
    rightCurrNode = rightCurrNode.next;
  }

  return newList;
}

function splitList(list, start, end) {
  let newList = new LinkedList();
  let currNode = list.head;
  if (start !== 0) {
    currNode = middleOfList(start, list);
  }
  for (let i = start; i < end; i++) {
    newList.insertLast(currNode.value);
    currNode = currNode.next;
  }
  return newList;
}

//console.log(display(sortLinkedList(LL)));

//6. bucketsort (tried multiple ways to implement but werent successful)

// function bucketSort(array, min, max) {
//   let minIndex = array.indexOf(min);
//   let maxIndex = array.indexOf(max);
//   swap(array, minIndex, 0);
//   swap(array, maxIndex, array.length - 1);

//   let newMin = array[1];

//   for (let i = 1; i < array.length - 1; i++) {
//     if (array[i] < newMin) {
//         swap(array, i, );
//         newMax = array[i];

//     }
//   }
// }

//console.log(bucketSort([6, 40, 70, 42, 2, 12, 13], 2, 70));

//2, 40, 13, 42, 12, 6, 70

// 12, 40, 70, 42, 2, 6, 13
// 12, 40, 70, 42, 2, 6, 13
// 12, 40, 42, 70, 2, 6, 13
// 

// 7.
function randomize(arr) {
  for (let i = 0; i < arr.length; i++) {
    let rand = Math.floor(Math.random() * arr.length);
    swap(arr, i, rand);
  }

  return arr;
  //console.log(rand);
}

console.log(randomize([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 8.
//Just use quicksort since you can evaluate strings with comparison operators

let books = [
  'Bob',
  'Alice', 
  'John', 
  'doe', 
  'Stacy',
  'jill',
  'Balay',
  'Dan'
];

for (let i = 0; i < books.length; i++) {
  books[i] = books[i].toLowerCase();
}

//console.log(quickSort(books));