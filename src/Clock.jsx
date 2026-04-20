import { useEffect, useState } from "react";

function Clock(){
    const [vaqt, setVaqt] = useState(new Date().toLocaleTimeString());
    const [sana, setSana] = useState(new Date().toLocaleDateString());

    const [bgcolor,setbgcolor] = useState('#282c34')
    const [textcolor, settextcolor] = useState('#61dafb')
    const [datecolor,setdatecolor] = useState('white')

    const rancolor = () => {
        return "#" + Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0");
    }

    const color = () => {
        setbgcolor(rancolor());
        settextcolor(rancolor());
        setdatecolor(rancolor());
    }

    useEffect(() =>{
        const interval = setInterval(() =>{
            setVaqt(new Date().toLocaleTimeString());
            setSana(new Date().toLocaleDateString());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return(
        <div style={{
            textAlign:'center',
            marginTop:'50px',
            padding:'20px',
            background: bgcolor,
            color: 'white',
            borderRadius:'15px',
            display:'inline-block',
            boxShadow:'0px 0px 20px bgcolor',
            width:'96.8%'
        }}>
            <h1 style={{color: datecolor}}>Hozirgi vaqt:</h1>
            <h1 style={{fontSize:'48px', paddingTop:'10px',color:textcolor}}>{vaqt}</h1>
            <h1 style={{fontSize:'46px', color:textcolor}}>{sana}</h1>
            <button id="color" onClick={color} 
            style={{width:"150px", height:"40px", border:"2px solid '#282c34'", 
            borderRadius:"10px", background:"white", color:'black', fontSize:"20px", fontFamily:"Times New Roman"}}>
                Color</button>
        </div>
    )
}

export default Clock;