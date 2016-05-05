// var SinglyLinkedList = require("../singly_linked_list");
var SinglyLinkedList = require("../empty_singly_linked_list");
var list;

describe("Singly Linked List", function() {
  beforeEach(function() {
    list = new SinglyLinkedList();
  });

  describe("push", function() {
    it("adds a value to the end of the list", function() {
      expect(list.length).toEqual(0);
      list.push(5);
      expect(list.length).toEqual(1);
    });

    it("returns self so chaining works", function() {
      expect(list.length).toEqual(0);
      list.push(1).push(2);
      expect(list.length).toEqual(2);
    });

    it("stores the correct values", function() {
      list.push(2).push(4)
      expect(list.pop()).toEqual(4);
      expect(list.length).toEqual(1);
      expect(list.pop()).toEqual(2);
      expect(list.length).toEqual(0);
    })
  });

  describe("pop", function() {
    it("returns undefined when called on an empty list", function() {
      expect(list.pop()).toBe(undefined);
    });

    it("returns the value at the end of the list", function() {
      list.push(4).push(5);
      expect(list.length).toEqual(2);
      expect(list.pop()).toEqual(5);
      expect(list.length).toEqual(1);
    });
  });

  describe("unshift", function() {
    it("adds a value to the front of the list", function() {
      list.push(4);
      list.unshift(1);
      expect(list.length).toEqual(2);
      expect(list.pop()).toEqual(4);
      expect(list.length).toEqual(1);
      expect(list.pop()).toEqual(1);
      expect(list.length).toEqual(0);
    });

  });

  describe("shift", function() {
    it("removes a value from the front of the list", function() {
      list.push(4).push(2);
      expect(list.length).toEqual(2);
      expect(list.shift()).toEqual(4);
      expect(list.length).toEqual(1);
      expect(list.shift()).toEqual(2);
      expect(list.length).toEqual(0);
    });
  });

  describe("get", function() {
    it("get a value from the list given an index", function() {
      list.push(0).push(1).push(2).push(3).push(4);
      expect(list.length).toEqual(5);
      expect(list.get(2)).toEqual(2);
      expect(list.get(0)).toEqual(0);
      expect(list.get(5)).toEqual(undefined);
      expect(list.get(4)).toEqual(4);
      expect(list.get(3)).toEqual(3);
    });
  });

  describe("set", function() {
    it("set a value in the list given an index", function() {
      list.push(0).push(1).push(2).push(3).push(4);
      expect(list.length).toEqual(5);
      list.set(4,99);
      expect(list.pop()).toEqual(99);
      expect(list.length).toEqual(4);
      list.set(0, -99);
      expect(list.shift()).toEqual(-99);
      expect(list.length).toEqual(3);
    });
  });

  describe("remove", function() {
    it("removes the first element in a list of size 1", function() {
      list.push(1);
      expect(list.length).toEqual(1);
      expect(list.remove(0)).toEqual(1);
      expect(list.length).toEqual(0);
    });

    it("removes the last element in a list of size 5", function() {
      list.push(1).push(2).push(3).push(4).push(5);
      expect(list.length).toEqual(5);
      expect(list.remove(4)).toEqual(5);
      expect(list.length).toEqual(4);
    });

    it("removes the second element in a list of size 5", function() {
      list.push(1).push(2).push(3).push(4).push(5);
      expect(list.length).toEqual(5);
      expect(list.remove(1)).toEqual(2);
      expect(list.length).toEqual(4);
    });

    it("removes the second to last element in a list of size 5", function() {
      list.push(1).push(2).push(3).push(4).push(5);
      expect(list.length).toEqual(5);
      expect(list.remove(3)).toEqual(4);
      expect(list.length).toEqual(4);
      expect(list.get(0)).toEqual(1);
      expect(list.get(1)).toEqual(2);
      expect(list.get(2)).toEqual(3);
      expect(list.get(3)).toEqual(5);
      expect(list.get(4)).toEqual(undefined);

    });
  });
});
