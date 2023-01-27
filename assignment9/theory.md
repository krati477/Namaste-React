**When and why do we need lazy()?**
Ans. lazy() is a function that enables you to render a dynamic import as a regular component.  Dynamic imports are a way of code-splitting.
Lazy loading is a design pattern for optimizing applications.

    you should only use React. lazy when you need to load a component asynchronously. The component is not readily needed in the initial render of the app, and it is not needed in the render of a specific page

**What is Suspense?**
Ans. Suspense lets your components “wait” for something before they can render.
 React Suspense is a React component that suspends a component(‘s) being render until a certain condition has been met (Or can say On Demand Loading), and will display a fallback option.This fallback option is required, and it may be a string or another React component such as a spinner or Shimmer.

 <Suspense> is a first-party React component used to wrap other components that might make asynchronous requests.



**Que. Why we got this error: A component suspended while responding to synchronus input. this will cause UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?**

Ans. The above mentioned Error occurs when we lazy load a component but do not use Suspense component to render it.
 ```when you lazy load a component, Upon rendering, React tries to Suspend it and it throws above error. to handle this React provide Suspense component.```


 while Routing we write this code
    <Suspense fallback={<Shimmer/>}><Market/><Suspense>

    From the piece of code above, we’re setting our suspense fallback option to the Shimmer component, the Shimmer component will be rendered until the App component is fully ready to be rendered.

    The suspense component handles the loading state of the App or any component and will render the fallback UI while loading is true.

  



**Que. Advantages and Disadvantages of using this code splitting pattern?**

Ans. Bundling is a process performed in React app using tools like Webpack or Browserify, in order to take multiple files and to merge them into a single file. This single file so obtained is called a bundle, and is responsible for loading an entire app at once on the webpage.

In order to avoid the large bundling, it is preferred to split the bundle. React 16.6.0, introduced a way of performing code splitting. With Code-Splitting user can create multiple bundles that can be dynamically loaded at runtime. It uses React.lazy and Suspense tool/library. These are mainly used to load a dependency lazily and only load it when needed by the user.

    Importance of Code splitting:

Improves the performance of the app.
Improves the impact on memory.
Improves the downloaded Kilobytes (or Megabytes) size.


_`The only drawback about code splitting is that you can only use it in client side rendering.`_ 

**Que. When do we and why do we need Suspense?**
Ans. 
    When - 
When you need a component to load only after some other components have been loaded, we use Suspense. It allows you to defer rendering part of your application tree until some condition is met (for example, data from an endpoint or a resource is loaded). Suspense can also be used for fetching other resources like images, scripts, or other asynchronous work.

    Why - 

With Suspense, you have the ability to suspend component rendering while async data is being loaded. You can pause any state update until the data is ready, and you can add async loading to any component deep in the tree without plumbing all the props and state through your app and hoisting the logic.
This results in an instantaneous and fluid UI for fast networks and an intentionally designed loading state for slow networks as opposed to a general loading state.
