import React , { Component } from 'react'
import {robots} from './robots.js';
import CardComponent from './CardComponent' ;
import SearchBox from './SearchBox';
import './App.css'

class App extends Component{
 constructor(){
   super() ;
    this.state = {
     searchfield: "" ,
      robots: robots
   }
 }

  render() {

    let setSearch = (event) => {
      this.setState({searchfield : event.target.value }) ;
    }
    let setRobo = robots.filter( robot => robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())) ;
    console.log(setRobo)
    return (
      <div className = "tc">
         <h1 className = "f1"> RoboKitties </h1>
         <SearchBox setSearch = {setSearch} />
         <CardComponent robots = {setRobo} />
      </div>
  ) ;
  }
}
export default App ;
