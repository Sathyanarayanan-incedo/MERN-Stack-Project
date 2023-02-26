import React,{useState} from "react";
import axios from "axios";

const Maggi = () => {
    
    const [recipe, setrecipe] = useState({ Dish_Name: "", Dish_Type: "", Recipe: "", Demo: ""});
    axios.get("http://localhost:4000/maggi").then((response) => {
      console.log(response);
      setrecipe(response.data);
    });
  return(
    <div>
    <div className="img"><center><img src="https://tse2.mm.bing.net/th?id=OIP.TrHlR5V88SQHciAP7pPRVgHaDt&pid=Api&P=0" alt="" /></center></div>
    <center><div className="Maggi">
    <center><h2>Recipe For Maggi....</h2></center><br/>
    <left><h3>&nbsp;&nbsp;Dish_Name: {recipe.Dish_Name}</h3></left><br/>
    <left><h3>&nbsp;&nbsp;Dish_Type: {recipe.Dish_Type}</h3></left><br/>
    <left><h3>&nbsp;&nbsp;Recipe: {recipe.Recipe}</h3></left><br/>
    <left><h3>&nbsp;&nbsp;Demo: <button className="btn"><a href="https://youtu.be/HZno_fFusw0">&#9654;PLAY</a></button></h3></left><br/>
    <center><h2><i>Please Rate the Dish after you taste....</i>&#128522;</h2></center>
    <br/>
    <br/>
    <br/>
   </div>
   </center>
   </div>
  );
}

export default Maggi;