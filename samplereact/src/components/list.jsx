 import { useState } from "react";

 function List(){

    [list,setList]=useState([])
    [count,setCount] = useState(1);

     function onepiece(){
        const increse = "Item"+count;
        setCount((previouState)=> { return previouState+1});
        setList((previouState)=>{return [...previouState,increse]})
     }
    

    return(
        <>
            <h1>List</h1>
            <button onClick={onepiece}> ADD LIST</button>
            <ul>{
                
                list.map((el,index)=><li key={index}>{el}</li>)
                }</ul>
        
        </>
    )
 }

 export default List;