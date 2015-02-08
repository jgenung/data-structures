/*
 * Stack Functional Instantiation
 */
var Stack = function(){
  var someInstance = {};
  var storage = {};
  var top = 0;

  someInstance.push = function(value){
    storage[++top] = value;
  };

  someInstance.pop = function(){
    var popVar = storage[top];
    if(top > 0){
        delete storage[top--];
    }
    return popVar;
  };

  someInstance.size = function(){
    return top;
  };

  return someInstance;
};
