var Stack = function() {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    var newStack = {};
    newStack.storage = {};
    newStack.length = 0;
    extend(newStack, stackMethods);
    return newStack;
}

var extend  = function(to, from)
{
   for(var key in from)
   {
       to[key] = from[key];
   }
  }
var stackMethods = {};

// push
stackMethods.push=function(value)
{
    this.storage[this.length] = value;
    this.length++;
}

//pop
stackMethods.pop = function()
{
    if(this.length>0) {
        var temp = this.storage[this.length - 1];
        delete this.storage[this.length - 1];
        this.length--;
        return temp;
    }
}
//size
stackMethods.size = function()
{
    return this.length;
}
