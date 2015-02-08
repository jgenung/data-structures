/*
 * Queue Prototypal Instantiation
 */
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
    var queueInstance = Object.create(queueMethods);
    queueInstance.storage = {};
    queueInstance.length = 0;
    return queueInstance;
};

var queueMethods = {
    enqueue:function(value){
        var len = this.length;
        var temp;
        for(var i=0; i<len+1;i++)
        {
             temp = this.storage[i];
            this.storage[i]=value;
            value = temp;
        }
        this.length++;

    },
    dequeue:function(){
        if(this.length>0)
        {
            var temp = this.storage[this.length-1];
            delete this.storage[this.length-1];
            this.length--;
            return temp;
        }

    },
    size:function(){
        return this.length;
    }
};


