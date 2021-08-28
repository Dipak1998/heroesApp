import React, { Component } from 'react'
import './App.css';
// import heroes from './heroes';
// import {Tachyons} from 'tachyons';


export class App extends Component {

  constructor(){
    console.log("Constructor Call....")
    super();
 
    this.state = {
      data : [],
      key : 0,
      error : ''
    }
    console.log(this.state.data)

  }
  componetWillMount(){
    console.log("ComponentWillMount Call .......")
  }
  // static getDerivedStateFromProps(){
  //   console.log("getDerivedStateFromProps call...........")
  // }

  componentDidMount(){
    // all backend endpoint call here
    // console.log("ComponentDidMount  ...........");
   
    console.log(this.state.data);
    this.fetchData()
  }

  fetchData = () =>{
   
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      this.setState({
        data : data
      })

    }).catch((e) =>{
       console.log(e);
       this.setState({
         erro: e
       })
    });
    
    // this.setState({
    //   data : data
    // })
    

  }

  render() {
    
    console.log("render function call ...")
    return (
      <>
        <div className="app">
          <h1>Learning Life Cycle of React</h1>
        </div>
        <div className="hero__cards">
     {
          this.state.data ? 
          (this.state.data.map( (hero) => {
            return(
              <div className="card__item fl w-25">
              <p>ID : {hero.id}</p>
              <h3>Name : {hero.name}</h3>
              </div>

            )
          })) : 
        (
          <div> {this.state.error}</div>
        )
        }
      
        </div>
      </>
    )
  }
}

export default App
