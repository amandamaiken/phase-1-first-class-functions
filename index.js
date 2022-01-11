function receivesAFunction ( thatFunction ) {
    thatFunction();
} 

function returnsANamedFunction () {
    return function namedFunction() {
        return "This is a named function"
    }
}

function returnsAnAnonymousFunction () {
    return () => console.log("This is an anonymous function");
}