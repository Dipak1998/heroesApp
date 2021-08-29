import React, { Component } from 'react'

export class Card extends Component {
    constructor(props){
        super(props);
        console.log(props.hero);
        console.log(props.key)
    }
    render() {
        return (
            <div className="card__item fl w-25 washed-blue bg-dark-green" key={this.props.key}>
            <img src={`https://robohash.org/${this.props.hero.id}?200x200`} />
              <p>ID : {this.props.hero.id}</p>
              <h3>Name : {this.props.hero.name}</h3>
              <p>Email : {this.props.hero.email}</p>
              </div>
        )
    }
}

export default Card
