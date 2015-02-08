var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = []; 

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

/*
 * Description: Takes any value and adds that node to the tree.
 * Complexity: O(1)
 */
treeMethods.addChild = function(value){
    var newNode = Tree(value);
    this.children.push(newNode);
};

/*
 * Description: Takes any input and returns a boolean reflecting whether it can be found in the tree.
 * Complexity: O(n)
 */
treeMethods.contains = function(target){

  var found = false;

  var searchTree = function(arrayOfChildren)
  {
    for( var i=0; i<arrayOfChildren.length; i++)
    {
        var parent = arrayOfChildren[i];

         if(parent.children.length > 0) {
             searchTree(parent.children);
          }
         
         else if(parent.value === target) {
                 found = true; 
          }
    }
    return found;
  }
  return searchTree(this.children);
};

