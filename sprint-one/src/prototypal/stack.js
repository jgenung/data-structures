/*
 * Stack Prototypal Instantiation
 */
var Stack = function() {

  var newStack = Object.create(stackMethods);
  newStack._storage = {};
  newStack._top = 0;

  return newStack;

};

var stackMethods = {

  push: function(value){
    this._storage[++this._top] = value;
  },

  pop: function(){
    var temp = this._storage[this._top];
    if(this._top > 0){
      delete this._storage[this._top--];
    }
    return temp;
  },

  size: function(){
    return this._top;
  }

};


