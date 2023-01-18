import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./HeaderComponent";

const Title = () => (
  <h1 id="title" key="h1">
    Hello EveryOne!
  </h1>
);

//composing component
const Container = () => {
  return (
    <>
      <div id="container">
        <Title />
        <h2>Namaste React Functional Component</h2>
        <h3>It is coposition component [ Nested Component ]</h3>
      </div>
    </>
  );
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Container />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
