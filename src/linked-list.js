const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head=null;
        this._tail = null;

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
return this;
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
            return -1;
        }
    }

    insertAt(index, data) {
        var  cell = new Node(data);
        if(this.length >1){
            if(index < this.length){
                var pointer = this._head;
                if(index ==0){
                    this._head.prev = cell;
                    cell.next = this._head;
                    this._head = cell;


                  /*  return this;*/
                }else{
                    for (var i=1; i<=index; i++){
                        pointer = pointer.next;

                    }
                    cell.next = pointer;
                    cell.prev = pointer.prev;
                    pointer.prev = cell;
                    cell.prev.next= cell;



                }
                this.length++;
            }else { return -1;
            }
        } else{
            this._head = cell;
            this._tail = cell;
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
        return this;
    }

    deleteAt(index) {
        if(this.length>1){
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
                this.length--;
            }else { return -1;
            }
        } else {
            this._head.next = null;
            this._tail.prev = null;
            this._head.data = null;
            this._tail.data = null;

            this.length =0;
        }
        return this;
    }

    reverse() {
       if(this.length>1) {
           var pointer = this._tail;
           for (var i = 0; i < this.length; i++) {
               var temp = Object.assign({}, pointer);
               pointer.prev = temp.next;
               pointer.next = temp.prev;
               pointer = pointer.next;
           }
           temp = this._tail;
           this._tail = this._head;
           this._head = temp;
       }
        return this;
    }

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
