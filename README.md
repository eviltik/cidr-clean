# cidr-clean
-----------
[![Build Status](https://travis-ci.org/eviltik/cidr-clean.svg?branch=master)](https://travis-ci.org/franck34/sockmq)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

What for ?
----------

Merge 2 list of CIDRs:
* remove duplicates
* remove comments
* remove bad CIDRs
* remove extra spaces
* choose the heaviest network in case of overlap


Installation
------------
```
$ npm install cidr-clean
```


Usage
-----
```
const cidrClean = require('cidr-clean');

let c1 = [
    '#mycomment',
    '10.1.2.0/23'
];

let c2 = [
    '110.1.3.248/30',
    '1.2.3.4/10'
];

console.log(cidrClean(c1, c2));

# output: ['10.1.2.0/23', '110.1.3.248/30', '1.2.3.4/10'];

```
