// JavaScriot can display data in different ways:

// Writing into an HTML element, using innerHTML.
// Writing into the HTML output using document.write().
// Writing into an alert box, using window.alert().
// Writing into the browser console, using console.log()

// To access an HTML element, JavaScript can use the document.getElementById("idName") method.
// The id attribute defines the HTML element. The innerHTML property defines the HTML content.

function showResult() {
    document.getElementById("emptyTag").innerHTML = `The result of 5 + 6 is ${5 + 6}`
}

function showHTML() {
    // Using document.write() after an HTML document is loaded,
    // will delete all existing HTML, therefore it should only
    // be used for testing.
    document.write(`The result of 5 + 6 is ${5 + 6}`)
}

function showAlert() {
    // In JavaScript the window object is the global scope object.
    // This means that variables, properties, and methods by default
    // belong to the window object. This also means that specifying
    // the window keyword is optional.
    // Example: alert(`The result of 5 + 6 is ${5 + 6}`)
    window.alert(`The result of 5 + 6 is ${5 + 6}`)
}

function showConsole() {
    // The result will be printed on the console of the browser
    console.log(`The result of 5 + 6 is ${5 + 6}`)
}

function printerPrint() {
    // JavaScript does not have any print object or print methods.
    // You cannot access output devices from JavaScript.
    // The only exception is that you can call the window.print()
    // method in the browser to print the content of the current window.
    window.print()
}

