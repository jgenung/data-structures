var BinarySearchTree = function(value){
    var binarySearchTree = Object.create(searchMethods);
    binarySearchTree.value = value;
    binarySearchTree.right = null;
    binarySearchTree.left = null;
    return binarySearchTree;
};

var searchMethods = {};

/*
 * Description: Accepts a value and places in the tree in the correct position.
 * Complexity: O(log(n))
 */
searchMethods.insert = function(value){
  var newNode = BinarySearchTree(value);

  if(this.value===null){
    this.value = value;
    return;
  }

  var traverseTree = function(node)
  {
    if (node.value > value) {
      if (node.left === null) {
        node.left = newNode;
      }else {
        traverseTree(node.left);
      }
    }else {
      if (node.right === null) {
        node.right = newNode;
      }else {
        traverseTree(node.right);
      }
    }
  }
  
  traverseTree(this);
};

/*
 * Description: Accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
 * Complexity: O(log(n))
 */
searchMethods.contains = function(value){
var found = false;

  var valueSearch = function(node){
    if(node === null){ 
      return; 
    }
    
    if(node.value===value){
      found = true;
    }
    valueSearch(node.left);
    valueSearch(node.right);
  }

  valueSearch(this);
  return found;
};


/*
 * Description: Accepts a callback and executes it on every value contained in the tree.
 * Complexity: O(n)
 */
searchMethods.depthFirstLog = function(callback){
  var recursion = function(node){

    if(node === null){ return; }
    callback(node.value);
    recursion(node.left);
    recursion(node.right);
  }

  recursion(this);

};