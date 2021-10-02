import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class Movies extends Component {
    render() {
        return (
            <div>
                {this.props.moviesData.map((data,idx) => {
                    return (

                        <Card key={idx} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${data.image}`} alt={data.name} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Title : {data.name}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })


                }
            </div>
        )
    }
}

export default Movies;
