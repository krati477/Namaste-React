import { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    //create State
    this.state = {
      userInfo: {
        type: "dummyName",
        login: "dummyLocation",
      },
    };
    console.log(this.props.x, " - Constructor");
  }

  async componentDidMount() {
    console.log(this.props.x, "-componentDidMount");
   this.timer = setInterval(() => {
        console.log(this.props.x,"Timer Running");
    }, 1000);
    // const data = await fetch("https://api.github.com/users/krati474");
    // const json = await data.json();
    // this.setState({ userInfo: json });
    // console.log(this.props.x, "2 -componentDidMount");
    //console.log(json);
    
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("COmponentWillUnmount");
    clearInterval(this.timer);
  }

  render() {
    console.log(this.props.x, " - Render");    

    return (
      <>
        <h3>Profile Class Component</h3>
        <p>Name : {this.state.userInfo.login}</p>
        <p>Type: {this.state.userInfo.type}</p>
      </>
    );
  }
}

export default Profile;
