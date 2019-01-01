import React , { Component } from 'react'
//import {robots} from './robots.js';
import CardComponent from './CardComponent' ;
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll' ;

class App extends Component{
 constructor(){
   super() ;
    this.state = {
     searchfield: "" ,
      robots: []
   }
 }

 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
   .then(users => this.setState({robots : users})) ;

 }


  render() {

    let setSearch = (event) => {
      this.setState({searchfield : event.target.value }) ;
    }
    let setRobo = this.state.robots.filter( robot => robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())) ;
    return (
      <div className = "tc">
         <h1 className = "f1"> RoboKitties </h1>
         <SearchBox setSearch = {setSearch} />
         <Scroll>
           <CardComponent robots = {setRobo} />
         </Scroll>
      </div>
  ) ;
  }
}
export default App ;
