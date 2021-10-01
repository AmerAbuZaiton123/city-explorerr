import axios from 'axios'
import React, { Component } from 'react'
import { Form,Button } from 'react-bootstrap'
import Error from './Error'
import Location from './Location'

export default class FormS extends Component {
    constructor(props){
    super(props)
    this.state={
    cityName : '',
    lat : ''   ,
    lon : ''  ,
    show_Results: false,
    show_Error: false,      
    }
    }
    getCityName = (e)=>{
        
    this.setState({
        cityName : e.target.value
    })
    console.log("city = " + this.state.cityName);
    }
    LocationSearch =  async(e) => {
        e.preventDefault(); 
          let Url=`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityName}&format=json`
         try{
              axios.get(Url).then(res=>{
                let data=res.data[0]
                   this.setState({
                   lat:data.lat,
                   lon:data.lon,
                   show_Results: true,
                   show_Error: false, 
                })
           
              }).catch(e =>{
                this.setState({
                    show_Results: false,
                    show_Error: true 
                  })
              } )
             }
        catch(e){
        await  this.setState({
          show_Results: false,
          show_Error: true 
        })
      }
    
    }
    render() {
        let url2 = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.lat},${this.state.lon}`
        return (
            <div>
                <Form onSubmit={this.LocationSearch}>
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>search </Form.Label>
                        <Form.Text className="text-muted"   >
search
                        </Form.Text>
                        <Form.Control type="Text" placeholder="Enter email" onChange={this.getCityName} />
                    </Form.Group>
                    <input type='submit' value="Explore" />
                   
                </Form>

                {
                    this.state.show_Results && 
                    <Location src={`${url2}`} cityName={this.state.cityName} lon={this.state.lon} lat={this.state.lat} />
                }
                {
                    this.state.show_Error && 
                    <Error />
                }
            </div>
        )
    }
}