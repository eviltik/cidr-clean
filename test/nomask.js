const tap = require('tap');
const cidrClean = require('../index');

tap.test('should add /32 to an IP', (t) => {
    const arr = ['10.20.30.40'];
    const expected = ['10.20.30.40/32'];
    const result = cidrClean(arr);
    t.same(result, expected);
    t.end();
});
