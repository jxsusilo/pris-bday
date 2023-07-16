import { useState } from "react";

function Title() {
    const [play, setPlay] = useState(0);
    
    if (play === 0) {
        return (
            <div>
                <img id="happybday"></img>
                <img id="vines"></img>
                <img id="pris"></img>
                <img id="play" onClick={(e) => setPlay(1)}></img>
            </div>
            
        )
    } else if (play === 1) {
        return (
            <div>
                <h1>under construction...</h1>
                <img id="strawb"></img>
            </div>
            
        )
    }
    
    // return (
    //     <div className="page">
    //         <h1>Happy<br/>&ensp;Birthday,<br/>&emsp;&emsp;&emsp;<span id="pris">Pris!</span></h1>
    //     </div>
    // )
}

export default Title;