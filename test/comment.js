const tap = require('tap');
const cidrClean = require('../index');

tap.test('should remove comment entries with comments',function(t) {

    let c1, expected, result;

    c1 = ['#mycomment', '10.1.2.0/23','110.1.3.248/30'];
    expected = ['10.1.2.0/23', '110.1.3.248/30'];

    result = cidrClean(c1);

    t.same(result, expected);
    t.end();

});
