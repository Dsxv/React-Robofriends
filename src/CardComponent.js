import React from 'react' ;
import Card from './Card'
const CardComponent = ({robots}) => {

   /* const component =
     robots.map( (robot,i) => <Card
   key = {i}
   id = {robot.id}
   name = {robot.name}
   email = {robot.email} />
     ) ;
  // component is an array of JSX
  // console.log(component) ;
   */
    return <div>
      {robots.map( (robot,i) =>
      <Card key = {robot.id}
     id = {robot.id}
     name = {robot.name}
     email = {robot.email} />
 ) } </div> ;
}
export default CardComponent ;
