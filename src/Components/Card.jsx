import { useState } from "react";
import "./Card.css"
function Card(){

    const styles={
        backgroundColor: "white",
        border:"0.5px solid rgb(232, 232, 232)",
        display:"flex",
        flexDirection:"column",
        height:"286px",
        width:"180px",
        padding:"0px",
        boxShadow: "rgba(0, 0, 0, 0.04) 2px 2px 8px",
        borderRadius: "8px"
    }

    const imageStyle = {
        width:"179px",
        height:"140px",
        padding:"0px",
    }

    const [quantity, setQuantity] = useState(0);

    const [success, setSuccess] = useState(false)

    const addClick = () => {
        setSuccess(true)
        setQuantity(quantity + 1);
    }

    const incrementQuantity = () => {
        setSuccess(true)
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => { 
        if (quantity > 0) {
        setQuantity(quantity - 1);
        }
        if(quantity === 1){
            setSuccess(false)
        }
    };


    return <div className="col-md-1 m-3" style={styles}>
        <img 
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        alt="profile pic" 
        style={imageStyle}>

        </img>

        <div style={{textAlign:"left",width:"179px",height:"130px"}}>
            <p style={{fontWeight:"600",marginLeft:"10px", color:"rgb(31, 31, 31)",height:"36px"}}> Milky Mist Paneer </p>
            <p style={{fontWeight:"100",marginLeft:"10px",height:"36px"}}> 200g </p>

            <div style={{display:"flex"}}>
            <p style={{fontWeight:"500",marginLeft:"10px",height:"36px"}}> ₹125 </p>
            {success ?
            <div style={{marginLeft:"50px",borderRadius: "3px",width:"80px",height: "30px",color:"rgb(49, 134, 22)",backgroundColor:"rgb(247, 255, 249)",display:"flex"}}>
                
                
                <button className="btn btn-success"  onClick={decrementQuantity}>-</button>
                <p style={{marginLeft:"2px",marginRight:"2px",fontWeight:"bold"}}>{quantity}</p> 
                <button className="btn btn-success" style={{textAlign:"center",lineHeight:"-6"}} onClick={incrementQuantity}>+</button>
                

            </div>
            :
            <button style={{marginLeft:"50px",border: "1px solid rgb(49, 134, 22)",borderRadius: "3px",width:"66px" ,height: "30px",color:"rgb(49, 134, 22)",backgroundColor:"rgb(247, 255, 249)"}} onClick={addClick}>
                Add
            </button>} 
            

            </div>

        </div>
        
    </div>
}

export default Card;