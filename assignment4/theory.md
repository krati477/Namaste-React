**Is `JSX` mandatory for React?**

Ans. JSX is not a requirement for using React. Using React without JSX is especially convenient when you don’t want to set up compilation in your build environment.



**Que. Is ES6 mandatory for React?**

Ans. ES6 is not mandatory for React, Normally we define a React component as a plain JavaScript class.
for an example, If you don’t use ES6 yet, you may use the `create-react-class` module instead.

The API of ES6 classes is similar to createReactClass().
 


**Que. {TitleComponent} vs <TitleComponent/> vs <TitleComponent> <TitleComponent/> in JSX ?**

Ans.

1.){TitleComponent} - It is a regular javascript expression in JSX. when we have to run some javascript code inside jsx we use `{}` curly brackets. inside {we write js expression} here.

const TitleComponent = (
    <h1 id="title" key="h1">
        Hello EveryOne!
    </h1>
);

const Header = () =>{
    return(
        <div id="container">
            { TitleComponent }
            <h2>Namaste React Functional Component</h2>
            <h3>It is coposition component [ Nested Component ]</h3>
        </div>
    );
};

2.)<TitleComponent/> -> when we create a component and want to call that component into another component we use </> self closing tag of that component.

const TitleComponent = () => (
    <h1 id="title" key="h1">
        Hello EveryOne!
    </h1>
);

const Header = () =>{
    return(
        <div id="container">
            <TitleComponent/>
            <h2>Namaste React Functional Component</h2>
            <h3>It is coposition component [ Nested Component ]</h3>
        </div>
    );
};


3.)<TitleComponent> <TitleComponent/> => You can pass any JavaScript expression as children, by enclosing it within {}. 

<TitleComponent>{'foo'}</TitleComponent>

OR

<TitleComponent>Hello World</TitleComponent>





**Que. How can I write comments in JSX?**

Ans. Comments can be written as -

single line comments - //Comments goes here..
Multi line comments - 
/**
 * Comments goes here..
 * Comments goes here..
 *  Comments goes here..
 */



**Que. what is <React.Fragment></React.Fragment> and <></>?**

Ans. React Fragments is a feature in React that allows you to wrap or group multiple elements without adding an extra node to the DOM. This can be useful when rendering multiple child elements/components in a single parent component.

function Parent () {
  return (
    <React.Fragment>
      <Child1 />
      <Child2 />
    </React.Fragment>
  );
}

You can also use the short syntax for React Fragments, which are simply empty tags.

function Parent () {
  return (
    <>
      <Child1 />
      <Child2 />
    </>
  );
}


**Que. What is virtual DOM?**

Ans. The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.

    virtual DOM is a “virtual” representation of the actual DOM. By virtual, we mean a much lighter replica of the actual DOM — in the form of objects — that can be saved in the browser memory.

        A common misconception is that the virtual DOM is faster than or rivals the actual DOM. That is not correct! In fact, the virtual DOM’s operations support or add to those of the actual DOM. It provides a mechanism that lets the actual DOM computes minimal DOM operation when re-rendering the UI.

        React deploys the concept of virtual DOM in the rendering process because it conforms with its declarative approach


**Que. What is Reconciliation in React?**

Ans. Reconciliation is a mechanism that react uses a diff algorithm, to differentiate between one tree from another tree and determines which parts need to be changed in the UI and then update only small part of the original DOM.

1.)First, ReactJS creates a copy of the original DOM, calling it the Virtual DOM. Each of the nodes of the Virtual DOM represents an element.

2.)Next, if there is a state update of an element, a new Virtual DOM is created.

3.)The diffing algorithm identifies the difference of the change.

4.)Last, the ReactJS runs a batch update to update the Original DOM with these changes to keep it in sync.



**Que. What is `React-Fiber`?**

Ans. React Fiber is an ongoing reimplementation of React's core algorithm. The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.


**Que. Why we need keys in React? When do we need keys in React?**
Ans. Keys are used to give an identity to the elements in the lists. A “key” is a special string attribute you need to include when creating lists of elements in React. Keys help React identify which items have changed, are added, or are removed. 
    Keys help React identify which items have changed (added/removed/re-ordered). To give a unique identity to every element inside the array, a key is required. 

When there are sibling elements like lists, array or similar elements like h1 or any element repeatedly. we must use keys in React.


**Que. Can we use index as keys in React`?**

Ans. It is not recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state. But No key is better than using index as keys.


**Que. What is props in react ? Ways to**

Ans. The word “props” implies “properties”.
    Props are used to store data that can be accessed by the children of a React component.
 
They are what make components reusable. Because they perform an essential function – they pass data from one component to another.  

Props act as a channel for component communication. Props are passed from parent to child and help your child access properties that made it into the parent's tree.


**Que. What is  `Config-Driven-UI`?**

Ans. A config driven UI is a user interface that is designed to be easily configurable through a configuration file or other external source, rather than hard-coded into the application's code. this allows developers to make changes to the application's code, making it easier to update and maintain.
    Additionally, it can also allows for dynamic UI based on the configuration.

