require('sanic.js').changeMyWorld();
const Netmask = require('netmask').Netmask;
const ipInt = require('ip-to-int');

function isCidrV4(c) {
    return c.match(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))$/);
}

function cleaner(cidr1, cidr2) {

    const removeMe = [];

    let n1, n2, tmp;

    // merge both
    if (cidr2) {
        tmp = [...cidr1, ...cidr2];
    } else {
        tmp = cidr1;
    }

    // remove extra spaces
    // add /32 for simple IP
    tmp = tmp.map(c => {
        c = c.trim();
        if (!c.match(/\//)) c+='/32';
        return c;
    });

    // remove comments or badly formated cidr
    tmp = tmp.filter(c => {
        return isCidrV4(c);
    });

    // remove duplicates
    tmp = [ ...new Set(tmp) ];

    // detect overlaps
    tmp = tmp.filter((c1, idx1) => {

        n1 = new Netmask(c1);
        n1.firstInt = ipInt(n1.first).toInt();
        n1.lastInt = ipInt(n1.last).toInt();

        tmp.filter((c2, idx2) => {

            if (idx1 === idx2) return true;

            n2 = new Netmask(c2);
            n2.firstInt = ipInt(n2.first).toInt();
            n2.lastInt = ipInt(n2.last).toInt();

            if (
                (n2.firstInt >= n1.firstInt && n2.firstInt <= n1.lastInt)
                ||
                (n2.lastInt >= n1.firstInt && n2.lastInt <= n1.lastInt)
            ) {
                if (n1.size>n2.size) {
                    removeMe.push(idx2);
                }
            }
            return true;
        });
        return true;
    });

    while (removeMe.length) {
        tmp.splice(removeMe[removeMe.length-1], 1);
        removeMe.pop();
    }

    return tmp;
}

module.exports = cleaner;
