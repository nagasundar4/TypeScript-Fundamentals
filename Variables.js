function doSomething(message) {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally: " + i);
}
doSomething("Hello World");
