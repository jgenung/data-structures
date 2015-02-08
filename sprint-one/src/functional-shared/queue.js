/*
 * Queue Functional Instantiation with Shared Methods
 */
var Queue = function(){
  var newQueue = {};
  newQueue._storage = {};
  newQueue._start = 0;
  newQueue._end = 0;

  newQueue.enqueue = queueMethods.enqueue;
  newQueue.dequeue = queueMethods.dequeue
  newQueue.size = queueMethods.size;

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this._storage[this._end++] = value;
};

queueMethods.dequeue = function()
{
  var temp = this._storage[this._start];
  if(this.size()){
    delete this._storage[this._start++];
  }
  return temp;
};
queueMethods.size = function(){
  return this._end-this._start;
};

