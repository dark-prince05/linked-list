export function LinkedList() {
  let list = null;

  function append(value) {
    if (!list) {
      list = Node(value);
      return;
    }

    let temp = list;
    while (temp.nextNode !== null) {
      temp = temp.nextNode;
    }
    temp.nextNode = Node(value);
  }

  function prepend(value) {
    const newList = Node(value, list);

    list = newList;
  }

  function size() {
    let temp = list;
    let length = 0;
    while (temp !== null) {
      temp = temp.nextNode;
      length++;
    }
    return length;
  }

  function head() {
    return list ? list : null;
  }

  function tail() {
    if (!list) return null;
    let temp = list;
    while (temp.nextNode !== null) {
      temp = temp.nextNode;
    }
    return temp;
  }

  function at(index) {
    if (index < 0) return null;
    let temp = list;
    let ind = 0;
    while (temp !== null) {
      if (ind === index) return temp;
      temp = temp.nextNode;
      ind++;
    }
    return null;
  }

  function pop() {
    let temp = list;
    if (!list) return null;
    if (list.nextNode === null) {
      list = null;
      return temp;
    }
    while (temp.nextNode.nextNode !== null) {
      temp = temp.nextNode;
    }
    let poped = temp.nextNode;
    temp.nextNode = null;
    return poped;
  }

  function contains(value) {
    let temp = list;
    while (temp !== null) {
      if (temp.value == value) return true;
      temp = temp.nextNode;
    }
    return false;
  }

  function find(value) {
    let temp = list;
    let ind = 0;
    while (temp !== null) {
      if (temp.value == value) return ind;
      temp = temp.nextNode;
      ind++;
    }
    return null;
  }

  function toString() {
    if (!list === null) return null;
    let temp = list;
    let res = "";
    while (temp !== null) {
      res += `( ${temp.value} ) -> `;
      temp = temp.nextNode;
    }
    res += `null`;
    return res;
  }

  function inserAt(value, index = size()) {
    if (index < 0 || index > size()) {
      console.log("Error: Enter valid index");
      return;
    }
    if (index === 0) {
      prepend(value);
      return;
    }
    if (index === size()) {
      append(value);
      return;
    }

    let ind = 1;
    let temp = list;
    while (temp !== null) {
      if (index === ind) {
        const newNode = Node(value, temp.nextNode);
        temp.nextNode = newNode;
        break;
      }
      temp = temp.nextNode;
      ind++;
    }
  }

  function removeAt(index) {
    let temp = list;
    if (index < 0 || index > size()) {
      console.log("Error: Enter valid index");
      return;
    }
    if (index === 0) {
      list = list.nextNode;
      const removedList = temp;
      removedList.nextNode = null;
      return removedList;
    }
    if (index === size() - 1) {
      return pop();
    }
    let ind = 1;
    while (temp != null) {
      if (index === ind) {
        const current = temp.nextNode;
        temp.nextNode = current.nextNode;
        break;
      }
      temp = temp.nextNode;
      ind++;
    }
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    inserAt,
    removeAt,
  };
}

function Node(val = null, next = null) {
  return {
    value: val,
    nextNode: next,
  };
}
