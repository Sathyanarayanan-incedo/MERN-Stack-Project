import React from "react";
import Foods1 from "./Foods1";
import Foods2 from "./Foods2";
import Foods3 from "./Foods3";
import Foods4 from "./Foods4";

const Search = () => {
    return(
        <div>
           <div className="main" >
               <div className="heading">
                  <center><h1>Instant Recipe...</h1></center>
                  <center><h3>Enjoy  your  MEAL  in  a  click!!!  &#128523;</h3></center>
               </div>
          </div>
          <div className="container">
                  <Foods1/>
                  <Foods2/>
                  <Foods3/>
                  <Foods4/>
          </div>
         </div>
    )
}

export default Search;