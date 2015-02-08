/*
 * Queue Functional Instantiation with Shared Methods
 */
var Queue = function(){
    var newQueue = {};
    newQueue.newStorage = {};
    newQueue.length = 0;
    extend(newQueue,queueMethods);
    return newQueue;
};

var extend = function(to, from){
  for(var key in from){
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value)
{
    var temp;
    for(var i=0; i<this.length+1;i++)
    {
        temp = this.newStorage[i];
        this.newStorage[i] = value;
        value = temp;
    }
    this.length++;
};

queueMethods.dequeue = function()
{
    if(this.length>0)
    {
        var temp = this.newStorage[this.length-1];
        delete this.newStorage[this.length-1];
        this.length--;
        return temp;

    }
};
queueMethods.size = function(){
    return this.length;
};

