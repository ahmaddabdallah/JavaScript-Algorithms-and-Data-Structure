/*
    --------------------------
    -------   Stack   --------
    --------------------------
*/

const MAX_SIZE = 3;

class Stack {
    constructor() {
        this.top = -1;
        this.items = new Array(MAX_SIZE);
    }

    isEmpty() {
        return this.top < 0;
    }

    push(element) {
        if (this.top >= MAX_SIZE - 1) {
            console.log("Stack full on push");
        } else {
            this.top++;
            this.items[this.top] = element;
        }
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack empty on pop");
            return null;
        } else {
            const element = this.items[this.top];
            this.top--;
            return element;
        }
    }

    getTop() {
        if (this.isEmpty()) {
            console.log("Stack empty on getTop");
            return null;
        } else {
            const stackTop = this.items[this.top];
            console.log(stackTop);
            return stackTop;
        }
    }

    print() {
        let output = "[ ";
        for (let i = this.top; i >= 0; i--) {
            output += this.items[i] + " ";
        }
        output += "]";
        console.log(output);
    }
}

// Example usage
const s = new Stack();
s.push(5);
s.push(15);
s.push(20);
s.print();