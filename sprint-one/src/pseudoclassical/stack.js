/*
 * Stack Pseudoclassical Instantiation
 */
var Stack = function() {
  this._storage = {};
  this._top = 0;
};

Stack.prototype.push = function(value){
  this._storage[++this._top] = value;
};

Stack.prototype.pop = function(){
  var temp = this._storage[this._top];
  if(this._top > 0){
    delete this._storage[this._top--];
  }
  return temp;
};

Stack.prototype.size = function(){
  return this._top;
};


