function Node(val, next) {
  this.data = val;
  this.next = next;
}

function SinglyLinkedList() {
  this.length = 0;
  this.head = null;
}

SinglyLinkedList.prototype.__getNodeAt = function(index) {

  // if(!this.head){
  //   return undefined;
  // }
  //
  // var currentNode = this.head;
  // var counter = 0;
  // while(counter < index){
  //   currentNode = currentNode.next;
  //   counter++;
  // }
  // return node;
};

SinglyLinkedList.prototype.push = function(val) {

  var newNode = new Node(val, null);

  if(!this.head){
    this.head = newNode;
    this.length = 1;
    return this;
  }

  var currentNode = this.head;

  while(currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = newNode;
  this.length++;
  return this;
};

SinglyLinkedList.prototype.clear = function() {
  // if(!this.head){
  //   return
  // }
  // var currentNode = this.head;
  // while(currentNode.next){
  //   currentNode.data = null;
  //   currentNode = currentNode.next;
  // }
  // currentNode.data = null;
  // this.length = 0;
};

SinglyLinkedList.prototype.pop = function() {

  if(!this.head){
    return undefined;
  }

  if(!this.head.next){
    var data = this.head.data;
    this.head.data = null;
    this.length--;
    return data;
  }

  var currentNode = this.head;
  while(currentNode.next){
    var data = currentNode.next.data;
    if(!currentNode.next.next){
      currentNode.next = null;
      this.length--;
      return data;
    } else {
      currentNode = currentNode.next;
    }
  }
};

SinglyLinkedList.prototype.unshift = function(val) {
  if(!this.head){
    var node = new Node(val);
    this.length = 1;
    this.head = node;
  }

  var node = new Node(val);
  currentNode = this.head;

  node.next = currentNode;
  this.head = node;
  this.length++;
};

SinglyLinkedList.prototype.shift = function() {
  if(!this.head){
    return;
  }
  var data = this.head.data;
  this.head.data = null;
  this.head = this.head.next;
  this.length--;
  return data;
};

SinglyLinkedList.prototype.get = function(index) {

  if(!this.head){
    return;
  }

  var currentNode = this.head;
  var counter = 0;
  while(counter < index){
    if(currentNode.next){
      currentNode = currentNode.next;
      counter++;
    } else {
      return;
    }
  }
  return currentNode.data;
};

SinglyLinkedList.prototype.set = function(index, val) {
  if(!this.head){
    return;
  }
  var currentNode = this.head;
  var counter = 0;
  while(counter < index){
    if(currentNode.next){
      currentNode = currentNode.next;
      counter++;
    }else{
      return;
    }
  }
  currentNode.data = val;
};

SinglyLinkedList.prototype.remove = function(index) {

  if(!this.head){
    return;
  }

  if(index === 0){
    var data = this.head.data;
    this.head = null;
    this.length--;
    return data;
  }

  var currentNode = this.head;
  var counter = 0;

  while(currentNode.next){
    if(counter === index - 1) {
      var data = currentNode.next.data;
      currentNode.next = currentNode.next.next;
      this.length--;
      return data;
    } else if(!currentNode.next.next){
      return;
    } else {
      currentNode = currentNode.next;
      counter++;
      }
    }
  };

SinglyLinkedList.prototype.reverse = function() {

};

SinglyLinkedList.prototype.reverseRecursive = function() {

};

module.exports = SinglyLinkedList;
