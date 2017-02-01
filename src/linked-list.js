const Node = require('./node');

class LinkedList {
    constructor() {

       this.length = 0;

    }

    append(data) {
      var  cell = new Node(data);
        if(this.length ==0) {

            this._head = cell;
            this._tail = cell;

        } else {

                this._tail.next = cell;
                cell.prev = this._tail;
                this._tail = cell;

            }
        this.length++;

    }

    head() {
        return this._head.data;

    }

    tail() {
        return this._tail.data;
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {
        if(this.length==0){
            return true;
        } else{
            return false;
        }
    }

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {
        for(var i=0; i<this.length; i++){}

    }
}

module.exports = LinkedList;
