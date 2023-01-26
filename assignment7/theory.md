**What are various ways to add images into our App? Explain with code example.**

Ans. we can add image using <img/> tag which has a src attribute. here are the different ways to add images-

1. By CDN(url) of any image
   <img src={CDN(url)}/>

2. Putting the image locally like create a new folder asstes/images/img.png and add the relative path.
   <img src="assets/images/img.png">

3. Importing the image
   import logo from '../assets/images/logo.png';
   <img src={logo}/>

**What would happen if we do console.log(useState())?**

Ans. console.log(useState()) gives an array of length 2. First value is a variable and secod value is a setter function for the first variable.

Array(2) = [0:"undefined",1:ƒ ()];



**Que. How will useEffect behave if we don't add a dependency array?**

Ans. When we provide an empty array dependency, the useEffect() hook will be executed only after initial render for once. but if we remove the [] dependency array then hook runs after every render.


**Que. What is SPA?**
Ans. A single page application is a website or web application that dynamically rewrites a current web page with new data from the web server, instead of the default method of a web browser loading entire new pages. It works inside a browser and does not require page reloading during use.
SPA requests the markup and data independently and renders pages straight in the browser.
SPA can cache any local storage effectively. An application sends only one request, store all data, then it can use this data and works even offline.



**Que. What is the difference between the client-side-routing and server-side-routing?**
Ans.

Server-Side-Routing - With server-side routing you download an entire new webpage. A Server-side request causes the whole page to refresh. This is because a new GET request is sent to the server which responds with a new document, completely discarding the old page altogether.

A server-side route will only request the data that’s needed. No more, no less.
Because server-side routing has been the standard for a long time, search engines are optimised for webpages that come from the server.



Client-Side-Routing - With client-side routing the webapp downloads, processes and displays new data for you.
A client-side route happens when the route is handled internally by the JavaScript that is loaded on the page. When a user clicks on a link, the URL changes but the request to the server is prevented. The adjustment to the URL will result in a changed state of the application. The changed state will ultimately result in a different view of the webpage. This could be the rendering of a new component.

Client Routing enables:

Faster page navigation.
Client-side state preserved across navigation.
Nested Layouts.
Custom page transition animations.

