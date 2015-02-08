var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  /*
   * Description: Takes a value and adds it to the end of the list.
   * Complexity: 
   */
  list.addToTail = function(value){
    var newNode = Node(value);
    if(list.head === null){
      list.head = newNode;
      list.tail = newNode;
    }else{
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  /*
   * Description: Removes the first node from the list and returns its value.
   * Complexity: 
   */
  list.removeHead = function(){
    if(list.head !== null){
      var temp = list.head.value;
      list.head = list.head.next;
      return temp;
    }
  };

  /*
   * Description: Returns boolean reflecting whether or not the passed-in value is in the linked list.
   * Complexity: 
   */
  list.contains = function(target){
    var node = list.head;
    while(node !== null){
      if(node.value === target){
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};