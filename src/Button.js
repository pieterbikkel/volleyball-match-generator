import "./Button.css"
import React, { useEffect } from 'react';

function Button() {

    const animateButton = function (e) {
        e.preventDefault();
        //reset animation
        e.target.classList.remove("animate");
        
        e.target.classList.add("animate");
        setTimeout(function () {
            e.target.classList.remove("animate");
        }, 700);
    };

    useEffect(() => {

        const bubblyButtons = document.getElementsByClassName("bubbly-button");
    
        for (let i = 0; i < bubblyButtons.length; i++) {
            bubblyButtons[i].addEventListener("click", animateButton, false);
        }

    }, [])
      
    

    return (
        <button className="bubbly-button">Export to image</button>
    )
}

export default Button;