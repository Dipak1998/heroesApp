import React, { Component } from 'react';
import Card from './Card';

export class CardList extends Component {
    constructor(props){

        
        console.log(props);
        super(props);
    }
    render() {
        return (
            <>
                 {
                     this.props.heroes ? (
                        <div className="hero__cards ">
                    {
                        this.props.heroes.map((hero,key) =>{
                            return(
                                <Card hero={hero} key ={key} />
                            )
                        })
                    }
                 </div>
                     ) : ''
                 }
            </>
        )
    }
}

export default CardList
