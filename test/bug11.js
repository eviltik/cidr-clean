const tap = require('tap');
const cidrClean = require('../index');

tap.test('see #11', (t) => {
    const arr = [ '192.168.1.1/32', '192.168.1.0/30', '192.168.0.0/16'];
    const expected = ['192.168.0.0/16'];
    const result = cidrClean(arr);
    t.same(result, expected);
    t.end();
});
