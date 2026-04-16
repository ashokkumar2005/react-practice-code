import { useState } from "react";

 
 function Form(){

    // [name,setName]=useState("");
    // [age,setAge]=useState();
    // [email,setEmail]=useState("");

    const [inputs,setInputs]=useState({phone:"+91" , country:"india" , about:"Im a student"})   

    function submition(e){
        e.preventDefault();
        console.log("form submitted");
        console.log("username is ",inputs);
    }

    function handlechange(e){
       const name = e.target.name;
       const value=e.target.value;
      setInputs((previousState)=> {return {...previousState,[name]:value}});

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
            <label >Enter your name : <input type="text" name="name" onChange={handlechange}/></label><br></br>
            <label >Enter your Age  :<input type="text" name="age" onChange={handlechange}/> </label><br></br>
            <label >Enter your Email:<input type="text" name="email" onChange={handlechange}/></label><br/>
            <label >Enter your Phone:<input type="text" name="phone" value={inputs.phone} onChange={handlechange}/></label>
            <label>
              <select value={inputs.country}  name="country" onChange={handlechange}>
                <option value="">select</option>
                <option value="India">India</option>
                <option value="Australia">Australia</option>
                <option value="USA">USA</option>
              </select>
            </label>
            <label> About me : <textarea value={inputs.about} name="about" onChange={handlechange}/></label>
             
             <input type="submit" value="submit form"/>
          </form>
        </>
    )
 }

 export default Form;