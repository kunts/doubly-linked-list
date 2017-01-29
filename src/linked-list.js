const Node = require('./node');

class LinkedList {
    constructor() {

       this.length = 0;
    }

    append(data) {
        if(this.length ==0) {

            this._head = new Node(data);
            this.length++;
            this._tail = new Node(data);



        } else {

                this.cell = new Node(data, this._tail, this._tail.prev.next);
                this._tail.prev.next = this.cell;
                this._tail.prev = this.cell;
            }


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

    indexOf(data) {}
}

module.exports = LinkedList;
