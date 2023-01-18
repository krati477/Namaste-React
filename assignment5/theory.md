**What is the difference between Named Export, Default Export and * as export?**

Ans. Every module can have  different types of export, ex. named export and default export. 
You can have multiple named exports per module but only one default export.

Named Export - export { myFunction2, myVariable2 };
Default Export - export default MyFunction;
* as export - all exports are named exports of the current module.



**Que. What is the importance of config.js file?**

Ans. The config.js file conatins all the constants and and strings at one place, which can be further used in many components. when ever we need any of the constant in any of the components, we can directly access the config.js file.   


**Que. What are React Hooks?**

Ans. React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. React provides a bunch of standard in-built hooks.
 Hooks can be stateful and can manage side-effects.
 Hooks don't work inside classes .



**Que. Why do you need a useState Hook?**

Ans. useState() hook, which allows functional components to have a dedicated state of their own.
useState() hook allows one to declare a state variable inside a function. It should be noted that one use of useState() can only be used to declare one state variable.
 The value returned by useState() consists of an array with two values. The first value is the initial (or starting) value of the state variable, while the second value is a reference to the function that can be used to update the variable.