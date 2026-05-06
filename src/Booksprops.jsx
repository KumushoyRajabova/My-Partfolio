import "./Books.css"

function Booksprops(props){
    return(
        <div id="booksprops">
            <div id="booksprops_img">
                <img src={props.bookimg}/>
            </div>
            <div id="booksprops_text">
                <p id='bookname'>{props.bookname}</p>
                <p id='author'>{props.author}</p>
                <p id='about'>{props.about}</p>
            </div>
        </div>

    )
}

export default Booksprops