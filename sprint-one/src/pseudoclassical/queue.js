/*
 * Queue Pseudoclassical Instantiation
 */
var Queue = function() {
  this.storage = {};
  this.length = 0;
};

Queue.prototype.enqueue = function(value){
  for(var i = 0; i < this.length+1; i++){
    var temp = this.storage[i];
    this.storage[i] = value;
    value = temp;
  }
  this.length++;
};

Queue.prototype.dequeue = function(){
  var temp = this.storage[this.length-1];
  if(this.length > 0){
    delete this.storage[this.length-1];
    this.length--;
    return temp;
  }
};

Queue.prototype.size = function(){
  return this.length;
};


