import React, { Component } from 'react'
import { Card , Button} from 'react-bootstrap'
export default class Weather2 extends Component {
    render() {
        return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/5572b7b4e4b0a20071d407d4/1487090874274-FH2ZNWOTRU90UAF5TA2B/Weather+Targeting" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Date : {this.props.date}
    </Card.Text>
    <Card.Text>
      description : {this.props.desc}
    </Card.Text>
  </Card.Body>
</Card>
        )
    }
}
