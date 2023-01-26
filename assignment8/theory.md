**How do you create Nested Routes react-router-dom configuration ?**

Ans. By declaring children we can use nested routes.
    An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.


**CreateHashRouter and createMemoryRouter?**

Ans. 

createHashRouter - This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".


createMemoryRouter - Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.


**Que. What is the order of life cycle method calls in class based components?**

Ans. There are three categories of lifecycle methods: mounting, updating, and unmounting.

1. Mounting Lifecycle Methods
React supports three mounting lifecycle methods for component classes: 
componentWillMount(), render(), and componentDidMount(). componentWillMount() will be called first followed by the render() method and finally the componentDidMount() method.

2. Updating Lifecycle Method
When a component updates, shouldComponentUpdate() gets called after componentWillReceiveProps(), but still before the rendering begins. It automatically receives two arguments: nextProps and nextState.

shouldComponentUpdate() should return either true or false. The best way to use this method is to have it return false only under certain conditions. If those conditions are met, then your component will not update.

3. Unmounting Lifecycle Method
componentWillUnmount(), A component’s unmounting period occurs when the component is removed from the DOM. This could happen if the DOM is rerendered without the component, or if the user navigates to a different website or closes their web browser or move to another component.



**Que. Why do we use componentDidMount?**

Ans. The componentDidMount() method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.



**Que. Why do we use componentWillUnmount? show with example .**
Ans.  The componentWillUnmount() method allows us to execute the React code when the component gets destroyed or unmounted from the DOM (Document Object Model). This method is called during the Unmounting phase of the React Life-cycle i.e before the component gets unmounted.

    async componentDidMount() {    
        this.timer = setInterval(() => {
            console.log("Timer Running");
        }, 1000);      
    }


    componentWillUnmount() {
        console.log("COmponentWillUnmount");
        clearInterval(this.timer);
    }


**Que. Why do we use super(props) in constructor?**

Ans.  In React, the constructor is called during component creation and before mounting. If you want to implement the constructor for a React component, call the super(props) method before any other statement. Otherwise, this. props will be undefined in the constructor and create bugs.
     In fact, what the super() function does is, calls the constructor of the parent class. 


**Que. Why can't we have the callback function of useEffect async?**

Ans. 
    useEffect(async() =>{        
          const data = await fetch("https://api.github.com/users/krati474");
          const json = await data.json();
          console.log(json);

        return () =>{            
            console.log("unmounted")
        }
    },[]);

The issue here is that the first argument of useEffect is supposed to be a function that returns either nothing (undefined) or a function (to clean up side effects). But an async function returns a Promise, which can't be called as a function! It's simply not what the useEffect hook expects for its first argument.