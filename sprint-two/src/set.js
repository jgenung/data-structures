var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

/*
 * Description: Takes any string and adds it to the set.
 * Complexity: O(1)
 */
setPrototype.add = function(item){
  this._storage[item]=item;
};

/*
 * Description: Takes any sting and returns a boolean reflecting whether it can be found in the set.
 * Complexity:  O(1)
 */
setPrototype.contains = function(item){
  return !!this._storage[item];
};

/*
 * Description: Takes any string and removes it from the set, if present.
 * Complexity: O(1)
 */
setPrototype.remove = function(item){
  delete this._storage[item];
};