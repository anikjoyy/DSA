class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value); //creating new node
    //we need head and tail points to null, if(this.head){} means head is pointing something, so we write the opposite condition of it
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      /*
        tail:{
            value:4, 
            next:{
                value:7,
                next: null
            }
        }
        */
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this; //means we return all
  }

  pop() {
    //if there are 0 item in our linked list
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    //edge case if we have only one item in linked list
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

let myLinkedList = new LinkedList(4);
myLinkedList.push(7);
myLinkedList.pop();
myLinkedList.push(23);
myLinkedList.push(3);
myLinkedList.push(11);
