/*
 * Stack Functional Instantiation with Shared Methods
 */
var Stack = function() {
  var newStack = {};
  newStack._storage = {};
  newStack._top = 0;
  
  newStack.push = stackMethods.push;
  newStack.pop = stackMethods.pop;
  newStack.size = stackMethods.size;

  return newStack;
}

var stackMethods = {};

stackMethods.push=function(value){
    this._storage[++this._top] = value;
}

stackMethods.pop = function(){
  var temp = this._storage[this._top];
  if(this._top > 0) {
    delete this._storage[this._top--];
  }
  return temp;
}

stackMethods.size = function()
{
    return this._top;
}
