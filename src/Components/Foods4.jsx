import React from "react";
import RatingPoha from "./Rating_Poha";
import RatingPanipuri from "./Rating_Panipuri";
import { Link } from "react-router-dom";

const Foods4 = () => {
    return(
        <div>
            <div className="card7">
                <br/>
               <center><RatingPoha/></center>
               <img src="https://cdn.cdnparenting.com/articles/2020/02/26143210/POHA-RECIPE.jpg" alt="" />
               <h3>Poha</h3>
               <button className="bt2"><Link to={"/poha"}>RECIPE</Link></button>
            </div>
            <br/>
            <div className="card8">
            <br/>
               <center><RatingPanipuri/></center>
               <img src="https://tse3.mm.bing.net/th?id=OIP.SyfbNQMY9OvsQ30Ky4aWjAHaFj&pid=Api&P=0" alt="" />
               <h3>Pani Puri</h3>
               <button className="bt2"><Link to={"/panipuri"}>RECIPE</Link></button>
            </div>
        </div>
    )
}

export default Foods4;