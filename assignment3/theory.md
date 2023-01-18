**Que. What is `JSX`?**

Ans. JSX is a JavaScript Extension Syntax used in React. It is similar in appearance to HTML, but it is not an HTML. JSX produces React “elements”. React elements are plain objects, after compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.These objects in end are converted into HTML (DOM).

Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children).



**Que. SuperPowers of JSX?**

Ans. Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single file.

`function greeting(user) {
    //warning: JSX in next line...
  return <h1>{user}, How are you!!!</h1>;
}`

While making an API call, JSX takes care of XSS (cross site scripting) attacks and make your app safer.

 

**Que. Role of `type` attribute in script tag? What options can i use there?**

Ans. This attribute indicates the type of script represented. The value (Options) of this attribute will be one of the following:

If Attribute is not set means default.

Module - This value causes the code to be treated as a JavaScript module.

Importmap - This value indicates that the body of the element contains an import map. The import map is a JSON object.

Blocking - This attribute explicitly indicates that certain operations should be blocked on the fetching of the script.

_`Scripts without async, defer or type="module" attributes, as well as inline scripts without the type="module" attribute, are fetched and executed immediately, before the browser continues to parse the page.`_



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

