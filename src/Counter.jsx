import { useState } from "react";
import "./Counter.css"

function Counter(){
    const [son, setSon] = useState(0);
    const [daraja, darajason]  = useState(0);

    const oshirish = () => {
        setSon(son + 1);
    };

    const kamaytirish = () =>{
        setSon(son - 1);
    };

    const daraja1 = () =>{
        darajason(daraja + 1);
    };

    const daraja2 = () =>{
        darajason(daraja - 1);
    };

    const tugma = () =>{
        setSon(0)
        darajason(0)
    };

    return(
        <div id="box">
            <h2>Hozirgi sanoq:{son} <sup>{daraja}</sup>={Math.pow(son,daraja)}</h2>
            <button id="btn" onClick={oshirish}>Oshirish (+)</button>
            <button id="btn" onClick={kamaytirish}>Kamaytirish (-)</button>
            <button id="btn" onClick={tugma}>Nollash (0)</button>
            <button id="btn" onClick={daraja1}>Darajaga oshirish (*)</button>
            <button id="btn" onClick={daraja2}>Darajaga kamaytirish (*)</button>
        </div>
    )
}

export default Counter