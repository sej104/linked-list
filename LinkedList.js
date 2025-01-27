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
}

export default LinkedList;
