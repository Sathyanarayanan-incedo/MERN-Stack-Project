import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Foods2 = () => {
    return(
        <div>
            <div className="card3">
            <br/>
               <center><Rating/></center>
               <img src="https://tse1.mm.bing.net/th?id=OIP.iABVK73UYywVNC4mweoCjgHaGN&pid=Api&P=0" alt="" />
               <h3>Chappathi</h3>
               <button className="bt2"><Link to={"/chappathi"}>RECIPE</Link></button>
            </div>
            <br/>
            <div className="card4">
            <br/>
               <center><Rating/></center>
               <img src="https://tse3.mm.bing.net/th?id=OIP.6S3Rj7TecvRdleXuFWVf4gHaFx&pid=Api&P=0" alt="" />
               <h3>Chole Bature</h3>
               <button className="bt2"><Link to={"/cholebature"}>RECIPE</Link></button>
            </div>
        </div>
    )
}

export default Foods2;