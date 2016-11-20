const assert = require('assert'),
    ltf = require('../ltf/index');

describe('Lightning Test Framework', function () {
    describe('MockComponent', function () {
        it('does exist', function () {
            assert.notDeepEqual(undefined, ltf.MockComponent);
        });
    });
});
