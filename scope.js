/*
 * To run this example:
 *  node --harmony --use_strict scope.js
 */
console.log(">>>>>>>>>>>>>>>>> SCOPE >>>>>>>>>>>>>>>>>>>>>>>>>");
{
  let letVariable = "This is a scoped variable created with 'let'";
  var varVariable = "This is a old variable created with var";

  console.log(letVariable);
  console.log(varVariable);
}

// Error because let allows us to defined block-scoped variables
//console.log(letVariable);
console.log(varVariable);

// Allowed 
var string = "Hello";
var string = "World";

console.log(string);

// Forbidden 
let letString = "Hello";
// An error is thrown, variable already defined
//let letString = "World";

// forbidden as there is a name clash with the varibale defined using 'var'
//let string = "This should be forbidden";

const IMMUTABLE_STRING = "This is an immutable string";

console.log(IMMUTABLE_STRING);
// forbidden : Assignment to const variable
// IMMUTABLE_STRING = "fff";

// this prints undefined ?????????
(function () {
  var foo = 1;
  function bar() {
    if (false) {
      var foo = 10;
    }
    console.log("The value is " + foo);
  }
  bar();
})();

// ES6 Let
(function () {
  let foo = 1;
  function bar() {
    console.log(foo);
    if (false) {
      let foo = 10;
    }
    console.log("The value is " + foo);
  }
  bar();
})();


console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
