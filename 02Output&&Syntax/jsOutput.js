// JavaScriot can display data in different ways:

// Writing into an HTML element, using innerHTML.
// Writing into the HTML output using document.write().
// Writing into an alert box, using window.alert().
// Writing into the browser console, using console.log()

// To access an HTML element, JavaScript can use the document.getElementById("idName") method.
// The id attribute defines the HTML element. The innerHTML property defines the HTML content.

function showResult() {
    document.getElementById("emptyTag").innerHTML = 5 + 6
}