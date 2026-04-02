 import Car from "./car.jsx";
 
 function list(){

   const namelist = [
        {name1:"Ashok",age:20},
        {name1:"Grumsshh",age:19},
        {name1:"Abi",age:18}
    ]

const collage = "nit" ;
    const typechek= namelist.length>0 &&  Object.keys(collage).length>0;
 
    return(
        <>
        <ul>
    { typechek && namelist.map((item,index)=>
        <li key={index}><Car name1 ={item.name1} age = {item.age}></Car></li>
     )}
     </ul>

    </>
    )   
}

export default list;