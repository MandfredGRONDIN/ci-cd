const sum = require('./sum');
const assert = require('assert');

try {
    assert.strictEqual(sum(2, 3), 5);
    assert.strictEqual(sum(-1, 1), 0);
    assert.strictEqual(sum(0, 0), 0);
    console.log("All tests passed.");
} catch (error) {
    console.error("Test failed", error);
}
