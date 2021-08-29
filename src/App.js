import React, { Component } from 'react'
import './App.css';
// import heroes from './heroes';
// import {Tachyons} from 'tachyons';
import CardList from './components/CardList';
import SearchField from './components/SearchField';


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

  async componentDidMount(){
    // all backend endpoint call here
    // console.log("ComponentDidMount  ...........");
   
    console.log(this.state.data);
    
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(heroes => {
      this.setState({
        data : heroes
      })

    }).catch((e) =>{
       console.log(e);
       this.setState({
         erro: e
       })
    });
    console.log(this.state.data);
    // await this.fetchData()
  }

  //  fetchData = async () =>{
   
  //   await fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(data => {
  //     this.setState({
  //       data : data
  //     })

  //   }).catch((e) =>{
  //      console.log(e);
  //      this.setState({
  //        erro: e
  //      })
  //   });
  
    

  // }

  render() {
    
    console.log("render function call ...")
    return (
      <>
        <div className="app">
          <h1>Our Heroes</h1>
        
        <SearchField/>
       <CardList heroes={this.state.data}/>
       </div>
      </>
    )
  }
}

export default App
