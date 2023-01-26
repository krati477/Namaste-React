**What is a microservice?**

Ans. Microservices - also known as the microservice architecture - is an architectural style that structures an application as a collection of services that are

    Independently deployable
    Loosely coupled
    Organized around business capabilities
    Owned by a small team
    Highly maintainable and testable

The microservice architecture enables the rapid, frequent and reliable delivery of large, complex applications. It also enables an organization to have their own technology stack, inclusive of the database and data management model,
communicate with one another over a combination of REST APIs.

Code can be updated more easily - new features or functionality can be added without touching the entire application
Teams can use different stacks and different programming languages for different components.



**What is a monolith architecture?**

Ans. Monolithic Architecture is like a big container, wherein all the software components of an app are assembled and tightly coupled, i.e., each component fully depends on each other. 

Let’s take an example of an e-commerce site-

![Monolith Architecture](asstes/monolith.png)



As you can see in the example all the services provided by the application (Customer Services, Cost Services, Product Services) are directly connected. So if we want to change in code or something we have to change in all the services as well.

    For large and complex application in monolithic, it is difficult for maintenance because they are dependent on each other.

    It is because, for modify an application we have to redeploy whole application instead of updates part. It takes more time or slow development.

    Each copy of the application will access the hole data which make more memory consumption. 

    If one services goes down, then it affects all the services provided by the application. It is because all services of applications are connected to each other.

    Really difficult to adopt new technology.It is because we have to change hole application technology.



**Que. What is the difference between Monolith and Microservices?**

Ans. 

1.) Monolithic architecture is built as one large system and is usually one code-base.
    Microservices architecture is built as small independent module based on business functionality.

2.) It is not easy to scale Monolithic application based on demand.
    It is easy to scale Microservices based on demand.

3.) Monolithic architecture has shared database.
    In Microservices architecture, Each project and module has their own database.

4.) In Monolithic architecture, Large code base makes IDE slow and build time gets increase.
    In Microservices architecture, Each project is independent and small in size. So overall build and development time gets decrease.

5.) It extremely difficult to change technology or language or framework in Monolithic application because everything is tightly coupled and depend on each other.
    In Microservices architecture, it is Easy to change technology or framework because every module and project is independent
    


**Que. Why do we need a useEffect Hook?**

Ans. By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM render or updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.

useEffect exists: to provide a way to handle performing these side effects,

    Making a request to an API for data from a backend server
    To interact with browser APIs (that is, to use document or window directly)
    Using unpredictable timing functions like setTimeout or setInterval

```_In short, useEffect is a tool that lets us interact with the outside world but not affect the rendering or performance of the component that it's in._```.



**Que. What is Optional chaining?**
Ans. The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called is undefined or null, it returns undefined instead of throwing an error.

    The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.


**Que. What is Shimmer UI?**

Ans. A shimmer UI resembles the page's actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up. It gives people an idea of what's about to come and what's happening (it's currently loading) when a page full of content/data takes more than 3 - 5 seconds to load.

![Shimmer UI](asstes/shimmer.gif)