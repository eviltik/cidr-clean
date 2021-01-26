const tap = require('tap');
const cidrClean = require('../index');

tap.test('should clean extra tabs', (t) => {
    const arr1 = ['	1.2.3.4/16	', '	2.3.4.5/16	'];
    const arr2 = ['		1.2.3.4/16	', '		3.4.5.6/16	'];
    const expected = ['1.2.3.4/16', '2.3.4.5/16', '3.4.5.6/16'];
    const result = cidrClean(arr1, arr2);
    t.same(result, expected);
    t.end();
});
