 import { use, useState } from "react";

 function Use(){

    [collor,setCollor] = useState("Red")
    [car,setCar]=useState(
      { Model : "BMW M5",
        Year : 2025,
        Color:"black",
        Owner : "Ashok",
        Booking : true
      }
    )
const updatecar = ()=>{
     setCar(previousStae=>{
      return{...priviousState,color:"white"}
     })
}
    return(
        <>
          <h2> Car Model</h2>
          <button onClick={(updatecar)}> Update Car </button>
          <h2>collor is {collor}</h2>
          <button type="submit" onClick={setCollor("bule")}>change</button>
        </>
    )
 }

 export default Use;