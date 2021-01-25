# cidr-clean
-----------
![Node.js CI](https://github.com/eviltik/cidr-clean/workflows/Node.js%20CI/badge.svg)
[![npm version](https://badge.fury.io/js/cidr-clean.svg)](https://badge.fury.io/js/cidr-clean)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Dependencies](https://david-dm.org/eviltik/cidr-clean.svg)](https://david-dm.org/eviltik/cidr-clean)

What for ?
----------

Clean an array of CIDR
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

let list = [
    '#mycomment',
    '10.1.2.0/23',
    '110.1.3.248/30',
    '1.2.3.4/10'
];

console.log(cidrClean(list));

# output: ['10.1.2.0/23', '110.1.3.248/30', '1.2.3.4/10'];

# note, you can cidrClean(list1, list2) for merging 2 cidr lists
```

Todo
----
* optional callback with all events (remove, overlap)
