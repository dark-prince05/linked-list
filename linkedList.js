function linkedList() {
  let list = Node();

  function indexing() {
    let temp = list;
    let i = 0;
    while (temp.nextNode !== null) {
      temp.index = i;
      temp = temp.nextNode;
      i++;
    }
    temp.index = i;
  }

  function append(value) {
    if (list.value === null) {
      list.value = value;
      indexing();
      return;
    }

    let temp = list;
    while (temp.nextNode !== null) {
      temp = temp.nextNode;
    }
    temp.nextNode = Node(value);
    indexing();
  }

  function prepend(value) {
    const newList = Node(value, null, list);
    list = newList;
    indexing();
  }

  function size() {
    let temp = list;
    while (temp.nextNode !== null) {
      temp = temp.nextNode;
    }
    return temp.index + 1;
  }

  function head() {
    return list;
  }

  function tail() {
    let temp = list;
    while (temp.nextNode !== null) {
      temp = temp.nextNode;
    }
    return temp;
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
  };
}
const l = linkedList();
l.append(5);
l.append(9);
l.prepend(178);
l.prepend(18);

console.log(JSON.stringify(l.head()));
console.log(l.size());

function Node(val = null, ind = null, next = null) {
  return {
    value: val,
    index: ind,
    nextNode: next,
  };
}
