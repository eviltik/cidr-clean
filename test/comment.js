const tap = require('tap');
const cidrClean = require('../index');

tap.test('should remove comment entries with comments', (t) => {
    const arr = ['#mycomment', '10.1.2.0/23', '110.1.3.248/30'];
    const expected = ['10.1.2.0/23', '110.1.3.248/30'];
    const result = cidrClean(arr);
    t.same(result, expected);
    t.end();
});
