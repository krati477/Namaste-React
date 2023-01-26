import {useEffect} from 'react';

const Contact = () =>{

    useEffect(async() =>{
        
          const data = await fetch("https://api.github.com/users/krati474");
          const json = await data.json();
          console.log(json);

        return () =>{
            
            console.log("unmounted")
        }
    },[]);

    return (
        <h1>Contact Us.</h1>
    );
};

export default Contact;