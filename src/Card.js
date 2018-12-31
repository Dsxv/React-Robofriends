import React from 'react'
import './Card.css'

const Card = ({name ,email , id }) => {
    return (
      <div className = "tc bg-light-blue dib br3 pa3 ma2 grow shadow-5">
        <img src = {"https://robohash.org/set_set4/" + id + name+ "?size=200x200"} alt = "pc"/>
        <div>
          <h2> {name} </h2>
           <p> {email} </p>
        </div>
      </div>
    )
}
export default Card ;
