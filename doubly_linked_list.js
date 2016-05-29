function Node(val, next, prev) {
  this.val = val;
  this.next = next;
  this.prev = prev;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoublyLinkedList.prototype.__getNodeAt = function(index) {

};

DoublyLinkedList.prototype.push = function(val) {
  if(!this.head){
    var newNode = new Node(val, null, null);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
    return this;
  }

  if(this.head){
    var node = new Node(val, null, this.tail);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }
  console.log(this)
};

DoublyLinkedList.prototype.clear = function() {

};

DoublyLinkedList.prototype.pop = function() {

  if(!this.head){
    return undefined;
  }

  if(this.head){
    if(this.head.next === null){
      var data = this.head.val;
      this.head = null;
      this.length--;
      return data;
    }
    if(this.head.next){
      var data = this.tail.val;
      this.tail = this.head;
      this.length--;
      return data;
    }
  }

  };

DoublyLinkedList.prototype.unshift = function(val) {

  if(!this.head){
    return undefined;
  }

  if(this.head){
    var node = new Node(val, this.head, null);
    this.head = node;
    this.head.next.prev = this.head;
    this.length++;
  }
};

DoublyLinkedList.prototype.shift = function() {

  if(!this.head){
    return undefined;
  }

  if(this.head){
    var data = this.head.val;
    this.length--;
    if(!this.head.next){
      this.head = null;
      this.tail = null;
      return data;
    } else {
      this.head.next.prev = null;
      this.head = this.head.next;
      return data;
    }
  }
};

DoublyLinkedList.prototype.get = function(index) {

    if(!this.head){
      return undefined;
    }

    var counter = 0;
    var currentNode = this.head;
    while(currentNode){
      var data = currentNode.val;
      if(counter === index){
        return data;
      } else if (counter < index && currentNode.next){
        currentNode = currentNode.next;
        counter++;
      } else {
        return undefined;
        }
    }
};

DoublyLinkedList.prototype.set = function(index, val) {

  var currentNode = this.head;

  if(!currentNode){
    return undefined;
  }

  var counter = 0;
  while(currentNode){
    if(counter === index){
      return currentNode.val = val;
    } else if (!currentNode.next){
      return undefined;
    } else {
      currentNode = currentNode.next;
      counter++;
    }
  }
};

DoublyLinkedList.prototype.insert = function(index, val) {

  var currentNode = this.head;

  if(!currentNode){
    this.head = new Node(val);
    this.length++;
    return this.head.val;
  }

  var counter = 0;
  while(currentNode){
    if(index === 0){
      this.length++;
      currentNode.prev = new Node(val, currentNode, null);
      this.head = currentNode.prev;
      return this.head.val;
    } else if(counter === index){
      this.length++;
      currentNode.prev.next = new Node(val, currentNode, currentNode.prev);
      return currentNode.prev.next.val;
    } else if ((currentNode === this.tail) && (index === counter + 1)){
      currentNode.next = new Node(val, null, currentNode);
      this.length++;
      this.tail = currentNode.next;
      return this.tail.val;
    }
    currentNode = currentNode.next;
    counter++;
  }
  return undefined;
};

DoublyLinkedList.prototype.remove = function(index) {

  var currentNode = this.head;

  if(!currentNode){
    return undefined;
  }

  var counter = 0;

  while(currentNode){
    if(index === 0){
      this.length--;
      if(!currentNode.next){
        this.head = null;
        this.tail = null;
        return currentNode.val;
      } else {
      currentNode.next.prev = null;
      this.head = currentNode.next;
      return currentNode.val;
    }
    } else if (index === counter && currentNode != this.tail){
      this.length--;
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
      return currentNode.val;
    } else if (currentNode === this.tail) {
      this.length--;
      currentNode.prev.next = null;
      this.tail = currentNode.prev;
      return currentNode.val;
    }
    currentNode = currentNode.next;
    counter++;
  }

};

module.exports = DoublyLinkedList;
