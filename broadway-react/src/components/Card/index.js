import React from 'react'
import './card.css'

function CardComponent(props) {
  // function CardComponent({cardtitle,cardDetail,buttonLabel}) {
  // using props
  return (
    <div className='cardStyles'>
        <h3>
            {props.cardtitle}
        </h3>
        <p>
            {props.cardDetail}
        </p>
        <button className='btn btn_card'>{props.buttonLabel}</button>
    </div>
  )
}

export default CardComponent