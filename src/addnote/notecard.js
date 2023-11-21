import React from "react"
import './notecard.css'

function noteCard({title,note}){

    
return(

<div className="book__container">
<div className="title">
<p className="book__title">{title}</p>          
<p className="book__publish__date">{note}</p>
</div>
</div> 
)
}
export default noteCard;