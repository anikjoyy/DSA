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
}

let myLinkedList = new LinkedList(4);
myLinkedList.push(7);
