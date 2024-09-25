const { increment, decrement } = require('./inc_dec');
const assert = require('assert');

try {
    assert.strictEqual(increment(2), 3);
    assert.strictEqual(increment(-1), 0);
    assert.strictEqual(increment(0), 1);
    console.log("Increment tests passed.");
} catch (error) {
    console.error("Increment test failed", error);
}

try {
    assert.strictEqual(decrement(2), 1);
    assert.strictEqual(decrement(-1), -2);
    assert.strictEqual(decrement(0), -1);
    console.log("Decrement tests passed.");
} catch (error) {
    console.error("Decrement test failed", error);
}
