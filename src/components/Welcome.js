import React, { Component } from 'react'

export default class Welcome extends Component {
    render() {
        return (
            <div>
               <h1>My name is {this.props.name} & my collage is {this.props.college}</h1> 
            </div>
        )
    }
}
