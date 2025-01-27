import Node from "./Node.js";

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.head === null) this.head = new Node(value, null);
    else {
      let temp = this.head;
      while (temp.nextNode !== null) temp = temp.nextNode;
      temp.nextNode = new Node(value, null);
    }
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  size() {
    let sum = 0;
    let temp = this.head;
    while (temp !== null) {
      temp = temp.nextNode;
      sum += 1;
    }
    return sum;
  }

  head() {
    return this.head;
  }

  tail() {
    if (this.head === null) return null;
    let temp = this.head;
    while (temp.nextNode !== null) temp = temp.nextNode;
    return temp;
  }

  at(index) {
    if (index < 0 || index >= this.size()) return -1;
    let currentIndex = 0;
    let temp = this.head;
    while (currentIndex < index) {
      temp = temp.nextNode;
      currentIndex += 1;
    }
    return temp;
  }

  pop() {
    if (this.head === null) return;
    if (this.size() === 1) {
      this.head = null;
      return;
    }
    let previous = null;
    let current = this.head;
    while (current.nextNode !== null) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = null;
  }

  contains(value) {
    let temp = this.head;
    while (temp !== null) {
      if (temp.value === value) return true;
      temp = temp.nextNode;
    }
    return false;
  }

  find(value) {
    let index = 0;
    let temp = this.head;
    while (temp !== null) {
      if (temp.value === value) return index;
      temp = temp.nextNode;
      index += 1;
    }
    return null;
  }

  toString() {
    let temp = this.head;
    let string = "";
    while (temp !== null) {
      string += `( ${temp.value} ) -> `;
      temp = temp.nextNode;
    }
    return (string += "null");
  }

  insertAt(value, index) {
    if (index < 0) return;
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index >= this.size()) {
      this.append(value);
      return;
    }

    let currentIndex = 0;
    let temp = this.head;
    while (currentIndex + 1 < index) {
      temp = temp.nextNode;
      currentIndex += 1;
    }
    temp.nextNode = new Node(value, temp.nextNode);
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) return;
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }

    let currentIndex = 0;
    let previous = null;
    let current = this.head;

    while (currentIndex < index) {
      previous = current;
      current = current.nextNode;
      currentIndex += 1;
    }
    previous.nextNode = current.nextNode;
  }
}

export default LinkedList;
