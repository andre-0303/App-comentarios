import React from "react";
import People from '../assets/Consulting_Isometric 1.png';
import './Application.css';

const Application = () => {
    function Clique() {
        console.log('Clicou');
    }

    function writeInTextArea(event) {
        console.log(event.target.value);
    }

    return ( 
       <>
        <div>
            <img src={People} alt="People" />
            <textarea onChange={writeInTextArea}></textarea>
            <button onClick={Clique}>Comentar</button>

            <ul>
                <li>Item</li>
            </ul>
        </div>
       </> 
     );
}
 
export default Application;