class ArrayStack {
    constructor(data = []) {
        this.data = data;
    }

    // Methods
    push(item) {
        this.data.unshift(item);
    }

    pop() {
        if (!this.isEmpty()) {
            return this.data.shift();
        }

        throw new Error("Empty Stack");
    }

    peek() {
        if (!this.isEmpty()) {
            return this.data[0];
        }

        throw new Error("Empty Stack");
    }

    isEmpty() {
        return this.data.length === 0;
    }
};

module.exports = ArrayStack;