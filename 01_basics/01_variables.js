const a=5
let b="312"
var c="112"
d="23"
let e;

// a=2 // not allowed as its a constant

/*
Prefer not to use var due to issues in functional scope and block scope */

b="113"
c="222"
d="20"

console.table([a,b,c,d,e])