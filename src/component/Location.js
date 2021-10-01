import React, { Component } from 'react'
import {Image} from 'react-bootstrap'
export default class Location extends Component {
    render() {
        return (
            <div>
                <h1>Location </h1>
                <h4>
                    city Name {` ${this.props.cityName}`}
                </h4>
                <h6>
                    {`${this.props.lat}/${this.props.lon}` } 
                </h6>
                <Image src={this.props.src} alt="..." />
            </div>
        )
    }
}
