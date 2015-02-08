
/*
 * Queue Functional Instantiation
 */
var Queue = function(){
  var someInstance = {};
  var storage = {};
  var start = 0;
  var end = 0;

  someInstance.enqueue = function(value){
    storage[end++] = value;
  };

  someInstance.dequeue = function(){
    var temp = storage[start];
    if(this.size()){
      delete storage[start++];
    }
    return temp;
  };

  someInstance.size = function(){
    return end - start;
  };

  return someInstance;
};
