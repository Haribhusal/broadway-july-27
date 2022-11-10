import React from 'react'
import './card.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent(props) {
  // function CardComponent({cardtitle,cardDetail,buttonLabel}) {
  // using props
  return (


    <Card className='col-sm-3'>
      <Card.Img variant="top" src="https://picsum.photos/id/12/300/200" />
      <Card.Body>
        <Card.Title>{props.cardtitle}</Card.Title>
        <Card.Text>
          {props.cardDetail}
        </Card.Text>
        <Button variant="primary">{props.buttonLabel}</Button>
      </Card.Body>
    </Card>
  )
}

export default CardComponent