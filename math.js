//Creating a function for addition
function add(a, b) {
    return a + b;
}

//Creating a function for substraction
function sub(a, b) {
    return a - b;
}

//exporting this function with the help of module.exports but module.exports can be used only once
// module.exports = add;

module.exports = {
    add,
    sub
};
