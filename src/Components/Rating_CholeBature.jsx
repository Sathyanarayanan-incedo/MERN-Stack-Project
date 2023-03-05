import React,{useState} from "react";
import { useEffect } from "react";

const Rating_CholeBature = () => {


   const likefromlocal = JSON.parse(localStorage.getItem("lyk_cholebature")) 
   const dislikefromlocal = JSON.parse(localStorage.getItem("dislyk_cholebature"));

   const[like,setlike] = useState(likefromlocal) 
   const[dislike,setdislike] = useState(dislikefromlocal);
   var rate;
    
   function add_like(){
        setlike(like+1)
   }
   function add_dislike(){
        setdislike(dislike+1)
   }
    
    rate = 0;

    rate = (like - dislike)/(like + dislike)*5;

    if(rate<1)
    {
       rate = 0;   
    }    

    if(like===0 && dislike===0)
    {
        rate = 0;
    }
    
    useEffect(()=>{
        localStorage.setItem("lyk_cholebature",JSON.stringify(like));
        localStorage.setItem("dislyk_cholebature",JSON.stringify(dislike));
    },[like,dislike]);

    

    return(
        <div className="btn">
            <button className = "btn1" onClick={add_like}>&#128077;{like}</button><br/>
            <button className = "btn1" onClick={add_dislike}> &#128078;dislike</button>
            <h4>Rating : {rate.toFixed(2)}</h4>
        </div>
    );
    
}

export default Rating_CholeBature;