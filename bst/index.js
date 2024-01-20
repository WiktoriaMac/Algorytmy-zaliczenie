// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  
    insert(data) {
      // If the data to insert is less than the current node's data,
      // move to the left subtree.
      if (data < this.data) {
        if (this.left === null) {
          this.left = new Node(data);
        } else {
          this.left.insert(data);
        }
      } else {
        // If the data to insert is greater than or equal to the current node's data,
        // move to the right subtree.
        if (this.right === null) {
          this.right = new Node(data);
        } else {
          this.right.insert(data);
        }
      }
    }
  
    contains(data) {
      // If the current node's data is equal to the target data, return the current node.
      if (this.data === data) {
        return this;
      }
  
      // If the target data is less than the current node's data, search in the left subtree.
      if (data < this.data) {
        if (this.left === null) {
          return null; // Target data not found.
        }
        return this.left.contains(data);
      } else {
        // If the target data is greater than the current node's data, search in the right subtree.
        if (this.right === null) {
          return null; // Target data not found.
        }
        return this.right.contains(data);
      }
    }
  }
  
  module.exports = Node;