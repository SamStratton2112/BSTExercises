class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // if there is no root then the passed val becomes the root.
    if(!this.root){
      this.root = new Node (val);
      // this referes to the whole tree 
      return this;
    }
    // if there is a root, insert accordingly 
    let current = this.root;
    // create an intentional infinante loop that will end when a
    // return statement is reached 
    while(true){
      // handle left side
      if (val<current.val){
        // if there is no left node, add val as new left node 
        if(!current.left){
          current.left = new Node(val);
          return this;
        }else{
          current = current.left;
        }
      // handle right side
      }else if (val> current.val){
        // if there is no right node, add val as new right node 
        if(!current.right){
          current.right = new Node(val);
          return this;
        }else{
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    // if there is no root add val as root
    if(!this.root){
      this.root = new Node(val);
      return this;
    }
    // Determine left or right side
    if(val< current.val){
      if(!current.left){
        current.left = new Node(val);
        return this;
      }
      // call self to run function until desired output 
      return this.insertRecursively(val, current.left);
    }else{
      if(!current.right){
        current.right = new Node(val);
        return this;
      }
      // call self to run function until desired output 
      return this.insertRecursively(val, current.right);
    }

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let curNode = this.root;
    let found = false

    if(val === curNode.val) return curNode;

    while(curNode && !found){
      // determin left or right to search 
      if(val<curNode.val){
        curNode = curNode.left
      }else if(val > curNode.val){
        curNode = curNode.right;
      }else{
        // this will stop the while loop 
        found = true;
      }
    }
    if(!found) return undefined
    return curNode;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current=this.root) {
    // if tree is empty return undefined 
    if(!current) return undefined;
    // determin left or right and call self until desired outcome
    if(val<current.val){
      return this.findRecursively(val, current.left);
    }else if(val>current.val){
      return this.findRecursively(val, current.right);
    }
    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      // add node to data array to keep track of visited nodes
      data.push(node.val);
      // if there is a left child, go left. Same for right 
      node.left && traverse(node.left); 
      node.right && traverse(node.right); 
    }
    traverse(current);
    return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data=[];
    let current=this.root;

    function traverse(node){
      node.left && traverse(node.left); 
      data.push(node.val);
      node.right && traverse(node.right);
    }

    traverse(current);
    return data;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right); 
      data.push(node.val); 
    }

    traverse(current);
    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }
}

module.exports = BinarySearchTree;
