import React from "react";

import './Title.css';

const Title = ({points, guess}) => {
    return (
            <div>
            {
                guess === 0 ? 
                    <div className="title">Sleepy Maps</div> 
                :
                    <div className="points">{points} Points</div> 
            }
            </div>
    )
}

export default Title;