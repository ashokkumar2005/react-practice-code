import { useState } from "react";

 
 function Form(){

    // [name,setName]=useState("");
    // [age,setAge]=useState();
    // [email,setEmail]=useState("");

    [inputs,setInputs]=useState({})

    function submition(){
        e.preventDefault();
        console.log("form submitted");
        console.log("username is ",inputs);
    }

    return(
        <>
          <form onSubmit={submition} >
            {/* <label htmlFor="">Enter your name </label>
            <input type="text" onChange={(e)=>setName(e.target.value)}/><br></br>
             <label htmlFor="">Enter your name </label>
            <input type="text" onChange={(e)=>setAge(e.target.value)}/><br></br>
             <label htmlFor="">Enter your name </label>
            <input type="text" onChange={(e)=>setEmail(e.target.value)}/> */}
            <label >Enter your name : <input type="text" onChange={setInputs((e,previousState)=> {return {...previousState,name:e.target.value}})}/></label><br></br>
            <label >Enter your Age  :<input type="text" onChange={setInputs((e,priviousState)=>{return{...priviousState,age:e.target.value}})}/> </label><br></br>
            <label >Enter your Email:<input type="text" onChange={setInputs((e,priviousState)=>{return{...priviousState,email:e.target.value}})}/></label>
             <input type="submit" value="submit form"/>
          </form>
        </>
    )
 }