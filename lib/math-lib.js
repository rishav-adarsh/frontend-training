// in-line expoprt
export function add(a, b) {
    console.log("sum", a + b);
}

function sub(a, b) {
    console.log("sub", a - b);
}

function mul(a, b) {
    console.log("mul", a * b);
}

function div(a, b) {
    console.log("div", a / b);
}

// any functinoality defined within a module is scoped to the module (i.e. private)

// named export
export {sub, mul};

// default export : only one memeber can be exported as a default
export default div;