var Graph = function(node){
  this.graph = {};
};

/*
 * Description: Takes a new node and adds it to the graph.
 * Complexity: O(1)
 */
Graph.prototype.addNode = function(node){
  this.graph[node] = {}
};

/*
 * Description: Takes any node and returns a boolean reflecting whether it can be found in the graph.
 * Complexity: O(1)
 */
Graph.prototype.contains = function(node){
  return !! this.graph[node];
};

/*
 * Description: Takes any node and removes it and its connections from the graph, if present. 
 * Complexity:
 */
Graph.prototype.removeNode = function(node){
  var obj = this.graph[node];
  for(var key in obj){
    delete this.graph[key][node];
  }
  delete this.graph[node];
};

/*
 * Description: Returns a boolean reflecting whether or not two nodes are connected.
 * Complexity: O(1)
 */
Graph.prototype.hasEdge = function(fromNode, toNode){
  return !!(this.graph[fromNode][toNode] && this.graph[toNode][fromNode]);
};

/*
 * Description: Creates an edge (connection) between two nodes if they both are present within a graph.
 * Complexity: O(1)
 */
Graph.prototype.addEdge = function(fromNode, toNode){
  this.graph[fromNode][toNode] = toNode;
  this.graph[toNode][fromNode] = fromNode;
};

/*
 * Description: Removes the connection between two nodes.
 * Complexity: O(1)
 */
Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.graph[fromNode][toNode];
  delete this.graph[toNode][fromNode];
};

/*
 * Description: Traverses through the graph, calling a passed in function once on each node.
 * Complexity: O(n)
 */
Graph.prototype.forEachNode = function(callback){
  for(var key in this.graph){
    callback(key);
  }
};



