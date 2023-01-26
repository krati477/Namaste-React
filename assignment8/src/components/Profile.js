import {useState, useEffect} from 'react';

const Profile = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("mounting phase");
        const timer = setInterval(() =>{
            console.log(props.x,"Timer Running");
        }, 1000);

        console.log("midway")

        return () => {
            clearInterval(timer);
            console.log("unmounted")
        }           
        
    }, []);

    return (
        <div>
            <h5>Profile Function Component</h5>
            <p>Name : {props.name}</p>
            <p>Count : {count}</p>
            <button onClick={() => setCount(1)}>count</button>
        </div>
    );
};

export default Profile;