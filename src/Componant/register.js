import React , {useState} from 'react'

const Register = () => {
    const [user,setUser]= useState({
        name:"",
        email:"",
    });
    let name, value;
     const getUserData = (event)=>{
        name= event.target.name; 
        value= event.target.value; 

        setUser({...user,[name]: value});
     }
     const postData = async(e) => {
        e.preventDefault();
        const {name,email} = user;
        if(name && email){
            
        const res = fetch("https://riteshdemo-bacad-default-rtdb.firebaseio.com/registerdatabase.json",{
            method:"POST",
            headers: {"Content-Type":"application/json,"},
            body:JSON.stringify({
                name,
                email,
            }),
        }); 
        if (res){
            setUser({
                name: "",
                email: "",
            });
            alert("Data Stored Successfully");
        }   
        }else{
            alert("Please Fill The DAta First");
        }
     };
    return (
        <div className="" >
            <form className="" method="POST">
                <h1>Please Provide Some Details</h1>
                <span>Enter Your Name </span>
                <input className="" type="text" name="name" 
                placeholder="Enter Your Name"  value={user.name} onChange={getUserData} ></input>
                <span>Enter Your Email ID </span>
                <input className="" type="text" name="email" 
                placeholder="Enter Your Email" value={user.email} onChange={getUserData} ></input><br/>
                <button type="submit" onClick={postData}>submit</button>
            </form>
        </div>
    )
}

export default Register
