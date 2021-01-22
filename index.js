const ArrayStack = require('./data-structures/stack').default;
const runArrayStack = () => {
    console.log('running stack implemented with arrays example');
    const stack = new ArrayStack();
    console.log('pushing this item onto the stack: apples');
    stack.push('apples');
    console.log(`checking if the stack has an item at the top: ${stack.peek()}`);
    console.log(`The stack should not be empty: ${stack.isEmpty()}`);
    console.log(`Removing this item from the stack: ${stack.pop()}`);
    console.log(`checking if the stack is empty: ${stack.isEmpty()}`);
}

runArrayStack();