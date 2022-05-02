const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data)
{
  this.data = data
  this.left = null
  this.right = null
}
}


class BinarySearchTree {
constructor()
{
  this.first = null
}

  root() {
   return this.first
  }

  add( data ) {
   this.first = addvalue (this.first, data);

   function addvalue (node, data) {
   if (node === null) {
     return new Node(data); }

   if (data === node.data) {
   return node;
   }

if (data < node.data) {
  node.left = addvalue (node.left, data);
}
else { node.right = addvalue (node.right, data); }
return node;
 } 
}
  

  has(data ) {
    return  searchvalue(this.first, data);
    function searchvalue(node, data) {
      if (node === null) {
      return false; 
    }
    if (data === node.data) {
    return true;
    }

    if (data < node.data ) {
      return searchvalue(node.left, data);
    }

 else { return searchvalue(node.right, data); }

  }
}

  find( data ) {
    return  findvalue(this.first, data);
    function findvalue(node, data) {
      if (node === null) {
      return null; 
    }
    if (data === node.data) {
      return node;
    }
      if (data < node.data) {
        return findvalue(node.left,data);
      }
      else { return findvalue(node.right, data); 
      }    
  }
}

  remove(/* data */) {
    
  }

  min() {
    if (this.first === null) { return null; }
    let minsize = this.first;
    while (minsize.left) {
      minsize = minsize.left; }
      return minsize.data;
  }

  max() {
if (this.first === null) { return null; }
let maxsize = this.first;
while (maxsize.right) {
  maxsize = maxsize.right; }
  return maxsize.data;
  }

}

module.exports = {
  BinarySearchTree
};