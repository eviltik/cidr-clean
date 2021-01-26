const tap = require('tap');
const cidrClean = require('../index');

tap.test('should choose heaviest network', (t) => {

    let c1, c2, expected, result;

    c1 = ['10.1.2.0/23'];
    c2 = ['10.1.3.248/30'];
    expected = c1;
    result = cidrClean(c1, c2);
    t.same(result, expected);

    c1 = ['12.125.0.0/16'];
    c2 = ['12.125.0.0/14'];
    expected = c2;
    result = cidrClean(c1, c2);
    t.same(result, expected);

    c1 = ['20.150.0.0/12'];
    c2 = ['20.157.0.0/14'];
    expected = c1;
    result = cidrClean(c1, c2);
    t.same(result, expected);

    t.end();

});
