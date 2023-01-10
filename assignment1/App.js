const heading = React.createElement(
    "h1",
    {
        id: "title",
    },
    "Namaste"
);

const heading2 = React.createElement(
    "h2",
    {
        id: "title",
    },
    "React"
);

const container = React.createElement(
    "div",
    {
        id: "container",
    },
    [heading, heading2]
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
//Passing a react element inside the root

//async defer

root.render(container);
