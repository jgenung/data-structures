/*
 * Queue Prototypal Instantiation
 */
var Queue = function() {
  var queueInstance = Object.create(queueMethods);
  queueInstance._storage = {};
  queueInstance._start = 0;
  queueInstance._end = 0;
  return queueInstance;
};

var queueMethods = {
  enqueue:function(value){
    this._storage[this._end++] = value;
  },
  
  dequeue:function(){
    var temp = this._storage[this._start];
    if(this.size()){
      delete this._storage[this._start++];
    }
    return temp;
  },
  
  size:function(){
    return this._end-this._start;
  }
};


