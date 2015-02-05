var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
    var length = 0;

  someInstance.enqueue = function(value){
    for(var i = 0; i < length+1; i++){
      var temp = storage[i];
      storage[i] = value;
      value = temp;
    }
    length++;
  };

  someInstance.dequeue = function(){

        if(length>0)
        {
            var temp = storage[length-1];
            delete storage[length-1];
            length--;
            return temp;
        }
  };

  someInstance.size = function(){
      return length;
  };

  return someInstance;
};
