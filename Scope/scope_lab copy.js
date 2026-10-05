// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
//console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    console.log(functionVar); // Throws ReferenceError
    console.log(functionLet); // Throws ReferenceError
    console.log(functionConst); // Throws ReferenceError
    
function define() {
    var testvar = "This is a test variable";
    let testlet = "This is a test let";
    const testconst = "this is a test const";
    testvar = "this has been reassigned";
    testlet = "this has also been reassigned";

    console.log(testvar);
    console.log(testlet);
    console.log(testconst);
}

function test() {
var testvar = "this is a testing var";
let testlet = "this is a testing let";
const testconst = "this is a testing const";

    console.log(testvar);
    console.log(testlet);
    console.log(testconst);
    
}

define();
test();
