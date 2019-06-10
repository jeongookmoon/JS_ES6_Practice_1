class DoublyLinkedListNode {
  constructor(val) {
    this.value = val
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0;
  }

  append(val) {
    let newNode = new DoublyLinkedListNode(val)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
    this.size++
  }

  appendAt(target, value) {
    let result = null
    let iterator = this.head
    while (iterator) {
      if (iterator.value === target) {
        if (iterator === this.tail) {
          this.append(value)
        } else {
          let newNode = new DoublyLinkedListNode(value)

          newNode.next = iterator.next
          newNode.prev = iterator
          iterator.next.prev = newNode
          iterator.next = newNode
          this.size++

          result = newNode
          break;
        }
      }
      iterator = iterator.next
    }
    return result
  }

  prepend(val) {
    let newNode = new DoublyLinkedListNode(val)

    if (!this.head) {
      this.head = newNode
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.size++
  }

  pop() {
    if (!this.head) return null
    const node = this.tail.prev
    if (node) {
      node.next = null
      this.tail = node
    } else {
      this.head = null
      this.tail = null
    }
    this.size--
  }

  remove(target) {
    let iterator = this.head
    let result = null
    while (iterator) {
      if (iterator.value === target) {
        if (this.head === this.tail) {
          this.head = null
          this.tail = null
        } else if (this.head.value === target) {
          this.head = this.head.next
          this.head.prev = null
        } else if (this.tail.value === target) {
          this.tail = this.tail.prev
          this.tail.next = null
        } else {
          iterator.next.prev = iterator.prev
          iterator.prev.next = iterator.next
        }
        this.size--
        result = iterator
        break;
      }
      iterator = iterator.next
    }
    return result
  }

  traverse(doThis = null) {
    let iterator = this.head
    while (iterator) {
      if (doThis) {
        doThis(iterator)
      }
      iterator = iterator.next
    }
  }

  print() {
    let result = ""
    let iterator = this.head
    while (iterator) {
      result += iterator.value + " "
      iterator = iterator.next
    }
    console.log("Lists:", result.trim())
  }

  printSize() {
    console.log("Size:", this.size)
  }
}

let doublyList = new DoublyLinkedList()
doublyList.append(1)
doublyList.append(2)
doublyList.append(3)
doublyList.prepend(0)
doublyList.prepend(-1)
doublyList.print()
doublyList.printSize()
console.log("doublyList.remove(3)", doublyList.remove(3))
doublyList.print()
doublyList.printSize()
console.log("doublyList.appendAt(33, 3)", doublyList.appendAt(33, 3))
doublyList.print()
doublyList.printSize()
doublyList.traverse((node) => { node.value = node.value + 10 })
doublyList.print()
doublyList.printSize()
doublyList.traverse((node) => { node.value = node.value - 10 })
doublyList.print()
doublyList.printSize()
doublyList.traverse((node) => console.log(node))
doublyList.print()
doublyList.printSize()



