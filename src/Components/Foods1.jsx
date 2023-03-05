import React from "react";
import RatingKheer from "./Rating_Kheer";
import RatingBriyani from "./Rating_Briyani";
import { Link } from "react-router-dom";

const Foods1 = () => {
  
    return(
        <div>
            <div className="card">
            <br/>
               <center><RatingKheer/></center>
               <img src="http://foodandremedy.com/wp-content/uploads/2016/10/Rice-Kheer-3.jpg" alt="" />
               <h3>Kheer</h3>
               <button className="bt2"><Link to={"/Kheer"}>RECIPE</Link></button>
            </div>
            <br/>
            <div className="card2">
            <br/>
               <center><RatingBriyani/></center>
               <img src="https://tse4.mm.bing.net/th/id/OIP.Ddb4TfGrRqeV7X_68QaUZQHaHa?pid=ImgDet&rs=1" alt="" />
               <h3>Chicken Briyani</h3>
               <button className="bt2"><Link to={"/briyani"}>RECIPE</Link></button>
            </div>
        </div>
    )
}

export default Foods1;