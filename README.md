<h1>Javascript Tutorial</h1>

<h3>Day_01. Basics</h3>
<ul>
    <li>- <code>console.log()</code> --> Output in console</li>
    <li>- Variable declaration - <code>let</code>, <code>var</code>, <code>const</code></li>
    <li>- Data Types - numbers, strings, booleans, null, undefined</li>
    <li>- Conditionals - <code>if</code>, <code>if-else</code>, multi-conditional <code>if-else</code></li>
    <li>- Loops - <code>while</code>, <code>do-while</code>, <code>for</code> loops --> Loops continue executing block of code until a termination condition meets.</li>
    <li>- Iterators - <code>for...of</code>, <code>for...in</code> --> Iterators on each available element of array or object</li>
</ul>

<h3>Day_02. String Methods</h3>
<ul>
    <li>- <code>concat()</code> -> joins two strings.</li>
    <li>- <code>charAt(index)</code> -> returns the index number of mentioned character</li>
    <li>- <code>toUpperCase()</code> -> Change all letters to Capital case.</li>
    <li>- <code>toLowerCase()</code> -> Change all letters to Small case.</li>
    <li>- <code>trim()</code> -> Removes whitespace from both ends of a string.</li>
    <li>- <code>split(",")</code> -> Splits a string into an array of substrings based on the specified separator.</li>
    <li>- <code>replace(oldValue, newValue)</code> & <code>replaceAll(oldValue, newValue)</code> -> Returns a new string replacing old value with new one.</li>
    <li>- <code>includes(searchWord)</code> -> Determines whether one string may be found within another string</li>
    <li>- <code>startsWith(searchWord)</code> -> Checks if a string starts with the specified string.</li>
    <li>- <code>endsWith(searchWord)</code> -> Checks if a string ends with the specified string.</li>
    <li>- <code>slice(startIndex, endIndex)</code> -> Extracts a section of a string and returns it as a new string.</li>
</ul>

<h3>Day_03. Array & Array Methods</h3>
<ul>
    <li>- <code>push()</code> -> Adds one or more elements to the end of an array and returns the new length of the array.</li>
    <li>- <code>pop()</code> -> Removes the last element from an array and returns that element.</li>
    <li>- <code>unshift()</code> -> Inserts the given values to the beginning of an array-like object.</li>
    <li>- <code>shift()</code> -> Removes the first element from an array.</li>
    <li>- <code>concat()</code> -> Returns a new array that combines the elements of the original array with other arrays or values.</li>
    <li>- <code>reverse()</code> -> Reverses an array in place and returns the reference to the same array.</li>
    <li>- <code>sort()</code> -> Sorts the elements as strings by default and returns the reference to the same array.</li>
    <li>- <code>toString()</code> -> Returns a string representing the object.</li>
    <li>- <code>slice()</code> -> <code>array.splice(start, number of elements in the array to remove from start, elements to add to the array beginning from the start index,item2,...)</code></li>
    <li>- <code>splice()</code> -> Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.</li>
    <li>- <code>join()</code> -> Joins the array’s items into a string and returns that string.</li>
    <li>- <code>forEach()</code> -> Executes a callback function once for each array element.</li>
    <li>- <code>map()</code> -> Creates a new array with the results of calling a provided function on every element in the calling array.</li>
    <li>- <code>filter()</code> -> Creates a new array with all elements that pass the test implemented by the provided function.</li>
</ul>

<h3>Day_04. Objects-</h3>
<ol>
    <li>Object Declaration using-</li>
    <ul>
        <li>- Object Literal</li>
        <li>- Constructor Function</li>
    </ul>
    <li>Accessing object's properties</li>
    <li>'this' keyword</li>
</ol>

<h3>Day_05. ES6 features-</h3>
<ul>
    <li>- Arrow function</li>
    <li>- Rest Parameter ->Used to collect multiple arguments into a single array parameter. It allows functions to accept an indefinite number of arguments, primarily used in function declarations.</li>
    <li>- Spread Syntax -> Used for Destructuring. It can expand iterable objects into multiple elements.</li>
    <li>- Template literals or String interpolation -> Allows for easier string interpolation and multiline strings using backticks (`) and ${}.</li>
    <li>- Destructuring Assignment -> Destructuring allows for extracting values from arrays or properties from objects into distinct variables.</li>
</ul>

<h3>Day_06. Asynchronous JavaScript</h3>
<ol>
    <li><code>setTimeout() & setInterval()</code> - These are built-in functions for scheduling asynchronous execution of code after a specified delay or at regular intervals.</li>
    <li><code>fetch()</code> - A modern interface (alternative to XMLHttpRequest) for fetching resources (such as JSON, HTML, or images) across the network.</li>
    <li><code>XMLHttpRequest()</code> - XMLHttpRequest is an older API used for making HTTP requests from the browser.</li>
    <li><strong>async/await</strong> - It provides syntactic sugar over Promises, making asynchronous code look and behave more like synchronous code.</li>
    <li><code>Promise()</code> - Promises provide a way to handle asynchronous operations more cleanly and avoid callback hell. Promises represent a value that may be available now, in the future, or never.</li>
</ol>

<h3>Day_07. DOM Manipulation</h3>
<ul>
  <li><h>Accessing DOM Elements</h></li>
  <ul>
    <li><h>getElementById:</h> Retrieves an element by its ID attribute.</li>
    <li><h>getElementsByClassName:</h> Retrieves elements by their class name.</li>
    <li><h>getElementsByTagName:</h> Retrieves elements by their tag name.</li>
    <li><h>querySelector:</h> Retrieves the first element that matches a CSS selector.</li>
    <li><h>querySelectorAll:</h> Retrieves all elements that match a CSS selector.</li>
  </ul>

  <li><h>Modifying Element Content</h></li>
  <ul>
    <li><h>innerHTML:</h> Sets or gets the HTML content of an element.</li>
    <li><h>textContent:</h> Sets or gets the text content of an element.</li>
    <li><h>innerText:</h> Similar to textContent, but it does not return the text content of hidden elements.</li>
  </ul>

  <li><h>Manipulating Attributes</h></li>
  <ul>
    <li><h>getAttribute:</h> Retrieves the value of the specified attribute of an element.</li>
    <li><h>setAttribute:</h> Sets the value of the specified attribute of an element.</li>
    <li><h>removeAttribute:</h> Removes the specified attribute from an element.</li>
  </ul>

  <li><h>Creating and Modifying Elements</h></li>
  <ul>
    <li><h>createElement:</h> Creates a new element node.</li>
    <li><h>createTextNode:</h> Creates a new text node.</li>
    <li><h>appendChild:</h> Appends a child node to an element.</li>
    <li><h>removeChild:</h> Removes a child node from an element.</li>
  </ul>

  <li><h>Styling Elements</h></li>
  <ul>
    <li><h>style.property:</h> Allows direct manipulation of CSS styles.</li>
    <li><h>classList:</h> Allows adding, removing, toggling, and checking classes on an element.</li>
  </ul>

  <li><h>Event Handling</h></li>
  <ul>
    <li><h>addEventListener:</h> Attaches an event handler to an element.</li>
    <li><h>removeEventListener:</h> Removes an event handler from an element.</li>
    <li><h>onclick, onmouseover, onkeydown, etc.:</h> Inline event handlers.</li>
  </ul>

  <li><h>Traversal and Navigation</h></li>
  <ul>
    <li><h>parentNode:</h> Returns the parent node of an element.</li>
    <li><h>childNodes:</h> Returns a collection of child nodes of an element.</li>
    <li><h>firstChild, lastChild:</h> Returns the first/last child node of an element.</li>
    <li><h>nextSibling, previousSibling:</h> Returns the next/previous sibling node of an element.</li>
    <li><h>querySelector, querySelectorAll:</h> Can be used for more complex traversal based on CSS selectors.</li>
  </ul>

  <li><h>Document Structure Manipulation</h></li>
  <ul>
    <li><h>document.createElement:</h> Creates a new element.</li>
    <li><h>element.appendChild:</h> Adds a new child node to an element.</li>
    <li><h>element.removeChild:</h> Removes a child node from an element.</li>
    <li><h>element.insertBefore:</h> Inserts a new node before an existing node.</li>
  </ul>
</ul>

