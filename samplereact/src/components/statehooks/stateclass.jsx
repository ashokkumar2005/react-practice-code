 import React from "react";

 class Showroom extends React.Component{

    constructor(){
        super();
        this.state ={Model:"RX100", color:"black"}

        return(
            <>
                <h2>Bike model is {this.state.Model} and color is {this.state.color}</h2>
                <button onClick={()=>{this.setState((priviousState)=>  
                    {return{...priviousState,Model:"R15"}
                })
                    }
                    }>
                Update Model</button>
            </>
        )
    }

 }

 export default Showroom;