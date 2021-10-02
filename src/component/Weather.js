import React, { Component } from 'react'
import Weather2 from './Weather2'

export default class Weather extends Component {
    render() {
        return (
            <div>
                <h1>weather</h1>
                {
                   
                    this.props.weatherData.map( (data,idx) => <Weather2 key={idx} date={data.date} desc={data.description}/>
                    )
                }
            </div>
        )
    }
}
