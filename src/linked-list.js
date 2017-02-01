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

    at(index) {
        if(index< this.length){
            var pointer = this._head;
            if(index ==0){
                return pointer.data;
            }else{
                for (var i=1; i<=index; i++){
                    pointer = pointer.next;

                }
                return pointer.data;
            }
        }else {
            return -1;}
    }

    insertAt(index, data) {
        var  cell = new Node(data);
        if(index< this.length){
            var pointer = this._head;
            if(index ==0){
                this._head.prev = cell;
                cell.next = this._head;
                this._head = cell;


                return pointer.data;
            }else{
                for (var i=1; i<=index; i++){
                    pointer = pointer.next;

                }
                cell.next = pointer;
                cell.prev = pointer.prev;
                pointer.prev = cell;
                cell.prev.next= cell;



            }
        }else { return -1;
        }
    }

    isEmpty() {
        if(this.length==0){
            return true;
        } else{
            return false;
        }
    }

    clear() {
        this._head.next = null;
        this._tail.prev = null;
        this._head.data = null;
        this._tail.data = null;

        this.length =0;
    }

    deleteAt(index) {
        if(index< this.length){
            var pointer = this._head;
            if(index ==0){
                this._head.next.prev = null;
                this._head = this._head.next;

            }else{
                for (var i=1; i<=index; i++){
                    pointer = pointer.next;

                }
                pointer.next.prev = pointer.prev;
                pointer.prev.next = pointer.next;

            }
        }else { return -1;
        }
    }

    reverse() {}

    indexOf(data) {
        var pointer = this._head;

        for(var i=0; i < this.length; i++){
            if (pointer.data == data){
                return i;
            }
            pointer= pointer.next;

        }
        return -1;
    }
}

module.exports = LinkedList;
