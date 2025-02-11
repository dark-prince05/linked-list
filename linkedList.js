function linkedList() {
  let list = Node();

  function append(value) {
    if (list.value === null) {
      list.value = value;
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
      if (temp.value) length++;
      temp = temp.nextNode;
    }
    return length;
  }

  function head() {
    return list.value ? list : null;
  }

  function tail() {
    if (list.value === null) return null;
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
    if (list.value === null) return null;
    if (list.value && list.nextNode === null) {
      list.value = null;
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
    if (list.value == null) return null;
    let temp = list;
    let res = "";
    while (temp !== null) {
      res += `( ${temp.value} ) -> `;
      temp = temp.nextNode;
    }
    res += `null`;
    console.log(res);
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
  };
}
const l = linkedList();
// l.append(5);
// l.append(9);
// l.append(1);
// l.prepend(178);
// l.prepend(18);

console.log(JSON.stringify(l.head()));
console.log(l.toString());

function Node(val = null, next = null) {
  return {
    value: val,
    nextNode: next,
  };
}
