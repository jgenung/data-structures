var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

/*
 * Description: Takes a key and a value and insert the value into the hash table.
 * Complexity: O(1)
 */
HashTable.prototype.insert = function(k, v) {
  var i = getIndexBelowMaxForKey(k, this._limit);

  var object = this._storage.get(i);
  if(!object)
  {
    object = {};
    object[k] = v;
    this._storage.set(i, object);
    this._count++;
  }
  else if(object[k] === v)
  {
      return;
  }
  else
  {
    object[k] = v;
    this._storage.set(i, object);
    this._count++;
  }

  if(this._count > (this._limit * 0.75)){
    this._resize(this._limit * 2);
  }
};

/*
 * Description: Takes a key and returns the value associated with the key.
 * Complexity: O(n)
 */
HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var object = this._storage.get(i);
  for(var key in object){
    if(key === k){
      return object[key];
    }
  }
};

/*
 * Description: Takes a key and removes the value associated with that key from the hash table.
 * Complexity: O(n)
 */
HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var object = this._storage.get(i);
  for(var key in object){
    if(key === k){
      object[key] = null;
      //delete object[key];
      this._count--;
      //debugger;
      if(this._count < this._limit * 0.25){
        this._resize(this._limit/2);
      }
    }
  }
};

/*
 * Description: Takes a limit and re-sizes the limit of the Limited Array.
 * Complexity: O(n)
 */
HashTable.prototype._resize = function(newLimit){
  var oldStorage = this._storage;

  this._limit = newLimit;
  this._storage = LimitedArray(newLimit);
  this._count = 0;

  oldStorage.each(function(bucket){
    for(var key in bucket){
      this.insert(key, bucket[key]);
    }
  }.bind(this));
};




