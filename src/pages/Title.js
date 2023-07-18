import { useState } from "react";
import Confetti from 'react-confetti';

function Title() {
    const [play, setPlay] = useState(0);
    
    if (play === 0) {
        return (
            <div>
                <img id="happybday"></img>
                <img id="pris"></img>
                <img id="play" onClick={(e) => setPlay(1)}></img>
            </div>
            
        )
    } else if (play === 1) {
        return (
            <div>
                <Confetti/>
                <img id="strawb"></img>
                <iframe id="player" src="https://open.spotify.com/embed/playlist/7mNP2x0myDn9biIvu80p9q?utm_source=generator&theme=0" width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
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