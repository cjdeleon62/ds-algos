class ArrayStack {
    constructor(data = []) {
        this.data = data;
    }

    /**
     * Adds an item to the beginning of the stack.
     * @param {<Any>} item The data to add to the beginning of the stack.
     */
    push(item) {
        this.data.unshift(item);
    }

    /**
     * Removes an item from the beginning of the stack.
     * @returns {Error|<Any>} If empty, throw an error due to underflow condition. Otherwise, return the
     * item at the beginning of the stack.
     */
    pop() {
        if (!this.isEmpty()) {
            return this.data.shift();
        }

        throw new Error("Empty Stack");
    }

    /**
     * See the item at the beginning of the stack.
     * @returns {<Any>} If empty return undefined. Otherwise returns the item at the beginning of the stack.
     */
    peek() {
        return this.data[0];
    }

    /**
     * @returns {boolean} True if the stack is empty, false otherwise.
     */
    isEmpty() {
        return this.data.length === 0;
    }
};

export default ArrayStack;