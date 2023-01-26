function createSortedList() {
  let listOfNumbers = {
    sortedList: [],
    sortAscending() {
      this.sortedList.sort((a, b) => a - b);
    },
    add(element) {
      this.sortedList.push(element);
      this.sortAscending();
      this.size++;
    },
    remove(index) {
      if (index >= 0 && index < this.sortedList.length) {
        this.sortedList.splice(index, 1);
        this.sortAscending();
        this.size--;
      }
    },
    get(index) {
      if (index >= 0 && index < this.sortedList.length) {
        return this.sortedList[index];
      }
    },
    size: 0,
  };

  return listOfNumbers;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
/*
6
7
*/
