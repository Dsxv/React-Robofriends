import React from 'react' ;

const divStyle = {
  overflowY : 'scroll',
  height : '500px',
  //'border-top': '1px solid white'
} ;

const Scroll = ({children}) => {
  return <div style = {divStyle}>{children}</div> ;
}

export default Scroll ;
