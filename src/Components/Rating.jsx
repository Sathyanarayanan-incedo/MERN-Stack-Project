import React,{useState} from "react";

const Rating = () => {
    const[like,setlike] = useState(0);
    const[dislike,setdislike] = useState(0);

    function add_like(){
         setlike(like+1)
    }
    function add_dislike(){
         setdislike(dislike+1)
    }

    var rate = 0;

    rate = (like - dislike)/(like + dislike)*5;

    if(rate<1)
    {
       rate = 0;   
    }    

    if(like===0 && dislike===0)
    {
        rate = 0;
    }

    return(
        <div className="btn">
            <button className = "btn1" onClick={add_like}>&#128077;{like}</button><br/>
            <button className = "btn1" onClick={add_dislike}> &#128078;dislike</button>
            <h4>Rating : {rate.toFixed(2)}</h4>
        </div>
    );
}

export default Rating;