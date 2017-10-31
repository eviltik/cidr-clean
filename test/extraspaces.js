const tap = require('tap');
const cidrClean = require('../index');

tap.test('should detect duplicates',function(t) {

    let c1, c2, expected, result;

    c1 = [' 1.2.3.4/16 ', '   2.3.4.5/16  '];
    c2 = ['    1.2.3.4/16 ', '      3.4.5.6/16  '];
    expected = ['1.2.3.4/16', '2.3.4.5/16', '3.4.5.6/16'];

    result = cidrClean(c1, c2);

    t.same(result, expected);
    t.end();
});
