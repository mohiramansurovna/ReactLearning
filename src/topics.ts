import {Topics, AllTopics} from './Types';

const topicsJS: Topics[] = [
    [
        'Variables and Data Types',
        {
            id: 1,
            question: 'What keyword is used to declare variables in JavaScript?',
            correct: 'var',
            answer1: 'var',
            answer2: 'let',
            answer3: 'const',
        },
        {
            id: 2,
            question: 'What are the primitive data types in JavaScript?',
            correct: 'string, number, boolean, null, undefined',
            answer1: 'string, number, boolean, null, undefined',
            answer2: 'integer, float, boolean, undefined',
            answer3: 'null undefined',
        },
        {
            id: 3,
            question: 'How do you declare a constant variable in JavaScript?',
            correct: 'const',
            answer1: 'let',
            answer2: 'const',
            answer3: 'var',
        },
        {
            id: 4,
            question: 'What is the result of dividing by zero in JavaScript?',
            correct: 'Infinity',
            answer1: 'NaN',
            answer2: 'Infinity',
            answer3: '0',
        },
        {
            id: 5,
            question: 'What is the result of adding a string and a number in JavaScript?',
            correct: 'Concatenation',
            answer1: 'Addition',
            answer2: 'Concatenation',
            answer3: 'Error',
        },
    ],
    [
        'Operators',
        {
            id: 1,
            question: 'What operator is used for checking type and value equality in JavaScript?',
            correct: '===',
            answer1: '==',
            answer2: '===',
            answer3: '|=',
        },
        {
            id: 2,
            question: "What is the result of `5 + '5'` in JavaScript?",
            correct: "'55'",
            answer1: 'Error',
            answer2: "'55'",
            answer3: '10',
        },
        {
            id: 3,
            question: 'What is the result of `true && false` in JavaScript?',
            correct: 'false',
            answer1: 'true',
            answer2: 'false',
            answer3: "Error '&&' is not defined",
        },
        {
            id: 4,
            question: 'What does the `%` operator do in JavaScript?',
            correct: 'Returns the remainder of a division',
            answer1: 'Returns the quotient of a division',
            answer2: 'Returns the remainder of a division',
            answer3: 'Returns the present of given number',
        },
        {
            id: 5,
            question: 'What is the result of `!true` in JavaScript?',
            correct: 'false',
            answer1: 'true',
            answer2: 'false',
            answer3: "Error '!' is not defined",
        },
    ],
    [
        'Control Flow',
        {
            id: 1,
            question: 'What statement is used to perform conditional execution in JavaScript?',
            correct: 'if',
            answer1: 'for',
            answer2: 'if',
            answer3: 'while',
        },
        {
            id: 2,
            question: 'What is the result of `10 > 5` in JavaScript?',
            correct: 'true',
            answer1: 'true',
            answer2: 'false',
            answer3: 'Error: String and number cannot be compared',
        },
        {
            id: 3,
            question: 'What does the `switch` statement do in JavaScript?',
            correct: 'Performs different actions based on different conditions',
            answer1: 'Iterates over an array',
            answer2: 'Performs different actions based on different conditions',
            answer3: 'Check all the variables',
        },
        {
            id: 4,
            question: 'What keyword is used to exit a loop prematurely in JavaScript?',
            correct: 'break',
            answer1: 'continue',
            answer2: 'break',
            answer3: 'stop',
        },
        {
            id: 5,
            question: "What is the result of `10 == '10'` in JavaScript?",
            correct: 'true',
            answer1: 'true',
            answer2: 'false',
            answer3: 'Error: String and number cannot be compared',
        },
    ],
    [
        'Functions',
        {
            id: 1,
            question: 'How do you declare a function in JavaScript?',
            correct: 'function functionName() {}',
            answer1: 'function myFunction() {}',
            answer2: 'function functionName() {}',
            answer3: '()=>{}',
        },
        {
            id: 2,
            question: 'What does the `return` statement do in a function?',
            correct: 'Specifies the value to be returned from the function',
            answer1: "Ends the function's execution",
            answer2: 'Specifies the value to be returned from the function',
            answer3: 'export the final value',
        },
        {
            id: 3,
            question: 'What is the purpose of parameters in a function?',
            correct: 'To pass values into the function',
            answer1: "To define the function's name",
            answer2: 'To pass values into the function',
            answer3: 'To execute the function',
        },
        {
            id: 4,
            question: 'How do you call a function in JavaScript?',
            correct: 'functionName()',
            answer1: 'myFunction',
            answer2: 'functionName()',
            answer3: '()=>{functionName}',
        },
        {
            id: 5,
            question: 'What is a function expression in JavaScript?',
            correct: 'Assigning a function to a variable',
            answer1: 'Declaring a function within an object',
            answer2: 'Assigning a function to a variable',
            answer3: 'Being able to use the same logic again',
        },
    ],
    [
        'Objects and Arrays',
        {
            id: 1,
            question: 'How do you declare an array in JavaScript?',
            correct: 'var myArray = []',
            answer1: 'var myArray = {}',
            answer2: 'Array=new []',
            answer3: 'var myArray = []',
        },
        {
            id: 2,
            question: 'How do you access an element in an array by its index?',
            correct: 'myArray[index]',
            answer1: 'myArray.index',
            answer2: 'myArray.get(index)',
            answer3: 'myArray[index]',
        },
        {
            id: 3,
            question: 'What method is used to add elements to the end of an array?',
            correct: 'push()',
            answer1: 'append()',
            answer2: 'add()',
            answer3: 'push()',
        },
        {
            id: 4,
            question: 'What is the result of `typeof([])` in JavaScript?',
            correct: "'object'",
            answer1: "'array'",
            answer2: "Error: '[]' is not an variable",
            answer3: "'object'",
        },
        {
            id: 5,
            question: 'What does the `length` property of an array represent?',
            correct: 'The number of elements in the array',
            answer1: 'The capacity of the array',
            answer2: '',
            answer3: 'The number of elements in the array',
        },
    ],
    [
        'Scope and Closures',
        {
            id: 1,
            question: 'What is scope in JavaScript?',
            correct: 'Scope defines the visibility and accessibility of variables in JavaScript.',
            answer1: 'Scope defines the visibility and accessibility of variables in JavaScript.',
            answer2: 'Scope is the capability of a variable',
            answer3: 'Scope is the result of a function',
        },
        {
            id: 2,
            question: 'What is a closure in JavaScript?',
            correct: 'A closure is a function having access to the parent scope.',
            answer1: 'A closure is a function that is returned from another function',
            answer2: 'A closure is a function having access to the parent scope.',
            answer3: 'A closure is a function with no parameters',
        },
        {
            id: 3,
            question: 'What is block scope?',
            correct:
                'Variables declared inside a block {} cannot be accessed from outside the block.',
            answer1:
                'Variables declared inside a block {} cannot be accessed from outside the block.',
            answer2: 'Variables are declared outside of the block',
            answer3: 'Variables can be used as the global variables',
        },
        {
            id: 4,
            question: 'What keyword is used to declare a block-scoped variable?',
            correct: 'let',
            answer1: 'var',
            answer2: 'let',
            answer3: 'const',
        },
        {
            id: 5,
            question: 'How does lexical scoping work in JavaScript?',
            correct:
                'Functions are executed using the scope chain that was in effect when they were defined.',
            answer1: 'Functions are executed in the same scope',
            answer2:
                'Functions are executed using the scope chain that was in effect when they were defined.',
            answer3: 'Functions are not executed in any scope',
        },
    ],
    [
        'Asynchronous Programming',
        {
            id: 1,
            question: 'What is asynchronous programming in JavaScript?',
            correct:
                'Asynchronous programming allows code to run in parallel, without blocking the execution of other code.',
            answer1:
                'Asynchronous programming allows code to run sequentially, blocking the execution of other code.',
            answer2:
                'Asynchronous programming allows code to run in parallel, without blocking the execution of other code.',
            answer3: 'Asynchronous programming is a way to handle events.',
        },
        {
            id: 2,
            question: 'What is a callback function?',
            correct:
                'A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.',
            answer1:
                'A callback function is a function that is called immediately upon being defined.',
            answer2: 'A callback function is a function that returns a value.',
            answer3:
                'A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.',
        },
        {
            id: 3,
            question: 'What is the event loop in JavaScript?',
            correct:
                'The event loop is a mechanism that allows JavaScript to handle asynchronous operations by ensuring that the execution of code continues even while waiting for asynchronous tasks to complete.',
            answer1:
                'The event loop is a data structure used to store event listeners in JavaScript.',
            answer2:
                'The event loop is a mechanism that allows JavaScript to handle synchronous operations.',
            answer3:
                'The event loop is a mechanism that allows JavaScript to handle asynchronous operations by ensuring that the execution of code continues even while waiting for asynchronous tasks to complete.',
        },
        {
            id: 4,
            question: 'What are promises in JavaScript?',
            correct:
                'Promises are objects that represent the eventual completion or failure of an asynchronous operation, and allow you to handle the result or error once it is available.',
            answer1: 'Promises are functions used to define asynchronous operations.',
            answer2:
                'Promises are objects that represent the eventual completion or failure of a synchronous operation.',
            answer3:
                'Promises are objects that represent the eventual completion or failure of an asynchronous operation, and allow you to handle the result or error once it is available.',
        },
        {
            id: 5,
            question: 'What is async/await in JavaScript?',
            correct:
                'Async/await is a modern JavaScript feature that allows you to write asynchronous code in a synchronous-like manner using the async and await keywords.',
            answer1:
                'Async/await is a built-in JavaScript library for handling asynchronous operations.',
            answer2: 'Async/await is a method for defining synchronous code in JavaScript.',
            answer3:
                'Async/await is a modern JavaScript feature that allows you to write asynchronous code in a synchronous-like manner using the async and await keywords.',
        },
    ],
    [
        'Callbacks',
        {
            id: 1,
            question: 'What is a callback function?',
            correct:
                'A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.',
            answer1:
                'A callback function is a function that is called immediately upon being defined.',
            answer2: 'A callback function is a function that returns a value.',
            answer3:
                'A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.',
        },
        {
            id: 2,
            question: 'What is the purpose of callback functions?',
            correct:
                'Callback functions are commonly used in asynchronous programming to handle tasks that need to wait for an operation to complete before executing.',
            answer1: 'Callback functions are used to define synchronous operations.',
            answer2: 'Callback functions are used to define variables.',
            answer3:
                'Callback functions are commonly used in asynchronous programming to handle tasks that need to wait for an operation to complete before executing.',
        },
        {
            id: 3,
            question: 'How do you define a callback function in JavaScript?',
            correct:
                'You define a callback function by passing a function as an argument to another function.',
            answer1: 'You define a callback function using the callback keyword.',
            answer2: 'You define a callback function using the => operator.',
            answer3:
                'You define a callback function by passing a function as an argument to another function.',
        },
        {
            id: 4,
            question: 'What is an example of using a callback function in JavaScript?',
            correct:
                'An example of using a callback function is the setTimeout() function, which takes a callback function as its first argument and a delay in milliseconds as its second argument.',
            answer1:
                'An example of using a callback function is declaring a function within another function.',
            answer2:
                'An example of using a callback function is declaring a function with a return statement.',
            answer3:
                'An example of using a callback function is the setTimeout() function, which takes a callback function as its first argument and a delay in milliseconds as its second argument.',
        },
        {
            id: 5,
            question: 'Why can callback functions lead to callback hell?',
            correct:
                'Callback functions can lead to callback hell because of the difficulty in managing nested callbacks, making the code harder to read and maintain.',
            answer1:
                'Callback functions can lead to callback hell because they execute immediately upon being defined.',
            answer2:
                'Callback functions can lead to callback hell because they do not support asynchronous operations.',
            answer3:
                'Callback functions can lead to callback hell because of the difficulty in managing nested callbacks, making the code harder to read and maintain.',
        },
    ],
    [
        'Classes and Inheritance',
        {
            id: 1,
            question: 'How do you define a class in JavaScript?',
            correct:
                'You define a class using the class keyword followed by the name of the class.',
            answer1: 'You define a class using the var keyword followed by the name of the class.',
            answer2:
                'You define a class using the function keyword followed by the name of the class.',
            answer3:
                'You define a class using the class keyword followed by the name of the class.',
        },
        {
            id: 2,
            question: 'What is inheritance in JavaScript?',
            correct:
                'Inheritance is a mechanism that allows a class to inherit properties and methods from another class.',
            answer1: 'Inheritance is a mechanism that allows a class to create objects.',
            answer2:
                'Inheritance is a mechanism that allows a class to access properties and methods of another class.',
            answer3:
                'Inheritance is a mechanism that allows a class to inherit properties and methods from another class.',
        },
        {
            id: 3,
            question: 'How do you implement inheritance in JavaScript?',
            correct:
                'You implement inheritance in JavaScript by using the extends keyword followed by the name of the parent class.',
            answer1:
                'You implement inheritance in JavaScript by using the inherits keyword followed by the name of the parent class.',
            answer2:
                'You implement inheritance in JavaScript by using the inherit keyword followed by the name of the parent class.',
            answer3:
                'You implement inheritance in JavaScript by using the extends keyword followed by the name of the parent class.',
        },
        {
            id: 4,
            question: 'What is a superclass and subclass in inheritance?',
            correct:
                'A superclass is the parent class from which properties and methods are inherited, and a subclass is a class that inherits from a superclass.',
            answer1:
                'A superclass is a class with no inheritance, and a subclass is a class with inheritance.',
            answer2:
                'A superclass is a class that inherits from another class, and a subclass is the parent class.',
            answer3:
                'A superclass is the parent class from which properties and methods are inherited, and a subclass is a class that inherits from a superclass.',
        },
        {
            id: 5,
            question: 'What is method overriding in inheritance?',
            correct:
                'Method overriding is a feature that allows a subclass to provide a specific implementation of a method that is already defined in its superclass.',
            answer1:
                'Method overriding is a feature that allows a superclass to provide a specific implementation of a method.',
            answer2:
                'Method overriding is a feature that allows a subclass to inherit methods from its superclass.',
            answer3:
                'Method overriding is a feature that allows a subclass to provide a specific implementation of a method that is already defined in its superclass.',
        },
    ],
    [
        'Error Handling',
        {
            id: 1,
            question: 'What is error handling in JavaScript?',
            correct:
                'Error handling is the process of dealing with errors that may occur during the execution of a program.',
            answer1: 'Error handling is the process of logging errors to the console.',
            answer2: 'Error handling is the process of throwing errors in JavaScript.',
            answer3:
                'Error handling is the process of dealing with errors that may occur during the execution of a program.',
        },
        {
            id: 2,
            question: 'How do you handle errors in JavaScript?',
            correct: 'You handle errors in JavaScript using try...catch statements.',
            answer1: 'You handle errors in JavaScript using switch statements.',
            answer2: 'You handle errors in JavaScript using if...else statements.',
            answer3: 'You handle errors in JavaScript using try...catch statements.',
        },
        {
            id: 3,
            question: 'What is the purpose of the try block in error handling?',
            correct: 'The try block is used to enclose the code that may throw an error.',
            answer1: 'The try block is used to execute code.',
            answer2: 'The try block is used to handle errors.',
            answer3: 'The try block is used to enclose the code that may throw an error.',
        },
        {
            id: 4,
            question: 'What is the purpose of the catch block in error handling?',
            correct:
                'The catch block is used to handle the error that was thrown in the try block.',
            answer1: 'The catch block is used to enclose the code that may throw an error.',
            answer2: 'The catch block is used to execute code.',
            answer3:
                'The catch block is used to handle the error that was thrown in the try block.',
        },
        {
            id: 5,
            question: 'What is the purpose of the finally block in error handling?',
            correct:
                'The finally block is used to execute code after the try and catch blocks, regardless of whether an error was thrown or not.',
            answer1: 'The finally block is used to enclose the code that may throw an error.',
            answer2: 'The finally block is used to handle errors.',
            answer3:
                'The finally block is used to execute code after the try and catch blocks, regardless of whether an error was thrown or not.',
        },
    ],
    [
        'Modules',
        {
            id: 1,
            question: 'What are modules in JavaScript?',
            correct:
                'Modules are reusable pieces of code that encapsulate related functionality and can be exported from one JavaScript file and imported into another.',
            answer1: 'Modules are variables in JavaScript.',
            answer2: 'Modules are built-in functions in JavaScript.',
            answer3:
                'Modules are reusable pieces of code that encapsulate related functionality and can be exported from one JavaScript file and imported into another.',
        },
        {
            id: 2,
            question: 'What is the purpose of modules in JavaScript?',
            correct:
                'The purpose of modules is to organize code into reusable and maintainable units, and to prevent pollution of the global namespace.',
            answer1: 'The purpose of modules is to log errors.',
            answer2: 'The purpose of modules is to execute code.',
            answer3:
                'The purpose of modules is to organize code into reusable and maintainable units, and to prevent pollution of the global namespace.',
        },
        {
            id: 3,
            question: 'How do you export a module in JavaScript?',
            correct:
                'You export a module by using the export keyword followed by the name of the variable, function, or class you want to export.',
            answer1:
                'You export a module by using the module keyword followed by the name of the module.',
            answer2:
                'You export a module by using the import keyword followed by the name of the module you want to import.',
            answer3:
                'You export a module by using the export keyword followed by the name of the variable, function, or class you want to export.',
        },
        {
            id: 4,
            question: 'How do you import a module in JavaScript?',
            correct:
                'You import a module by using the import keyword followed by the name of the module you want to import and the path to the module file.',
            answer1:
                'You import a module by using the export keyword followed by the name of the module you want to import.',
            answer2:
                'You import a module by using the require keyword followed by the name of the module.',
            answer3:
                'You import a module by using the import keyword followed by the name of the module you want to import and the path to the module file.',
        },
        {
            id: 5,
            question: 'What is a default export in JavaScript modules?',
            correct:
                'A default export is a way to export a single value, function, or class as the default export of a module, which can then be imported without curly braces.',
            answer1: 'A default export is a way to import modules in JavaScript.',
            answer2:
                'A default export is a way to export multiple values, functions, or classes from a module.',
            answer3:
                'A default export is a way to export a single value, function, or class as the default export of a module, which can then be imported without curly braces.',
        },
    ],
    [
        'Event Loop',
        {
            id: 1,
            question: 'What is the event loop in JavaScript?',
            correct:
                'The event loop is a mechanism that allows JavaScript to handle asynchronous operations by ensuring that the execution of code continues even while waiting for asynchronous tasks to complete.',
            answer1:
                'The event loop is a mechanism that allows JavaScript to handle synchronous operations.',
            answer2:
                'The event loop is a data structure used to store event listeners in JavaScript.',
            answer3:
                'The event loop is a mechanism that allows JavaScript to handle asynchronous operations by ensuring that the execution of code continues even while waiting for asynchronous tasks to complete.',
        },
        {
            id: 2,
            question: 'How does the event loop work in JavaScript?',
            correct:
                'The event loop continuously checks the call stack for functions to execute. If the call stack is empty, it looks for tasks in the callback queue and adds them to the call stack for execution.',
            answer1: 'The event loop checks for errors in the code.',
            answer2: 'The event loop executes code in a synchronous manner.',
            answer3:
                'The event loop continuously checks the call stack for functions to execute. If the call stack is empty, it looks for tasks in the callback queue and adds them to the call stack for execution.',
        },
        {
            id: 3,
            question: 'What is the call stack in JavaScript?',
            correct:
                'The call stack is a data structure that records the function calls made during the execution of a program.',
            answer1: 'The call stack is a mechanism for handling asynchronous operations.',
            answer2: 'The call stack is a data structure for storing event listeners.',
            answer3:
                'The call stack is a data structure that records the function calls made during the execution of a program.',
        },
        {
            id: 4,
            question: 'What is the callback queue in JavaScript?',
            correct:
                'The callback queue is a data structure that holds tasks that are ready to be executed once the call stack is empty.',
            answer1: 'The callback queue is a data structure for storing event listeners.',
            answer2: 'The callback queue is a mechanism for handling errors in JavaScript.',
            answer3:
                'The callback queue is a data structure that holds tasks that are ready to be executed once the call stack is empty.',
        },
        {
            id: 5,
            question: 'How does the event loop handle asynchronous tasks?',
            correct:
                "The event loop offloads asynchronous tasks to the browser's APIs, which handle the tasks asynchronously. Once the tasks are complete, they are added to the callback queue for execution.",
            answer1:
                'The event loop waits for asynchronous tasks to complete before executing other code.',
            answer2: 'The event loop executes asynchronous tasks synchronously.',
            answer3:
                "The event loop offloads asynchronous tasks to the browser's APIs, which handle the tasks asynchronously. Once the tasks are complete, they are added to the callback queue for execution.",
        },
    ],
    [
        'DOM Manipulation',
        {
            id: 1,
            question: 'What is the Document Object Model (DOM) in JavaScript?',
            correct:
                "The Document Object Model (DOM) is a programming interface that represents the structure of a document as a tree of objects, allowing you to interact with and manipulate the document's elements.",
            answer1:
                'The Document Object Model (DOM) is a mechanism for handling asynchronous operations.',
            answer2: 'The Document Object Model (DOM) is a built-in JavaScript library.',
            answer3:
                "The Document Object Model (DOM) is a programming interface that represents the structure of a document as a tree of objects, allowing you to interact with and manipulate the document's elements.",
        },
        {
            id: 2,
            question: 'How do you access elements in the DOM?',
            correct:
                'You can access elements in the DOM using methods like getElementById, getElementsByClassName, getElementsByTagName, querySelector, and querySelectorAll.',
            answer1:
                'You can access elements in the DOM using methods like addEventListener and removeEventListener.',
            answer2:
                'You can access elements in the DOM using methods like createElement and appendChild.',
            answer3:
                'You can access elements in the DOM using methods like getElementById, getElementsByClassName, getElementsByTagName, querySelector, and querySelectorAll.',
        },
        {
            id: 3,
            question: 'What is the difference between innerHTML and innerText?',
            correct:
                'innerHTML sets or returns the HTML content (including tags) of an element, while innerText sets or returns the text content (without HTML tags) of an element.',
            answer1:
                'innerHTML sets or returns the value of an attribute, while innerText sets or returns the text content of an element.',
            answer2:
                'innerHTML sets or returns the text content of an element, while innerText sets or returns the HTML content of an element.',
            answer3:
                'innerHTML sets or returns the HTML content (including tags) of an element, while innerText sets or returns the text content (without HTML tags) of an element.',
        },
        {
            id: 4,
            question: 'How do you change the style of an element in the DOM?',
            correct:
                'You can change the style of an element in the DOM by accessing its style property and setting the desired CSS properties.',
            answer1:
                'You can change the style of an element in the DOM by using the setAttribute method.',
            answer2:
                'You can change the style of an element in the DOM by using the classList property.',
            answer3:
                'You can change the style of an element in the DOM by accessing its style property and setting the desired CSS properties.',
        },
        {
            id: 5,
            question: 'What is event delegation in DOM manipulation?',
            correct:
                'Event delegation is a technique where you attach a single event listener to a parent element, and then use conditional logic to determine which child element triggered the event.',
            answer1:
                'Event delegation is a technique where you attach event listeners directly to child elements.',
            answer2:
                'Event delegation is a technique where you attach multiple event listeners to a single element.',
            answer3:
                'Event delegation is a technique where you attach a single event listener to a parent element, and then use conditional logic to determine which child element triggered the event.',
        },
    ],
    [
        'Events',
        {
            id: 1,
            question: 'What are events in JavaScript?',
            correct:
                'Events are actions or occurrences that happen in the browser, such as user interactions (clicks, keypresses) or system events (page load, resize).',
            answer1: 'Events are variables in JavaScript.',
            answer2: 'Events are functions in JavaScript.',
            answer3:
                'Events are actions or occurrences that happen in the browser, such as user interactions (clicks, keypresses) or system events (page load, resize).',
        },
        {
            id: 2,
            question: 'How do you handle events in JavaScript?',
            correct:
                'You can handle events in JavaScript by attaching event listeners to DOM elements using methods like addEventListener or by assigning event handler attributes directly in HTML.',
            answer1:
                'You can handle events in JavaScript using methods like createElement and appendChild.',
            answer2:
                'You can handle events in JavaScript using methods like getElementById and querySelector.',
            answer3:
                'You can handle events in JavaScript by attaching event listeners to DOM elements using methods like addEventListener or by assigning event handler attributes directly in HTML.',
        },
        {
            id: 3,
            question: 'What is event bubbling and event capturing?',
            correct:
                'Event bubbling is the process where an event triggered on a child element propagates up through its ancestors to the root of the document. Event capturing is the opposite, where the event is captured from the root down to the target element.',
            answer1:
                'Event bubbling is the process where an event triggered on a child element is captured by its parent. Event capturing is the process where the event is captured by the document.',
            answer2:
                'Event bubbling is the process where an event triggered on a parent element propagates down to its children. Event capturing is the opposite.',
            answer3:
                'Event bubbling is the process where an event triggered on a child element propagates up through its ancestors to the root of the document. Event capturing is the opposite, where the event is captured from the root down to the target element.',
        },
        {
            id: 4,
            question: 'What is the event object in JavaScript?',
            correct:
                'The event object is a special object that contains information about the event that occurred, such as the type of event, the target element, and any additional data related to the event.',
            answer1: 'The event object is a built-in function in JavaScript.',
            answer2: 'The event object is a method for handling events in JavaScript.',
            answer3:
                'The event object is a special object that contains information about the event that occurred, such as the type of event, the target element, and any additional data related to the event.',
        },
        {
            id: 5,
            question: 'How do you prevent the default behavior of an event in JavaScript?',
            correct:
                'You can prevent the default behavior of an event by calling the preventDefault() method on the event object.',
            answer1:
                'You can prevent the default behavior of an event by using the return keyword.',
            answer2:
                'You can prevent the default behavior of an event by setting the defaultPrevented property of the event object to true.',
            answer3:
                'You can prevent the default behavior of an event by calling the preventDefault() method on the event object.',
        },
    ],
    [
        'Fetch API',
        {
            id: 1,
            question: 'What is the Fetch API in JavaScript?',
            correct:
                'The Fetch API is a modern JavaScript interface for fetching resources (such as JSON, XML, or images) across the network.',
            answer1: 'The Fetch API is a method for manipulating the DOM in JavaScript.',
            answer2: 'The Fetch API is a built-in function for handling events in JavaScript.',
            answer3:
                'The Fetch API is a modern JavaScript interface for fetching resources (such as JSON, XML, or images) across the network.',
        },
        {
            id: 2,
            question: 'How do you make a fetch request in JavaScript?',
            correct:
                'You make a fetch request by calling the fetch() function and passing the URL of the resource you want to fetch as an argument.',
            answer1: 'You make a fetch request by using the XMLHttpRequest object.',
            answer2: 'You make a fetch request by using the AJAX method.',
            answer3:
                'You make a fetch request by calling the fetch() function and passing the URL of the resource you want to fetch as an argument.',
        },
        {
            id: 3,
            question: 'What are the advantages of using the Fetch API over traditional AJAX?',
            correct:
                'The Fetch API provides a more modern and flexible interface for making network requests, supports Promises for easier error handling and chaining of requests, and offers built-in support for streaming and caching.',
            answer1: 'The Fetch API provides better performance than traditional AJAX.',
            answer2: 'The Fetch API provides more security than traditional AJAX.',
            answer3:
                'The Fetch API provides a more modern and flexible interface for making network requests, supports Promises for easier error handling and chaining of requests, and offers built-in support for streaming and caching.',
        },
        {
            id: 4,
            question: 'How do you handle the response from a fetch request?',
            correct:
                'You handle the response from a fetch request by using the then() method to chain a series of callback functions that process the response data.',
            answer1:
                'You handle the response from a fetch request by using the catch() method to catch any errors that occur during the request.',
            answer2:
                'You handle the response from a fetch request by using the finally() method to execute code after the request completes, regardless of whether it was successful or not.',
            answer3:
                'You handle the response from a fetch request by using the then() method to chain a series of callback functions that process the response data.',
        },
        {
            id: 5,
            question: 'How do you handle errors in a fetch request?',
            correct:
                'You handle errors in a fetch request by using the catch() method to catch any errors that occur during the request.',
            answer1:
                'You handle errors in a fetch request by using the then() method to chain a series of callback functions that process the response data.',
            answer2:
                'You handle errors in a fetch request by using the finally() method to execute code after the request completes, regardless of whether it was successful or not.',
            answer3:
                'You handle errors in a fetch request by using the catch() method to catch any errors that occur during the request.',
        },
    ],
    [
        'AJAX',
        {
            id: 1,
            question: 'What is AJAX in JavaScript?',
            correct:
                'AJAX (Asynchronous JavaScript and XML) is a technique for making asynchronous HTTP requests from the client to the server, allowing you to update parts of a web page without reloading the entire page.',
            answer1: 'AJAX is a method for manipulating the DOM in JavaScript.',
            answer2: 'AJAX is a built-in function for handling events in JavaScript.',
            answer3:
                'AJAX (Asynchronous JavaScript and XML) is a technique for making asynchronous HTTP requests from the client to the server, allowing you to update parts of a web page without reloading the entire page.',
        },
        {
            id: 2,
            question: 'How do you make an AJAX request in JavaScript?',
            correct:
                'You make an AJAX request by creating an XMLHttpRequest object, configuring it with the desired HTTP method and URL, and then sending the request.',
            answer1: 'You make an AJAX request by using the fetch() function.',
            answer2: 'You make an AJAX request by using the jQuery library.',
            answer3:
                'You make an AJAX request by creating an XMLHttpRequest object, configuring it with the desired HTTP method and URL, and then sending the request.',
        },
        {
            id: 3,
            question: 'What are the advantages of using AJAX?',
            correct:
                'The main advantage of using AJAX is that it allows for asynchronous communication between the client and server, which can improve the responsiveness and performance of web applications.',
            answer1: 'AJAX provides better security than traditional page-based navigation.',
            answer2: 'AJAX simplifies the process of updating the entire web page.',
            answer3:
                'The main advantage of using AJAX is that it allows for asynchronous communication between the client and server, which can improve the responsiveness and performance of web applications.',
        },
        {
            id: 4,
            question: 'How do you handle the response from an AJAX request?',
            correct:
                "You handle the response from an AJAX request by setting up event listeners for the XMLHttpRequest object's events, such as onload for successful responses and onerror for errors.",
            answer1:
                'You handle the response from an AJAX request by using the then() method to chain a series of callback functions that process the response data.',
            answer2:
                'You handle the response from an AJAX request by using the catch() method to catch any errors that occur during the request.',
            answer3:
                "You handle the response from an AJAX request by setting up event listeners for the XMLHttpRequest object's events, such as onload for successful responses and onerror for errors.",
        },
        {
            id: 5,
            question: 'What is CORS (Cross-Origin Resource Sharing) in AJAX?',
            correct:
                'CORS is a security feature implemented by browsers to prevent requests from one origin (domain) from accessing resources from another origin unless explicit permission is granted.',
            answer1: 'CORS is a method for handling errors in AJAX requests.',
            answer2: 'CORS is a technique for manipulating the DOM in JavaScript.',
            answer3:
                'CORS is a security feature implemented by browsers to prevent requests from one origin (domain) from accessing resources from another origin unless explicit permission is granted.',
        },
    ],
    [
        'Regular Expressions',
        {
            id: 1,
            question: 'What are regular expressions (regex) in JavaScript?',
            correct:
                'Regular expressions are patterns used to match character combinations in strings, providing a powerful and flexible way to search, replace, and validate text.',
            answer1: 'Regular expressions are functions in JavaScript.',
            answer2: 'Regular expressions are variables in JavaScript.',
            answer3:
                'Regular expressions are patterns used to match character combinations in strings, providing a powerful and flexible way to search, replace, and validate text.',
        },
        {
            id: 2,
            question: 'How do you create a regular expression in JavaScript?',
            correct:
                'You create a regular expression by enclosing the pattern in forward slashes (/) and passing it as an argument to the RegExp constructor or using the regex literal syntax.',
            answer1: 'You create a regular expression using the new RegExp() method.',
            answer2: 'You create a regular expression using the match() method.',
            answer3:
                'You create a regular expression by enclosing the pattern in forward slashes (/) and passing it as an argument to the RegExp constructor or using the regex literal syntax.',
        },
        {
            id: 3,
            question: 'What are some common metacharacters used in regular expressions?',
            correct:
                'Common metacharacters used in regular expressions include . (dot) for matching any single character, * (asterisk) for matching zero or more occurrences of the preceding character, and ^ (caret) and $ (dollar sign) for matching the start and end of a line, respectively.',
            answer1:
                'Common metacharacters used in regular expressions include + (plus sign) for matching one or more occurrences of the preceding character.',
            answer2:
                'Common metacharacters used in regular expressions include ? (question mark) for matching zero or one occurrence of the preceding character.',
            answer3:
                'Common metacharacters used in regular expressions include . (dot) for matching any single character, * (asterisk) for matching zero or more occurrences of the preceding character, and ^ (caret) and $ (dollar sign) for matching the start and end of a line, respectively.',
        },
        {
            id: 4,
            question: 'How do you use regular expressions for pattern matching?',
            correct:
                'You use methods like test() or exec() on a regular expression object to search for matches within a string and return true or false (test) or an array of matching substrings (exec).',
            answer1:
                'You use the match() method on a string to test if it matches a given regular expression pattern.',
            answer2:
                'You use the replace() method on a string to replace matches of a given regular expression pattern with a specified replacement.',
            answer3:
                'You use methods like test() or exec() on a regular expression object to search for matches within a string and return true or false (test) or an array of matching substrings (exec).',
        },
        {
            id: 5,
            question: 'What are flags in regular expressions?',
            correct:
                'Flags (also known as modifiers) are optional parameters that can be added to the end of a regular expression to change its behavior, such as case insensitivity (i), global search (g), or multiline mode (m).',
            answer1: 'Flags are predefined patterns in regular expressions.',
            answer2: 'Flags are variables used to store the result of a regular expression match.',
            answer3:
                'Flags (also known as modifiers) are optional parameters that can be added to the end of a regular expression to change its behavior, such as case insensitivity (i), global search (g), or multiline mode (m).',
        },
    ],
    [
        'Local Storage and Session Storage',
        {
            id: 1,
            question: 'What is local storage in JavaScript?',
            correct:
                "Local storage is a web browser feature that allows you to store key-value pairs locally on the user's device, persisting even after the browser is closed or the device is restarted.",
            answer1: 'Local storage is a server-side storage mechanism.',
            answer2: 'Local storage is a method for handling events in JavaScript.',
            answer3:
                "Local storage is a web browser feature that allows you to store key-value pairs locally on the user's device, persisting even after the browser is closed or the device is restarted.",
        },
        {
            id: 2,
            question: 'How do you use local storage in JavaScript?',
            correct:
                'You use the localStorage object in JavaScript to interact with local storage, using methods like setItem(), getItem(), and removeItem() to store, retrieve, and delete data, respectively.',
            answer1: 'You use the localStorage property in JavaScript to define local variables.',
            answer2:
                'You use the localStorage method in JavaScript to handle asynchronous operations.',
            answer3:
                'You use the localStorage object in JavaScript to interact with local storage, using methods like setItem(), getItem(), and removeItem() to store, retrieve, and delete data, respectively.',
        },
        {
            id: 3,
            question: 'What is session storage in JavaScript?',
            correct:
                'Session storage is similar to local storage, but data stored in session storage is cleared when the browser session ends (e.g., when the browser is closed or the tab is closed).',
            answer1: 'Session storage is a server-side storage mechanism.',
            answer2: 'Session storage is a method for handling events in JavaScript.',
            answer3:
                'Session storage is similar to local storage, but data stored in session storage is cleared when the browser session ends (e.g., when the browser is closed or the tab is closed).',
        },
        {
            id: 4,
            question: 'How do you use session storage in JavaScript?',
            correct:
                'You use the sessionStorage object in JavaScript in the same way as localStorage, but data stored in sessionStorage is scoped to the current browser session.',
            answer1:
                'You use the sessionStorage property in JavaScript to define session variables.',
            answer2:
                'You use the sessionStorage method in JavaScript to handle asynchronous operations.',
            answer3:
                'You use the sessionStorage object in JavaScript in the same way as localStorage, but data stored in sessionStorage is scoped to the current browser session.',
        },
        {
            id: 5,
            question: 'What are the differences between local storage and session storage?',
            correct:
                'Local storage persists indefinitely until cleared by the user or the browser, while session storage is cleared when the browser session ends. Additionally, data in local storage is accessible across browser tabs and windows, while session storage is scoped to the current tab or window.',
            answer1:
                'Local storage is limited to 5MB per domain, while session storage has no such limitation.',
            answer2: 'Local storage encrypts data for security, while session storage does not.',
            answer3:
                'Local storage persists indefinitely until cleared by the user or the browser, while session storage is cleared when the browser session ends. Additionally, data in local storage is accessible across browser tabs and windows, while session storage is scoped to the current tab or window.',
        },
    ],
    [
        'Strict Mode',
        {
            id: 1,
            question: 'What is strict mode in JavaScript?',
            correct:
                'Strict mode is a feature introduced in ECMAScript 5 that allows you to opt in to a restricted variant of JavaScript, enforcing stricter parsing and error handling rules to make your code more robust and secure.',
            answer1: 'Strict mode is a way to define variables in JavaScript.',
            answer2: 'Strict mode is a method for handling events in JavaScript.',
            answer3:
                'Strict mode is a feature introduced in ECMAScript 5 that allows you to opt in to a restricted variant of JavaScript, enforcing stricter parsing and error handling rules to make your code more robust and secure.',
        },
        {
            id: 2,
            question: 'How do you enable strict mode in JavaScript?',
            correct:
                "You enable strict mode by adding the 'use strict'; directive at the beginning of a script or a function.",
            answer1: "You enable strict mode by setting a global variable named 'strict' to true.",
            answer2: 'Strict mode is enabled by default in all JavaScript code.',
            answer3:
                "You enable strict mode by adding the 'use strict'; directive at the beginning of a script or a function.",
        },
        {
            id: 3,
            question: 'What are some benefits of using strict mode?',
            correct:
                'Some benefits of using strict mode include catching common programming errors and unsafe actions, preventing accidental global variable creation, and improving performance in some cases by disabling certain JavaScript features.',
            answer1: 'Strict mode improves the readability of JavaScript code.',
            answer2: 'Strict mode provides better compatibility with older browsers.',
            answer3:
                'Some benefits of using strict mode include catching common programming errors and unsafe actions, preventing accidental global variable creation, and improving performance in some cases by disabling certain JavaScript features.',
        },
        {
            id: 4,
            question: 'What are some restrictions imposed by strict mode?',
            correct:
                'Strict mode restricts certain actions that are considered unsafe or deprecated, such as using undeclared variables, deleting non-configurable properties, and using duplicate parameter names in functions.',
            answer1: 'Strict mode restricts the use of external libraries.',
            answer2: 'Strict mode restricts the use of JavaScript comments.',
            answer3:
                'Strict mode restricts certain actions that are considered unsafe or deprecated, such as using undeclared variables, deleting non-configurable properties, and using duplicate parameter names in functions.',
        },
        {
            id: 5,
            question: 'Is strict mode backward compatible with older versions of JavaScript?',
            correct:
                'Yes, strict mode is designed to be backward compatible with older versions of JavaScript, so existing code should continue to work without modification when strict mode is enabled.',
            answer1:
                'No, strict mode breaks backward compatibility with older versions of JavaScript.',
            answer2: 'Strict mode compatibility depends on the web browser being used.',
            answer3:
                'Yes, strict mode is designed to be backward compatible with older versions of JavaScript, so existing code should continue to work without modification when strict mode is enabled.',
        },
    ],
];
const topicsReact: Topics[] = [
    [
        'Introduction to React',
        {
            id: 1,
            question: 'What is React primarily used for?',
            correct: 'Building user interfaces',
            answer1: 'Building databases',
            answer2: 'Building user interfaces',
            answer3: 'Building server-side applications',
        },
        {
            id: 2,
            question: 'Who developed React?',
            correct: 'Facebook',
            answer1: 'Google',
            answer2: 'Facebook',
            answer3: 'Microsoft',
        },
        {
            id: 3,
            question: 'In what year was React released?',
            correct: '2013',
            answer1: '2010',
            answer2: '2013',
            answer3: '2015',
        },
        {
            id: 4,
            question: 'What is the main architecture principle of React?',
            correct: 'Component-based architecture',
            answer1: 'Model-view-controller architecture',
            answer2: 'Component-based architecture',
            answer3: 'Layered architecture',
        },
        {
            id: 5,
            question: 'Which language syntax extension does React use to describe UI elements?',
            correct: 'JSX',
            answer1: 'HTML',
            answer2: 'JSX',
            answer3: 'XML',
        },
    ],
    [
        'JSX and Rendering Elements',
        {
            id: 1,
            question: 'What does JSX stand for?',
            correct: 'JavaScript XML',
            answer1: 'JavaScript XML',
            answer2: 'JavaScript eXtension',
            answer3: 'Java Syntax eXtension',
        },
        {
            id: 2,
            question: 'How do you embed a JavaScript expression in JSX?',
            correct: 'Using curly braces {}',
            answer1: 'Using parentheses ()',
            answer2: 'Using curly braces {}',
            answer3: 'Using square brackets []',
        },
        {
            id: 3,
            question: 'What is the correct syntax to render an element into the DOM in React?',
            correct: "ReactDOM.render(<App />, document.getElementById('root'))",
            answer1: "React.render(<App />, document.getElementById('root'))",
            answer2: "ReactDOM.render(<App />, document.getElementById('root'))",
            answer3: "React.renderComponent(<App />, document.getElementById('root'))",
        },
        {
            id: 4,
            question: 'What is the purpose of Babel in React?',
            correct: 'Transpile JSX into JavaScript',
            answer1: 'Compile JavaScript into binary code',
            answer2: 'Transpile JSX into JavaScript',
            answer3: 'Convert HTML into JSX',
        },
        {
            id: 5,
            question: 'Which method is used to create a React element?',
            correct: 'React.createElement',
            answer1: 'React.createComponent',
            answer2: 'React.createElement',
            answer3: 'React.newElement',
        },
    ],
    [
        'Components and Props',
        {
            id: 1,
            question: 'How do you define a functional component in React?',
            correct: 'As a function that returns JSX',
            answer1: 'As a class that extends React.Component',
            answer2: 'As a function that returns JSX',
            answer3: 'As an object with a render method',
        },
        {
            id: 2,
            question: 'What are props in React?',
            correct: 'Inputs to a component',
            answer1: 'Outputs of a component',
            answer2: 'Inputs to a component',
            answer3: 'Methods of a component',
        },
        {
            id: 3,
            question: 'How do you pass props to a component?',
            correct: 'Using HTML-like attributes',
            answer1: 'Using the setProps method',
            answer2: 'Using HTML-like attributes',
            answer3: 'Using the this.props object',
        },
        {
            id: 4,
            question: 'What is the correct syntax to access props in a class component?',
            correct: 'this.props.propName',
            answer1: 'props.propName',
            answer2: 'this.props.propName',
            answer3: 'this.propName',
        },
        {
            id: 5,
            question: 'Can props be changed inside the component?',
            correct: 'No',
            answer1: 'Yes',
            answer2: 'No',
            answer3: 'Only if they are passed as mutable',
        },
    ],
    [
        'State and Lifecycle',
        {
            id: 1,
            question: 'What is state in React?',
            correct: 'An object that determines how a component renders and behaves',
            answer1: 'A permanent storage for component data',
            answer2: 'An object that determines how a component renders and behaves',
            answer3: 'A static configuration for components',
        },
        {
            id: 2,
            question: 'How do you initialize state in a React class component?',
            correct: 'Using the constructor method',
            answer1: 'Using the initState method',
            answer2: 'Using the constructor method',
            answer3: 'Using the state method',
        },
        {
            id: 3,
            question: 'Which method is used to update state in a React component?',
            correct: 'this.setState',
            answer1: 'this.setState',
            answer2: 'this.updateState',
            answer3: 'this.changeState',
        },
        {
            id: 4,
            question: 'What is the correct order of lifecycle methods in a React class component?',
            correct:
                'componentDidMount, shouldComponentUpdate, componentDidUpdate, componentWillUnmount',
            answer1:
                'componentWillMount, componentDidMount, shouldComponentUpdate, componentWillUnmount',
            answer2:
                'componentDidMount, shouldComponentUpdate, componentDidUpdate, componentWillUnmount',
            answer3:
                'componentWillMount, componentDidMount, componentDidUpdate, componentWillUnmount',
        },
        {
            id: 5,
            question:
                'Which lifecycle method is called after a component is rendered for the first time?',
            correct: 'componentDidMount',
            answer1: 'componentWillMount',
            answer2: 'componentDidUpdate',
            answer3: 'componentDidMount',
        },
    ],
    [
        'Handling Events',
        {
            id: 1,
            question: 'How do you handle events in React?',
            correct: 'Using event handlers defined as methods',
            answer1: 'Using event listeners attached directly to the DOM',
            answer2: 'Using event handlers defined as methods',
            answer3: 'Using inline event handlers',
        },
        {
            id: 2,
            question: 'How do you bind event handlers in class components?',
            correct: 'Using the bind method or arrow functions',
            answer1: 'Using the bind method only',
            answer2: 'Using the bind method or arrow functions',
            answer3: 'Using the apply method',
        },
        {
            id: 3,
            question:
                'Which property of the event object would you use to prevent the default action?',
            correct: 'preventDefault',
            answer1: 'stopPropagation',
            answer2: 'preventDefault',
            answer3: 'stopImmediatePropagation',
        },
        {
            id: 4,
            question: 'How do you pass arguments to event handlers in React?',
            correct: 'Using an arrow function or the bind method',
            answer1: 'Using the call method',
            answer2: 'Using an arrow function or the bind method',
            answer3: 'Using the apply method',
        },
        {
            id: 5,
            question: 'What is the difference between onClick and onclick in React?',
            correct: 'onClick is used in React, onclick is used in HTML',
            answer1: 'There is no difference',
            answer2: 'onClick is used in React, onclick is used in HTML',
            answer3: 'onclick is a deprecated attribute',
        },
    ],
    [
        'Conditional Rendering',
        {
            id: 1,
            question: 'Which operator can be used for conditional rendering in JSX?',
            correct: 'Ternary operator',
            answer1: 'Logical AND operator',
            answer2: 'Ternary operator',
            answer3: 'Comma operator',
        },
        {
            id: 2,
            question: 'How do you conditionally render a component in React?',
            correct: 'Using an if statement or ternary operator',
            answer1: 'Using a switch statement',
            answer2: 'Using an if statement or ternary operator',
            answer3: 'Using a loop',
        },
        {
            id: 3,
            question:
                'What is the correct syntax for using the logical && operator for conditional rendering?',
            correct: 'condition && <Component />',
            answer1: 'condition & <Component />',
            answer2: 'condition || <Component />',
            answer3: 'condition && <Component />',
        },
        {
            id: 4,
            question: 'How can you conditionally apply class names in JSX?',
            correct: 'Using a ternary operator or a logical && operator',
            answer1: 'Using a loop',
            answer2: 'Using a ternary operator or a logical && operator',
            answer3: 'Using a function call',
        },
        {
            id: 5,
            question:
                'What does the following JSX syntax do? {isLoggedIn ? <LogoutButton /> : <LoginButton />}',
            correct: 'Renders LogoutButton if isLoggedIn is true, otherwise renders LoginButton',
            answer1: 'Always renders LogoutButton',
            answer2: 'Renders LogoutButton if isLoggedIn is true, otherwise renders LoginButton',
            answer3: 'Throws an error',
        },
    ],
    [
        'Lists and Keys',
        {
            id: 1,
            question: 'How do you create a list of elements in React?',
            correct: 'Using the map() function',
            answer1: 'Using the forEach() function',
            answer2: 'Using the map() function',
            answer3: 'Using the filter() function',
        },
        {
            id: 2,
            question: 'Why is it important to use keys in lists?',
            correct: 'To help React identify which items have changed',
            answer1: 'To ensure items are rendered in alphabetical order',
            answer2: 'To help React identify which items have changed',
            answer3: 'To improve the styling of the list',
        },
        {
            id: 3,
            question: 'What should you use as a key for list items?',
            correct: 'A unique and stable identifier',
            answer1: 'The index of the item in the array',
            answer2: 'A unique and stable identifier',
            answer3: 'The name of the item',
        },
        {
            id: 4,
            question: 'What happens if you don’t provide a key in a list?',
            correct: 'React will show a warning and may have performance issues',
            answer1: 'The list will not be rendered',
            answer2: 'React will show a warning and may have performance issues',
            answer3: 'React will automatically generate keys',
        },
        {
            id: 5,
            question: 'Can keys be duplicated in a list?',
            correct: 'No, keys must be unique among siblings',
            answer1: 'Yes, but only for adjacent items',
            answer2: 'Yes, but only if they are numbers',
            answer3: 'No, keys must be unique among siblings',
        },
    ],
    [
        'Forms in React',
        {
            id: 1,
            question: 'How do you handle form data in React?',
            correct: 'Using controlled components',
            answer1: 'Using uncontrolled components',
            answer2: 'Using controlled components',
            answer3: 'Using inline event handlers',
        },
        {
            id: 2,
            question: 'What is a controlled component?',
            correct: 'A component where form data is handled by the component state',
            answer1: 'A component with no state',
            answer2: 'A component where form data is handled by the DOM',
            answer3: 'A component where form data is handled by the component state',
        },
        {
            id: 3,
            question: 'How do you update the state when the form input changes?',
            correct: 'Using the onChange event handler',
            answer1: 'Using the onClick event handler',
            answer2: 'Using the onChange event handler',
            answer3: 'Using the onInput event handler',
        },
        {
            id: 4,
            question: 'What is the purpose of the onSubmit event in a form?',
            correct: 'To handle form submission',
            answer1: 'To reset the form',
            answer2: 'To validate the form fields',
            answer3: 'To handle form submission',
        },
        {
            id: 5,
            question: 'How do you prevent the default behavior of form submission?',
            correct: 'Using event.preventDefault() in the onSubmit handler',
            answer1: 'Using event.stopPropagation() in the onSubmit handler',
            answer2: 'Using event.preventDefault() in the onSubmit handler',
            answer3: 'Returning false from the onSubmit handler',
        },
    ],
    [
        'Lifting State Up',
        {
            id: 1,
            question: 'What does "lifting state up" mean in React?',
            correct: 'Moving state to a common ancestor component',
            answer1: 'Passing state down as props',
            answer2: 'Moving state to a common ancestor component',
            answer3: 'Creating a new state variable',
        },
        {
            id: 2,
            question: 'Why would you lift state up?',
            correct: 'To share state between multiple components',
            answer1: 'To simplify component structure',
            answer2: 'To share state between multiple components',
            answer3: 'To optimize performance',
        },
        {
            id: 3,
            question: 'What is a common use case for lifting state up?',
            correct: 'Form inputs that depend on each other',
            answer1: 'Styling components',
            answer2: 'Form inputs that depend on each other',
            answer3: 'Logging user interactions',
        },
        {
            id: 4,
            question: 'How do you lift state up in React?',
            correct: 'Move the state to the nearest common ancestor and pass it down as props',
            answer1: 'Create a global state object',
            answer2: 'Move the state to the nearest common ancestor and pass it down as props',
            answer3: 'Use the context API',
        },
        {
            id: 5,
            question:
                'What should you pass down to child components to allow them to update the lifted state?',
            correct: 'State and setter functions as props',
            answer1: 'Only state as props',
            answer2: 'Only setter functions as props',
            answer3: 'State and setter functions as props',
        },
    ],
    [
        'Composition vs Inheritance',
        {
            id: 1,
            question: 'Which principle does React recommend over inheritance?',
            correct: 'Composition',
            answer1: 'Inheritance',
            answer2: 'Composition',
            answer3: 'Aggregation',
        },
        {
            id: 2,
            question: 'How do you use composition in React?',
            correct: 'By including components within other components',
            answer1: 'By extending classes',
            answer2: 'By including components within other components',
            answer3: 'By using mixins',
        },
        {
            id: 3,
            question: 'What is a benefit of using composition over inheritance?',
            correct: 'Greater flexibility and reusability',
            answer1: 'Simpler syntax',
            answer2: 'Faster performance',
            answer3: 'Greater flexibility and reusability',
        },
        {
            id: 4,
            question: 'What is an example of composition in React?',
            correct: 'Passing components as props',
            answer1: 'Using super() to call parent class constructor',
            answer2: 'Overriding methods in subclasses',
            answer3: 'Passing components as props',
        },
        {
            id: 5,
            question: 'Can you combine composition and inheritance in React?',
            correct: 'It is possible but not recommended',
            answer1: 'No, they are mutually exclusive',
            answer2: 'Yes, they are often used together',
            answer3: 'It is possible but not recommended',
        },
    ],
    [
        'React Router',
        {
            id: 1,
            question: 'What is React Router used for?',
            correct: 'Handling navigation in a React application',
            answer1: 'Handling state management',
            answer2: 'Handling navigation in a React application',
            answer3: 'Handling form submissions',
        },
        {
            id: 2,
            question: 'Which component is used to define a route in React Router?',
            correct: '<Route>',
            answer1: '<Router>',
            answer2: '<Link>',
            answer3: '<Route>',
        },
        {
            id: 3,
            question: 'What is the purpose of the <Switch> component in React Router?',
            correct: 'To render only the first route that matches the location',
            answer1: 'To switch between different layouts',
            answer2: 'To render only the first route that matches the location',
            answer3: 'To handle route transitions',
        },
        {
            id: 4,
            question: 'How do you create a link to another route in React Router?',
            correct: 'Using the <Link> component',
            answer1: 'Using the <Navigate> component',
            answer2: 'Using the <Link> component',
            answer3: 'Using the <Redirect> component',
        },
        {
            id: 5,
            question:
                'What hook is used to access the current route parameters in a functional component?',
            correct: 'useParams',
            answer1: 'useRoute',
            answer2: 'useNavigate',
            answer3: 'useParams',
        },
    ],
    [
        'React Hooks',
        {
            id: 1,
            question: 'What are React Hooks?',
            correct:
                'Functions that let you use state and lifecycle features in functional components',
            answer1:
                'Functions that let you use state and lifecycle features in functional components',
            answer2: 'Functions that replace Redux',
            answer3: 'Functions for creating higher-order components',
        },
        {
            id: 2,
            question: 'Which hook is used to add state to a functional component?',
            correct: 'useState',
            answer1: 'useEffect',
            answer2: 'useContext',
            answer3: 'useState',
        },
        {
            id: 3,
            question: 'What is the purpose of the useEffect hook?',
            correct: 'To perform side effects in functional components',
            answer1: 'To manage state',
            answer2: 'To perform side effects in functional components',
            answer3: 'To handle events',
        },
        {
            id: 4,
            question: 'How do you create a custom hook in React?',
            correct: 'By creating a function that uses other hooks',
            answer1: 'By extending the React.Component class',
            answer2: 'By creating a function that uses other hooks',
            answer3: 'By using the useCustomHook function',
        },
        {
            id: 5,
            question: 'Can hooks be used in class components?',
            correct: 'No, hooks are only for functional components',
            answer1: 'Yes, with the use of higher-order components',
            answer2: 'No, hooks are only for functional components',
            answer3: 'Yes, but it is not recommended',
        },
    ],
    [
        'Context API',
        {
            id: 1,
            question: 'What is the Context API in React used for?',
            correct: 'To share data between components without passing props down manually',
            answer1: 'To manage component lifecycle',
            answer2: 'To share data between components without passing props down manually',
            answer3: 'To handle routing in a React application',
        },
        {
            id: 2,
            question: 'How do you create a context in React?',
            correct: 'Using the createContext function',
            answer1: 'Using the useContext hook',
            answer2: 'Using the createContext function',
            answer3: 'Using the createContext API',
        },
        {
            id: 3,
            question: 'How do you access context values in a functional component?',
            correct: 'Using the useContext hook',
            answer1: 'Using the context API',
            answer2: 'Using the useContext hook',
            answer3: 'Using the useEffect hook',
        },
        {
            id: 4,
            question: 'What component is used to provide context values to its children?',
            correct: 'The Provider component',
            answer1: 'The Provider component',
            answer2: 'The Context component',
            answer3: 'The Consumer component',
        },
        {
            id: 5,
            question: 'Can you have multiple context providers in a single React application?',
            correct: 'Yes, you can nest multiple providers',
            answer1: 'No, only one provider is allowed',
            answer2: 'Yes, you can nest multiple providers',
            answer3: 'Yes, but only if they have different values',
        },
    ],
    [
        'Error Boundaries',
        {
            id: 1,
            question: 'What is an error boundary in React?',
            correct:
                'A component that catches JavaScript errors anywhere in its child component tree',
            answer1: 'A function that handles asynchronous errors',
            answer2:
                'A component that catches JavaScript errors anywhere in its child component tree',
            answer3: 'A hook that provides error handling capabilities',
        },
        {
            id: 2,
            question: 'Which lifecycle method is used to catch errors in a class component?',
            correct: 'componentDidCatch',
            answer1: 'componentWillCatch',
            answer2: 'componentDidCatch',
            answer3: 'componentDidHandle',
        },
        {
            id: 3,
            question: 'Can error boundaries catch errors in event handlers?',
            correct: 'No, error boundaries do not catch errors in event handlers',
            answer1: 'Yes, error boundaries catch all types of errors',
            answer2: 'No, error boundaries do not catch errors in event handlers',
            answer3: 'Only if the event handler is a method of the boundary component',
        },
        {
            id: 4,
            question: 'What should you render from an error boundary when an error is caught?',
            correct: 'A fallback UI',
            answer1: 'The error message',
            answer2: 'A fallback UI',
            answer3: 'Nothing, just rethrow the error',
        },
        {
            id: 5,
            question: 'Can functional components be error boundaries?',
            correct: 'No, only class components can be error boundaries',
            answer1: 'Yes, using the useErrorBoundary hook',
            answer2: 'No, only class components can be error boundaries',
            answer3: 'Yes, but it is not recommended',
        },
    ],
    [
        'Code Splitting',
        {
            id: 1,
            question: 'What is code splitting in React?',
            correct: 'The process of splitting your code into smaller bundles for lazy loading',
            answer1: 'The process of splitting components into smaller functions',
            answer2: 'The process of splitting your code into smaller bundles for lazy loading',
            answer3: 'The process of separating CSS from JavaScript',
        },
        {
            id: 2,
            question: 'Which method is commonly used for code splitting in React?',
            correct: 'React.lazy',
            answer1: 'React.split',
            answer2: 'React.defer',
            answer3: 'React.lazy',
        },
        {
            id: 3,
            question: 'What component is used to handle the loading state when code splitting?',
            correct: 'Suspense',
            answer1: 'Loader',
            answer2: 'Suspense',
            answer3: 'Lazy',
        },
        {
            id: 4,
            question: 'How do you dynamically import a module in React?',
            correct: 'Using the import() function',
            answer1: 'Using the require() function',
            answer2: 'Using the import() function',
            answer3: 'Using the fetch() function',
        },
        {
            id: 5,
            question: 'What is the benefit of code splitting?',
            correct: 'Improves load time and performance by loading code on demand',
            answer1: 'Simplifies the code structure',
            answer2: 'Improves load time and performance by loading code on demand',
            answer3: 'Enhances security by separating code into different files',
        },
    ],
    [
        'Refs and the DOM',
        {
            id: 1,
            question: 'What is a ref in React?',
            correct: 'A way to directly access a DOM element or an instance of a component',
            answer1: 'A way to create a reference to a variable',
            answer2: 'A way to pass data between components',
            answer3: 'A way to directly access a DOM element or an instance of a component',
        },
        {
            id: 2,
            question: 'How do you create a ref in a functional component?',
            correct: 'Using the useRef hook',
            answer1: 'Using the createRef method',
            answer2: 'Using the useEffect hook',
            answer3: 'Using the useRef hook',
        },
        {
            id: 3,
            question: 'How do you assign a ref to a DOM element?',
            correct: 'Using the ref attribute',
            answer1: 'Using the key attribute',
            answer2: 'Using the id attribute',
            answer3: 'Using the ref attribute',
        },
        {
            id: 4,
            question: 'Can refs be used to manage focus, text selection, or media playback?',
            correct: 'Yes, refs can be used for all these purposes',
            answer1: 'No, refs are only for reading DOM properties',
            answer2: 'Yes, refs can be used for all these purposes',
            answer3: 'No, refs are only for managing forms',
        },
        {
            id: 5,
            question: 'What should you avoid when using refs?',
            correct: 'Modifying the DOM directly',
            answer1: 'Passing refs to functional components',
            answer2: 'Using refs in event handlers',
            answer3: 'Modifying the DOM directly',
        },
    ],
    [
        'Forwarding Refs',
        {
            id: 1,
            question: 'What is ref forwarding in React?',
            correct: 'A technique for passing a ref through a component to one of its children',
            answer1: 'A method for handling multiple refs',
            answer2: 'A technique for passing a ref through a component to one of its children',
            answer3: 'A way to share refs between sibling components',
        },
        {
            id: 2,
            question: 'How do you create a component that forwards refs?',
            correct: 'Using React.forwardRef',
            answer1: 'Using the useRef hook',
            answer2: 'Using the createRef method',
            answer3: 'Using React.forwardRef',
        },
        {
            id: 3,
            question: 'Which argument is passed to the function inside React.forwardRef?',
            correct: 'props and ref',
            answer1: 'props and context',
            answer2: 'props and ref',
            answer3: 'props and state',
        },
        {
            id: 4,
            question: 'Why would you use ref forwarding?',
            correct: 'To allow parent components to access child DOM nodes or React instances',
            answer1: 'To optimize rendering performance',
            answer2: 'To allow parent components to access child DOM nodes or React instances',
            answer3: 'To pass state between components',
        },
        {
            id: 5,
            question: 'Can ref forwarding be used with functional components?',
            correct: 'Yes, it is often used with functional components',
            answer1: 'No, it only works with class components',
            answer2: 'Yes, it is often used with functional components',
            answer3: 'No, it requires a higher-order component',
        },
    ],
    [
        'Fragments',
        {
            id: 1,
            question: 'What is a Fragment in React?',
            correct: 'A way to group multiple elements without adding extra nodes to the DOM',
            answer1: 'A component for rendering text',
            answer2: 'A way to manage state',
            answer3: 'A way to group multiple elements without adding extra nodes to the DOM',
        },
        {
            id: 2,
            question: 'How do you create a Fragment in React?',
            correct: 'Using <Fragment> or <> </>',
            answer1: 'Using <Wrapper>',
            answer2: 'Using <Fragment> or <> </>',
            answer3: 'Using <Container>',
        },
        {
            id: 3,
            question: 'Do Fragments support keys?',
            correct: 'Yes, Fragments can accept key attributes',
            answer1: 'No, Fragments do not support keys',
            answer2: 'Yes, Fragments can accept key attributes',
            answer3: 'Only if they contain a single child',
        },
        {
            id: 4,
            question: 'Can you use Fragments with props?',
            correct: 'No, Fragments cannot have props',
            answer1: 'Yes, Fragments can have props',
            answer2: 'No, Fragments cannot have props',
            answer3: 'Only when using the full <Fragment> syntax',
        },
        {
            id: 5,
            question: 'What is a use case for Fragments?',
            correct: 'Grouping a list of children without adding extra DOM nodes',
            answer1: 'Managing component state',
            answer2: 'Styling multiple components',
            answer3: 'Grouping a list of children without adding extra DOM nodes',
        },
    ],
    [
        'Higher-Order Components (HOCs)',
        {
            id: 1,
            question: 'What is a Higher-Order Component (HOC) in React?',
            correct: 'A function that takes a component and returns a new component',
            answer1: 'A component that contains other components',
            answer2: 'A function that takes a component and returns a new component',
            answer3: 'A method for handling events in React',
        },
        {
            id: 2,
            question: 'What is a common use case for HOCs?',
            correct: 'Reusing component logic',
            answer1: 'Handling form inputs',
            answer2: 'Managing component state',
            answer3: 'Reusing component logic',
        },
        {
            id: 3,
            question: 'How do you create a Higher-Order Component?',
            correct: 'By writing a function that returns a new component',
            answer1: 'By using the class keyword',
            answer2: 'By writing a function that returns a new component',
            answer3: 'By using React.forwardRef',
        },
        {
            id: 4,
            question: 'What is a potential drawback of using HOCs?',
            correct: 'Increased complexity and potential for prop collisions',
            answer1: 'Decreased performance',
            answer2: 'Increased complexity and potential for prop collisions',
            answer3: 'Difficulty in debugging',
        },
        {
            id: 5,
            question: 'Can HOCs be used with functional components?',
            correct: 'Yes, HOCs can wrap both class and functional components',
            answer1: 'No, HOCs only work with class components',
            answer2: 'Yes, HOCs can wrap both class and functional components',
            answer3: 'No, HOCs only work with stateless components',
        },
    ],
    [
        'Render Props',
        {
            id: 1,
            question: 'What is a render prop in React?',
            correct:
                'A technique for sharing code between components using a prop whose value is a function',
            answer1: 'A method for rendering elements conditionally',
            answer2:
                'A technique for sharing code between components using a prop whose value is a function',
            answer3: 'A way to manage state',
        },
        {
            id: 2,
            question: 'How do you use a render prop?',
            correct:
                'By passing a function as a prop to a component and calling it to render content',
            answer1: 'By defining a method in the component class',
            answer2:
                'By passing a function as a prop to a component and calling it to render content',
            answer3: 'By using the render keyword in JSX',
        },
        {
            id: 3,
            question: 'What is a common use case for render props?',
            correct: 'Sharing logic between components',
            answer1: 'Handling user input',
            answer2: 'Styling components',
            answer3: 'Sharing logic between components',
        },
        {
            id: 4,
            question: 'Can render props be used with hooks?',
            correct: 'Yes, render props can be combined with hooks',
            answer1: 'No, render props only work with class components',
            answer2: 'Yes, render props can be combined with hooks',
            answer3: 'No, render props replace the need for hooks',
        },
        {
            id: 5,
            question: 'What is a potential drawback of using render props?',
            correct: 'It can lead to deeply nested code and affect readability',
            answer1: 'It can degrade performance',
            answer2: 'It can make state management difficult',
            answer3: 'It can lead to deeply nested code and affect readability',
        },
    ],
];
const topicsNext: Topics[] = [
    [
        'Introduction to Next.js',
        {
            id: 1,
            question: 'What is Next.js?',
            correct: 'A React framework for building server-rendered applications',
            answer1: 'A state management library',
            answer2: 'A CSS framework',
            answer3: 'A React framework for building server-rendered applications',
        },
        {
            id: 2,
            question: 'What are the main features of Next.js?',
            correct: 'Server-side rendering, automatic code splitting, and simplified routing',
            answer1: 'State management, form handling, and testing utilities',
            answer2: 'CSS-in-JS, internationalization, and API routes',
            answer3: 'Server-side rendering, automatic code splitting, and simplified routing',
        },
        {
            id: 3,
            question: 'What problem does Next.js solve?',
            correct: 'The complexity of setting up server-side rendering in React applications',
            answer1: 'Managing global state in large applications',
            answer2: 'Styling components with CSS-in-JS',
            answer3: 'The complexity of setting up server-side rendering in React applications',
        },
        {
            id: 4,
            question: 'How does Next.js handle routing?',
            correct: 'Automatically based on the file system',
            answer1: 'With a centralized routing configuration',
            answer2: 'By using a third-party routing library',
            answer3: 'Automatically based on the file system',
        },
        {
            id: 5,
            question: 'What type of applications is Next.js suitable for?',
            correct: 'Both simple static websites and complex web applications',
            answer1: 'Only simple static websites',
            answer2: 'Only complex web applications',
            answer3: 'Both simple static websites and complex web applications',
        },
    ],
    [
        'Setting up a Next.js project',
        {
            id: 1,
            question: 'How do you create a new Next.js project?',
            correct: 'Using the create-next-app CLI',
            answer1: 'Manually configuring webpack and Babel',
            answer2: 'Using the create-react-app CLI',
            answer3: 'Using the create-next-app CLI',
        },
        {
            id: 2,
            question: 'What command is used to start a Next.js development server?',
            correct: 'npm run dev',
            answer1: 'npm start',
            answer2: 'npm run serve',
            answer3: 'npm run dev',
        },
        {
            id: 3,
            question: 'Where are Next.js pages located by default?',
            correct: 'In the pages directory',
            answer1: 'In the src directory',
            answer2: 'In the components directory',
            answer3: 'In the pages directory',
        },
        {
            id: 4,
            question: 'What file is used to configure custom webpack behavior in Next.js?',
            correct: 'next.config.js',
            answer1: 'webpack.config.js',
            answer2: 'next.js',
            answer3: 'next.config.js',
        },
        {
            id: 5,
            question: 'How does Next.js handle CSS by default?',
            correct: 'It supports CSS modules out of the box',
            answer1: 'It requires a separate CSS-in-JS library',
            answer2: "It doesn't support CSS",
            answer3: 'It supports CSS modules out of the box',
        },
    ],
    [
        'Pages and Routing in Next.js',
        {
            id: 1,
            question: 'How do you create a new page in Next.js?',
            correct: 'By adding a new file to the pages directory',
            answer1: 'By defining a route in a centralized configuration file',
            answer2: 'By using a third-party routing library',
            answer3: 'By adding a new file to the pages directory',
        },
        {
            id: 2,
            question: 'What is the purpose of the index.js file in the pages directory?',
            correct: 'To define the homepage of the application',
            answer1: 'To define a 404 error page',
            answer2: 'To define a global layout for all pages',
            answer3: 'To define the homepage of the application',
        },
        {
            id: 3,
            question: 'How do you create a dynamic route in Next.js?',
            correct: 'By adding square brackets [] to the filename',
            answer1: 'By defining a route parameter in a configuration file',
            answer2: 'By using a special syntax in the URL',
            answer3: 'By adding square brackets [] to the filename',
        },
        {
            id: 4,
            question: 'How does Next.js handle client-side routing?',
            correct: 'By automatically prefetching and loading linked pages',
            answer1: 'By using a third-party routing library',
            answer2: 'By generating separate bundles for each page',
            answer3: 'By automatically prefetching and loading linked pages',
        },
        {
            id: 5,
            question: 'What is the purpose of the useRouter hook in Next.js?',
            correct: 'To access the router object and perform navigation actions',
            answer1: 'To manage component state',
            answer2: 'To fetch data from an API',
            answer3: 'To access the router object and perform navigation actions',
        },
    ],
    [
        'Dynamic Routing in Next.js',
        {
            id: 1,
            question: 'What is dynamic routing in Next.js?',
            correct:
                'The ability to create routes with parameters that change based on the requested URL',
            answer1: 'The process of generating routes dynamically at runtime',
            answer2: 'The ability to define routes using regular expressions',
            answer3: 'The process of nesting routes within other routes',
        },
        {
            id: 2,
            question: 'How do you access route parameters in a Next.js page component?',
            correct: 'By using the useRouter hook or the useRouter function',
            answer1: 'By using the useParams hook or the useParams function',
            answer2: 'By accessing the route object directly from the props',
            answer3: 'By using the getParams method from the next/router package',
        },
        {
            id: 3,
            question: 'What is the purpose of catch-all routes in Next.js?',
            correct: "To match any route that hasn't been matched by other route patterns",
            answer1: 'To redirect users to the homepage if a route is not found',
            answer2: 'To handle errors and display custom error pages',
            answer3: 'To restrict access to certain routes based on user permissions',
        },
        {
            id: 4,
            question: 'How do you define a catch-all route in Next.js?',
            correct:
                'By creating a file with square brackets followed by three dots in the pages directory (e.g., [...slug].js)',
            answer1: 'By configuring a special catchAll property in the page component',
            answer2: 'By using a custom routing API provided by Next.js',
            answer3: 'By adding a catchAllRoute attribute to the Link component',
        },
        {
            id: 5,
            question: 'What is the purpose of nested dynamic routes in Next.js?',
            correct: 'To create hierarchical URLs with multiple levels of dynamic parameters',
            answer1: 'To improve SEO by organizing content into categories and subcategories',
            answer2:
                'To simplify route handling by breaking down complex routes into smaller parts',
            answer3: 'To improve performance by pre-fetching data for nested routes',
        },
    ],
    [
        'Linking between pages in Next.js',
        {
            id: 1,
            question: 'What is the purpose of the Link component in Next.js?',
            correct: 'To enable client-side navigation between pages without full page reloads',
            answer1: 'To define static links in the HTML markup',
            answer2: 'To create anchor tags for server-side navigation',
            answer3: 'To handle form submissions and data fetching',
        },
        {
            id: 2,
            question: 'How do you use the Link component to navigate to another page?',
            correct:
                'By wrapping an anchor tag or any other clickable element with the Link component and providing the href attribute',
            answer1: 'By using the onClick event handler with a custom navigation function',
            answer2: 'By calling the navigateToPage function provided by the Link component',
            answer3: 'By directly manipulating the window.location object',
        },
        {
            id: 3,
            question:
                'What is the benefit of using the Link component over traditional anchor tags?',
            correct: 'It prevents full page reloads and provides a smoother user experience',
            answer1: 'It improves SEO by providing better link semantics',
            answer2: 'It reduces the amount of JavaScript code required for navigation',
            answer3: 'It enables server-side rendering for linked pages',
        },
        {
            id: 4,
            question: 'Can you use the Link component to navigate to external URLs?',
            correct: 'Yes, by providing the href attribute with an absolute URL',
            answer1: 'No, the Link component only supports internal navigation',
            answer2: "Yes, by using the target='_blank' attribute",
            answer3: 'No, external navigation should be handled with anchor tags',
        },
        {
            id: 5,
            question: 'How do you style active links using the Link component?',
            correct: 'By using the activeClassName or activeStyle prop',
            answer1: 'By adding a custom class to the Link component',
            answer2: 'By using the active attribute on the Link component',
            answer3: 'By applying CSS styles directly to the link element',
        },
    ],
    [
        'Layouts and Components in Next.js',
        {
            id: 1,
            question: 'What is a layout in Next.js?',
            correct:
                'A higher-order component that wraps around multiple pages to provide a consistent structure and styling',
            answer1: 'A reusable UI component for rendering content',
            answer2: 'A configuration file for defining project-wide settings',
            answer3: 'A method for handling dynamic routes',
        },
        {
            id: 2,
            question: 'How do you create a layout in Next.js?',
            correct:
                'By creating a component in the layouts directory and using it as a wrapper around page components',
            answer1: 'By configuring a special layout property in the page component',
            answer2: 'By adding a layout attribute to the Link component',
            answer3: 'By using the useRouter hook to set the layout dynamically',
        },
        {
            id: 3,
            question: 'What is the purpose of global CSS files in Next.js?',
            correct: 'To apply consistent styles across all pages of the application',
            answer1: 'To define styles for specific components or layouts',
            answer2: 'To override default styles provided by Next.js',
            answer3: 'To conditionally apply styles based on user preferences',
        },
        {
            id: 4,
            question: 'How do you import global CSS files in Next.js?',
            correct:
                'By importing them in the _app.js file or using the import statement in other components',
            answer1: 'By linking them in the HTML head section',
            answer2: 'By adding a special CSS attribute to the Link component',
            answer3: 'By including them in the public directory',
        },
        {
            id: 5,
            question: 'What is the purpose of CSS Modules in Next.js?',
            correct:
                'To scope CSS styles locally to a component, preventing style conflicts and encouraging modularity',
            answer1: 'To enable global CSS styles for all components in the application',
            answer2: 'To simplify the process of importing and managing CSS files',
            answer3: 'To provide pre-built UI components with styled variations',
        },
    ],
    [
        'API Routes in Next.js',
        {
            id: 1,
            question: 'What are API routes in Next.js?',
            correct:
                'Serverless functions that handle HTTP requests and responses directly within a Next.js application',
            answer1: 'Middleware functions for processing data before sending it to the client',
            answer2: 'Endpoints for fetching data from external APIs',
            answer3: 'Configuration files for setting up database connections',
        },
        {
            id: 2,
            question: 'Where do you define API routes in a Next.js project?',
            correct: 'In the pages/api directory',
            answer1: 'In the pages directory alongside other page components',
            answer2: 'In a separate routes directory',
            answer3: 'In the public directory',
        },
        {
            id: 3,
            question: 'What HTTP methods are supported by API routes in Next.js?',
            correct: 'GET, POST, PUT, DELETE, and more',
            answer1: 'GET and POST only',
            answer2: 'PUT and DELETE only',
            answer3: 'GET, POST, and PUT only',
        },
        {
            id: 4,
            question: 'How do you handle request parameters in API routes?',
            correct: 'By accessing them from the req object passed to the route handler function',
            answer1: 'By passing them as query parameters in the URL',
            answer2: 'By using the params object provided by the useRouter hook',
            answer3: 'By defining them in a separate configuration file',
        },
        {
            id: 5,
            question: 'What is the purpose of API routes in a Next.js application?',
            correct:
                'To interact with databases, external APIs, and perform server-side operations without exposing backend logic to the client',
            answer1: 'To serve static files and assets to the client',
            answer2: 'To handle client-side navigation and routing',
            answer3: "To define the structure and layout of the application's user interface",
        },
    ],
    [
        'Static File Serving in Next.js',
        {
            id: 1,
            question: 'What types of static files can be served by Next.js?',
            correct: 'Images, fonts, CSS, JavaScript, and other assets',
            answer1: 'Only HTML files',
            answer2: 'Only JavaScript files',
            answer3: 'Only JSON files',
        },
        {
            id: 2,
            question: 'Where do you place static files in a Next.js project?',
            correct: 'In the public directory',
            answer1: 'In the pages directory',
            answer2: 'In the components directory',
            answer3: 'In the styles directory',
        },
        {
            id: 3,
            question: 'How do you reference static files in a Next.js application?',
            correct: 'By using the /public directory path as the root',
            answer1: 'By using the /static directory path as the root',
            answer2: 'By using absolute URLs',
            answer3: 'By importing them directly into JavaScript files',
        },
        {
            id: 4,
            question: 'Can you serve files from a CDN or external server in Next.js?',
            correct: 'Yes, by using absolute URLs or proxying requests through the Next.js server',
            answer1: 'No, all files must be hosted locally',
            answer2: 'Yes, but only if they are first copied into the public directory',
            answer3: 'No, Next.js only supports local file serving',
        },
        {
            id: 5,
            question: 'What is the benefit of serving static files through Next.js?',
            correct:
                'Better performance and caching strategies, simplified deployment, and improved security',
            answer1: 'Reduced server load and improved scalability',
            answer2: 'Easier debugging and troubleshooting',
            answer3: 'Greater flexibility and customization options',
        },
    ],
    [
        'CSS Modules in Next.js',
        {
            id: 1,
            question: 'What are CSS Modules?',
            correct:
                'A way to locally scope CSS by automatically generating unique class names for each CSS module',
            answer1: 'Global CSS files',
            answer2: 'Inline styles',
            answer3: 'Third-party CSS frameworks',
        },
        {
            id: 2,
            question: 'How do you create a CSS Module in Next.js?',
            correct:
                'By naming the CSS file with the .module.css extension and importing it into a component',
            answer1: 'By defining a special <style> tag in the component file',
            answer2: 'By using the @module directive in the CSS file',
            answer3: 'By adding a module attribute to the <link> tag in the HTML file',
        },
        {
            id: 3,
            question: 'How do you use CSS Modules in a component?',
            correct: 'By importing the CSS module and referencing its class names as properties',
            answer1: 'By linking the CSS module in the HTML head section',
            answer2: 'By defining the styles directly in the component file',
            answer3: "By adding a class attribute with the module name to the component's JSX",
        },
        {
            id: 4,
            question: 'What is the benefit of using CSS Modules in Next.js?',
            correct:
                'It prevents class name conflicts, improves maintainability, and encourages component-based styling',
            answer1: 'It provides access to global stylesheets',
            answer2: 'It simplifies the process of adding animations and transitions',
            answer3: 'It allows for faster rendering of styles on the client side',
        },
        {
            id: 5,
            question: 'Can you use CSS Modules alongside other styling methods in Next.js?',
            correct:
                'Yes, CSS Modules can be used in combination with global CSS files, styled-jsx, or third-party libraries',
            answer1: 'No, CSS Modules must be used exclusively for styling',
            answer2: 'Yes, but only if they are first compiled into a single stylesheet',
            answer3: 'No, CSS Modules are not compatible with other styling methods',
        },
    ],
    [
        'Server-side Rendering (SSR) in Next.js',
        {
            id: 1,
            question: 'What is Server-side Rendering (SSR) in Next.js?',
            correct:
                'The process of rendering React components on the server and sending the fully rendered HTML to the client',
            answer1:
                'The process of rendering React components in the browser using client-side JavaScript',
            answer2: 'The process of pre-rendering static HTML pages at build time',
            answer3:
                'The process of rendering components on the server and sending only the data to the client',
        },
        {
            id: 2,
            question: 'What are the benefits of Server-side Rendering (SSR)?',
            correct:
                'Improved SEO, faster initial page load times, and better performance on low-powered devices',
            answer1: 'Simplified deployment and reduced server load',
            answer2: 'Enhanced security and reduced client-side dependencies',
            answer3: 'Easier debugging and troubleshooting',
        },
        {
            id: 3,
            question: 'How do you enable Server-side Rendering (SSR) in Next.js?',
            correct: 'By exporting a getServerSideProps function from a page component',
            answer1: 'By setting a special flag in the next.config.js file',
            answer2: 'By adding a serverSideRendering attribute to the Link component',
            answer3: 'By including a server-rendering directive in the HTML head section',
        },
        {
            id: 4,
            question: 'What is the purpose of the getServerSideProps function in Next.js?',
            correct:
                'To fetch data from an external API or database and pass it as props to the page component during server-side rendering',
            answer1: 'To define server-side routing rules for dynamic routes',
            answer2: 'To handle form submissions and data validation',
            answer3: 'To generate static HTML pages at build time',
        },
        {
            id: 5,
            question:
                'Can you combine Server-side Rendering (SSR) with client-side rendering in Next.js?',
            correct:
                'Yes, Next.js allows for hybrid rendering where certain pages are rendered server-side while others are rendered client-side',
            answer1: 'No, Next.js only supports either server-side or client-side rendering',
            answer2: 'Yes, but it requires additional configuration and is not recommended',
            answer3: 'No, hybrid rendering is not supported in Next.js',
        },
    ],
    [
        'Data Fetching in Next.js',
        {
            id: 1,
            question: 'What is data fetching in Next.js?',
            correct:
                'The process of retrieving data from external sources like APIs or databases to populate a page with dynamic content',
            answer1: 'The process of generating static HTML pages at build time',
            answer2:
                'The process of rendering components on the server and sending the fully rendered HTML to the client',
            answer3: 'The process of defining routes and handling client-side navigation',
        },
        {
            id: 2,
            question: 'How do you fetch data in Next.js?',
            correct:
                'By using the getStaticProps or getServerSideProps functions within a page component',
            answer1: 'By making asynchronous requests with the fetch API in useEffect hook',
            answer2: 'By importing data directly into the component file',
            answer3: 'By defining routes in the API directory and accessing them via HTTP requests',
        },
        {
            id: 3,
            question: 'What is the difference between getStaticProps and getServerSideProps?',
            correct:
                'getStaticProps fetches data at build time and generates static HTML pages, while getServerSideProps fetches data on each request and generates server-side rendered pages',
            answer1:
                'getStaticProps fetches data at runtime and generates static HTML pages, while getServerSideProps fetches data at build time',
            answer2:
                'getStaticProps fetches data on each request and generates server-side rendered pages, while getServerSideProps fetches data at runtime',
            answer3:
                'getStaticProps and getServerSideProps are interchangeable and can be used interchangeably',
        },
        {
            id: 4,
            question: 'What is incremental static regeneration (ISR) in Next.js?',
            correct:
                'A feature that allows Next.js to re-generate static pages in the background when they are requested, ensuring that stale data is not served to users',
            answer1: 'A technique for optimizing database queries in server-side rendering',
            answer2: 'A method for improving client-side rendering performance',
            answer3: 'A strategy for caching static assets in the browser',
        },
        {
            id: 5,
            question: 'How do you handle data fetching errors in Next.js?',
            correct:
                'By using try-catch blocks or conditional rendering to display error messages or fallback UI',
            answer1: 'By redirecting to a custom error page using the useRouter hook',
            answer2: 'By logging errors to the console and ignoring them',
            answer3: 'By reloading the page and retrying the data fetch operation',
        },
    ],
    [
        'Error Handling in Next.js',
        {
            id: 1,
            question: 'What types of errors can occur in a Next.js application?',
            correct:
                'Client-side errors (e.g., network failures, invalid user input) and server-side errors (e.g., database failures, API errors)',
            answer1: 'Only client-side errors',
            answer2: 'Only server-side errors',
            answer3: 'Syntax errors in the code',
        },
        {
            id: 2,
            question: 'How do you handle client-side errors in Next.js?',
            correct:
                'By using client-side error handling techniques like try-catch blocks or error boundaries',
            answer1: 'By redirecting to a custom error page using the useRouter hook',
            answer2: 'By logging errors to the server and letting it handle the response',
            answer3: 'By reloading the page and retrying the operation',
        },
        {
            id: 3,
            question: 'How do you handle server-side errors in Next.js?',
            correct:
                'By using try-catch blocks or error middleware to catch errors and return appropriate error responses',
            answer1:
                'By rendering a custom error page with the getStaticProps or getServerSideProps functions',
            answer2: 'By logging errors to the console and ignoring them',
            answer3: 'By redirecting to a generic error page',
        },
        {
            id: 4,
            question: 'What is the purpose of custom error pages in Next.js?',
            correct:
                'To provide users with a more informative and user-friendly error message when something goes wrong in the application',
            answer1:
                'To hide implementation details and prevent attackers from exploiting vulnerabilities',
            answer2: 'To improve SEO by serving custom error pages with relevant content',
            answer3: 'To reduce server load and improve performance by caching error responses',
        },
        {
            id: 5,
            question: 'How do you define custom error pages in Next.js?',
            correct:
                'By creating files named 404.js, 500.js, etc., in the pages directory and exporting a React component as the page content',
            answer1: 'By configuring a special errorPages property in the next.config.js file',
            answer2: 'By adding custom error handlers to the API routes',
            answer3: 'By including error page templates in the public directory',
        },
    ],
    [
        'Authentication and Authorization in Next.js',
        {
            id: 1,
            question: 'What is authentication in web development?',
            correct:
                'The process of verifying the identity of a user, typically through credentials like username and password',
            answer1: 'The process of securing communication between a client and a server',
            answer2: 'The process of encrypting sensitive data stored in a database',
            answer3: 'The process of optimizing web applications for mobile devices',
        },
        {
            id: 2,
            question: 'How do you implement authentication in a Next.js application?',
            correct:
                'By using authentication libraries like NextAuth.js or implementing custom authentication logic with session management and token-based authentication',
            answer1: 'By manually validating user credentials in the database',
            answer2: 'By storing passwords in plain text format for easy retrieval',
            answer3:
                'By exposing authentication endpoints in API routes for client-server communication',
        },
        {
            id: 3,
            question: 'What is authorization in web development?',
            correct:
                'The process of determining whether a user has permission to access certain resources or perform specific actions within an application',
            answer1: 'The process of securing network connections using encryption',
            answer2: 'The process of optimizing web applications for search engines',
            answer3: 'The process of compressing files to reduce load times',
        },
        {
            id: 4,
            question: 'How do you implement authorization in a Next.js application?',
            correct:
                'By using role-based access control (RBAC), permission middleware, or custom authorization logic to restrict access to protected routes and resources',
            answer1: 'By relying solely on client-side checks for authorization',
            answer2: 'By hardcoding access rules directly into the component files',
            answer3: 'By granting full access to all users by default',
        },
        {
            id: 5,
            question:
                'What are the common security risks associated with authentication and authorization?',
            correct:
                'Common security risks include brute force attacks, session hijacking, cross-site scripting (XSS), and cross-site request forgery (CSRF)',
            answer1: 'Poor performance and scalability',
            answer2: 'Data breaches and privacy violations',
            answer3: 'Server downtime and service interruptions',
        },
    ],
    [
        'Deployment and Hosting in Next.js',
        {
            id: 1,
            question: 'What is deployment in web development?',
            correct:
                'The process of making a web application available to users by publishing it to a server or hosting platform',
            answer1: 'The process of optimizing code and assets for better performance',
            answer2: 'The process of securing network connections using encryption',
            answer3: 'The process of developing and testing new features locally',
        },
        {
            id: 2,
            question: 'How do you deploy a Next.js application?',
            correct:
                'By using hosting platforms like Vercel, Netlify, AWS Amplify, or deploying to a cloud server using services like AWS, Google Cloud, or DigitalOcean',
            answer1: 'By manually copying files to a web server using FTP',
            answer2: 'By embedding the application into an iframe on a web page',
            answer3:
                'By exporting the application as a static site and hosting it on a shared server',
        },
        {
            id: 3,
            question: 'What is hosting in web development?',
            correct:
                'The service of providing storage space and server resources to make a website or web application accessible over the internet',
            answer1: 'The process of optimizing code and assets for better performance',
            answer2: 'The process of securing network connections using encryption',
            answer3: 'The process of developing and testing new features locally',
        },
        {
            id: 4,
            question:
                'What are the advantages of using hosting platforms like Vercel or Netlify for Next.js applications?',
            correct:
                'Advantages include easy deployment workflows, built-in CI/CD pipelines, automatic scaling, serverless architecture, and global CDN distribution',
            answer1: 'Advantages include low cost and unlimited storage',
            answer2: 'Advantages include access to advanced analytics and monitoring tools',
            answer3: 'Advantages include built-in security features and DDoS protection',
        },
        {
            id: 5,
            question:
                'How do you handle environment-specific configurations in a Next.js application?',
            correct:
                'By using environment variables or configuration files to store sensitive information like API keys, database credentials, and feature flags',
            answer1: 'By hardcoding configuration values directly into the component files',
            answer2: "By storing configuration data in the local storage of the user's browser",
            answer3: 'By encrypting configuration files and storing them in a public repository',
        },
    ],
    [
        'Testing in Next.js',
        {
            id: 1,
            question: 'What is testing in web development?',
            correct:
                'The process of verifying that a web application behaves as expected under different conditions and scenarios',
            answer1: 'The process of optimizing code and assets for better performance',
            answer2: 'The process of securing network connections using encryption',
            answer3: 'The process of developing and testing new features locally',
        },
        {
            id: 2,
            question: 'How do you test a Next.js application?',
            correct:
                'By using testing frameworks like Jest, React Testing Library, or Cypress to write unit tests, integration tests, and end-to-end tests for components, pages, and API routes',
            answer1: 'By manually clicking through the application and checking for errors',
            answer2: 'By asking users to report bugs and issues',
            answer3: 'By monitoring server logs for errors and exceptions',
        },
        {
            id: 3,
            question: 'What is unit testing?',
            correct:
                'The process of testing individual units or components of a software application in isolation to ensure they function correctly',
            answer1:
                'The process of testing the entire application as a whole to verify its overall behavior',
            answer2:
                'The process of testing how different units or components interact with each other',
            answer3:
                'The process of manually verifying that a software application meets its requirements',
        },
        {
            id: 4,
            question: 'What is integration testing?',
            correct:
                'The process of testing how different units or components of a software application interact with each other to ensure they work together as expected',
            answer1:
                'The process of testing individual units or components of a software application in isolation',
            answer2:
                'The process of testing the entire application as a whole to verify its overall behavior',
            answer3:
                'The process of manually verifying that a software application meets its requirements',
        },
        {
            id: 5,
            question: 'What is end-to-end testing?',
            correct:
                "The process of testing a complete workflow or user scenario from start to finish to ensure the application behaves as expected from the user's perspective",
            answer1:
                'The process of testing individual units or components of a software application in isolation',
            answer2:
                'The process of testing how different units or components interact with each other',
            answer3:
                'The process of manually clicking through the application and checking for errors',
        },
    ],
    [
        'Error Reporting and Monitoring in Next.js',
        {
            id: 1,
            question: 'What is error reporting and monitoring in web development?',
            correct:
                'The process of identifying, tracking, and analyzing errors and exceptions that occur in a web application to diagnose and fix issues',
            answer1: 'The process of optimizing code and assets for better performance',
            answer2: 'The process of securing network connections using encryption',
            answer3: 'The process of developing and testing new features locally',
        },
        {
            id: 2,
            question: 'Why is error reporting and monitoring important in Next.js applications?',
            correct:
                'To ensure the stability, reliability, and performance of the application by quickly identifying and resolving issues that impact user experience',
            answer1: 'To improve SEO and search engine rankings',
            answer2: 'To prevent unauthorized access and protect sensitive data',
            answer3: 'To reduce development time and lower maintenance costs',
        },
        {
            id: 3,
            question:
                'What tools or services can you use for error reporting and monitoring in Next.js?',
            correct:
                'Tools like Sentry, LogRocket, New Relic, or custom error logging solutions using services like AWS CloudWatch or Google Cloud Logging',
            answer1: 'Built-in logging features provided by Next.js',
            answer2: 'Manual error tracking using console.log statements',
            answer3: 'Third-party performance monitoring tools like Lighthouse',
        },
        {
            id: 4,
            question:
                'What types of errors can be reported and monitored in a Next.js application?',
            correct:
                'Common types of errors include JavaScript runtime errors, server-side errors, network failures, and performance issues like slow rendering or high CPU usage',
            answer1: 'Only client-side errors',
            answer2: 'Only server-side errors',
            answer3: 'Syntax errors in the code',
        },
        {
            id: 5,
            question:
                'How do you configure error reporting and monitoring in a Next.js application?',
            correct:
                'By integrating error reporting SDKs or libraries into the application code, configuring error handlers and loggers, and setting up alerts and notifications for critical issues',
            answer1: 'By manually inspecting server logs and analyzing stack traces',
            answer2: 'By ignoring errors and letting users report issues through a feedback form',
            answer3: 'By disabling error reporting to reduce overhead and improve performance',
        },
    ],
    [
        'Performance Optimization in Next.js',
        {
            id: 1,
            question: 'What is performance optimization in web development?',
            correct:
                'The process of improving the speed, responsiveness, and efficiency of a web application to enhance user experience and achieve better performance metrics',
            answer1: 'The process of securing network connections using encryption',
            answer2: 'The process of developing and testing new features locally',
            answer3: 'The process of identifying and fixing errors and exceptions',
        },
        {
            id: 2,
            question: 'Why is performance optimization important in Next.js applications?',
            correct:
                'To ensure fast initial page loads, smooth navigation, and efficient resource utilization, leading to higher user satisfaction, better SEO rankings, and increased conversion rates',
            answer1: 'To prevent unauthorized access and protect sensitive data',
            answer2: 'To reduce development time and lower maintenance costs',
            answer3: 'To improve error reporting and monitoring',
        },
        {
            id: 3,
            question: 'What are some common performance bottlenecks in Next.js applications?',
            correct:
                'Common bottlenecks include large bundle sizes, slow server-side rendering, excessive client-side JavaScript execution, inefficient data fetching, and lack of caching strategies',
            answer1: 'Only client-side errors',
            answer2: 'Only server-side errors',
            answer3: 'Syntax errors in the code',
        },
        {
            id: 4,
            question: 'How do you optimize server-side rendering performance in Next.js?',
            correct:
                'By reducing server-side processing time, minimizing database queries, optimizing data fetching strategies, and implementing caching mechanisms to serve pre-rendered content and static assets',
            answer1: 'By ignoring server-side rendering and relying on client-side rendering',
            answer2: 'By increasing server hardware resources like CPU and RAM',
            answer3: 'By disabling server-side rendering to improve performance',
        },
        {
            id: 5,
            question:
                'What tools or techniques can you use for performance monitoring and profiling in Next.js?',
            correct:
                'Tools like Lighthouse, Web Vitals, Chrome DevTools, or custom performance monitoring libraries to measure and analyze key performance metrics like page load times, rendering speed, and resource utilization',
            answer1: 'Built-in logging features provided by Next.js',
            answer2: 'Manual performance testing using real users and devices',
            answer3: 'Third-party analytics tools like Google Analytics',
        },
    ],
    [
        'Real-time Communication in Next.js',
        {
            id: 1,
            question: 'What is real-time communication in web development?',
            correct:
                'The process of transmitting and receiving data instantly or with minimal delay between clients and servers, enabling interactive and collaborative experiences like chat applications, multiplayer games, and live updates',
            answer1: 'The process of optimizing server hardware resources like CPU and RAM',
            answer2: 'The process of securing network connections using encryption',
            answer3: 'The process of developing and testing new features locally',
        },
        {
            id: 2,
            question: 'Why is real-time communication important in Next.js applications?',
            correct:
                'To enable real-time collaboration, interactive features, and live updates that enhance user engagement, improve usability, and provide a competitive advantage in dynamic and interactive web applications',
            answer1: 'To prevent unauthorized access and protect sensitive data',
            answer2: 'To reduce development time and lower maintenance costs',
            answer3: 'To improve error reporting and monitoring',
        },
        {
            id: 3,
            question:
                'What are some common use cases for real-time communication in Next.js applications?',
            correct:
                'Common use cases include chat applications, collaborative document editing, real-time notifications, live commenting, multiplayer gaming, and financial trading platforms',
            answer1: 'Only client-side errors',
            answer2: 'Only server-side errors',
            answer3: 'Syntax errors in the code',
        },
        {
            id: 4,
            question: 'How do you implement real-time communication in Next.js applications?',
            correct:
                'By using WebSocket protocols, server-sent events (SSE), or third-party APIs and services like Socket.IO, Pusher, or Firebase Realtime Database to establish bidirectional communication channels between clients and servers',
            answer1: 'By relying solely on HTTP requests and responses',
            answer2:
                'By embedding real-time communication features directly into the HTML using JavaScript',
            answer3: 'By manually updating the DOM with server-side rendered content',
        },
        {
            id: 5,
            question:
                'What are some challenges associated with real-time communication in Next.js applications?',
            correct:
                'Challenges include scalability issues, maintaining data consistency across clients, handling network latency and reliability, optimizing performance, and ensuring security and privacy of transmitted data',
            answer1: 'Challenges include browser compatibility issues',
            answer2: 'Challenges include server-side rendering limitations',
            answer3: 'Challenges include user interface design constraints',
        },
    ],
    [
        'Security Best Practices in Next.js',
        {
            id: 1,
            question: 'Why is security important in web development?',
            correct:
                'To protect against various security threats and vulnerabilities, safeguard sensitive data, ensure user privacy, and maintain the trust and integrity of the application and its users',
            answer1: 'To optimize performance and scalability',
            answer2: 'To improve user experience and accessibility',
            answer3: 'To comply with legal and regulatory requirements',
        },
        {
            id: 2,
            question: 'What are some common security threats in web applications?',
            correct:
                'Common threats include cross-site scripting (XSS), SQL injection, cross-site request forgery (CSRF), insecure deserialization, authentication and session management vulnerabilities, and sensitive data exposure',
            answer1: 'Only client-side errors',
            answer2: 'Only server-side errors',
            answer3: 'Syntax errors in the code',
        },
        {
            id: 3,
            question:
                'How do you secure Next.js applications against common security vulnerabilities?',
            correct:
                'By implementing security best practices like input validation, output encoding, parameterized queries, proper authentication and authorization mechanisms, HTTPS encryption, content security policy (CSP), and regular security audits and testing',
            answer1: 'By ignoring security concerns and focusing on functionality',
            answer2: 'By relying on client-side security measures only',
            answer3: 'By storing sensitive data in plain text format',
        },
        {
            id: 4,
            question:
                'What is cross-site scripting (XSS) and how do you prevent it in Next.js applications?',
            correct:
                'XSS is a vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. You can prevent XSS by properly sanitizing user input, using framework-specific XSS protection libraries, and implementing content security policies (CSP) to restrict the sources of executable scripts',
            answer1: 'XSS is a feature that enhances user experience',
            answer2: 'XSS is a server-side vulnerability only',
            answer3: 'XSS cannot occur in modern web browsers',
        },
        {
            id: 5,
            question:
                'What is cross-site request forgery (CSRF) and how do you mitigate it in Next.js applications?',
            correct:
                'CSRF is an attack that tricks users into performing unintended actions on a web application while they are authenticated. You can mitigate CSRF by using anti-CSRF tokens, validating request origins, and implementing same-site cookie attributes to prevent unauthorized cross-origin requests',
            answer1: 'CSRF is a client-side scripting vulnerability',
            answer2: 'CSRF is only a concern for public APIs',
            answer3: 'CSRF can be prevented by disabling JavaScript',
        },
    ],
    [
        'State Management in Next.js',
        {
            id: 1,
            question: 'What is state management in web development?',
            correct:
                'The process of managing and synchronizing application state data (e.g., user preferences, session data, UI state) across different components or modules of a web application',
            answer1: 'The process of optimizing server hardware resources like CPU and RAM',
            answer2: 'The process of securing network connections using encryption',
            answer3: 'The process of developing and testing new features locally',
        },
        {
            id: 2,
            question: 'Why is state management important in Next.js applications?',
            correct:
                'To maintain a consistent and predictable user interface, manage complex application data and interactions, share state between components, and facilitate efficient rendering and reactivity',
            answer1: 'To prevent unauthorized access and protect sensitive data',
            answer2: 'To reduce development time and lower maintenance costs',
            answer3: 'To improve error reporting and monitoring',
        },
        {
            id: 3,
            question: 'What are the common approaches for state management in Next.js?',
            correct:
                'Common approaches include local component state (useState), global state management libraries (e.g., Redux, Zustand), context API, server-side state management (e.g., database, session storage), and external APIs (e.g., REST, GraphQL)',
            answer1: 'Using only local component state',
            answer2: 'Using only global state management libraries',
            answer3: 'Not managing state at all',
        },
        {
            id: 4,
            question:
                'What are the benefits of using global state management libraries like Redux or Zustand in Next.js?',
            correct:
                'Benefits include centralized state management, predictable state changes, improved scalability and maintainability, easier debugging and testing, and better support for complex data flows and interactions',
            answer1: 'Reduced bundle size and faster page loads',
            answer2: 'Enhanced security and encryption',
            answer3: 'Simplified deployment process',
        },
        {
            id: 5,
            question:
                'How do you choose the right state management approach for a Next.js application?',
            correct:
                'By considering factors such as the size and complexity of the application, the frequency and granularity of state updates, the need for server-side rendering or static generation, developer familiarity and preferences, performance requirements, and scalability considerations',
            answer1: 'By using the same approach for all applications regardless of requirements',
            answer2: 'By randomly selecting an approach without considering specific needs',
            answer3: 'By outsourcing state management to third-party services',
        },
    ],
];

const mainTopics:AllTopics={
    js:topicsJS,
    react:topicsReact,
    next:topicsNext
}
export default mainTopics