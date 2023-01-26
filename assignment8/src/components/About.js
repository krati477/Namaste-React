import {Component} from "react";
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunction from "./Profile";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent - Constructor");
    }

    componentDidMount() {
        console.log("Parent - componentDidMount");       
    }
    componentDidUpdate(){
        console.log("Parent - componentDidUpdate");
    }

  render() {
    console.log("Parent - Render");
    return (
      <>
        <h1>Welcome About, Finding the path.</h1>
        {/* <Outlet /> */}
        {/* <Profile name={"First Child Class"} x={"First Child"} /> */}
        <ProfileFunction name={"First Child Function"} x={"First Child"} />
       </>
    );
  }
}

export default About;
