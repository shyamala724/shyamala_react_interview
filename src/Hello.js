import React, { Component } from 'react';

class Hello extends Component{
constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      data : this.props.data ? this.props.data:[]
    };
    console.log('parent data',this.props);
  }
  
  render() {
    return (
      <div style={{display:"flex"}}>
     {this.state.data.map((row,key)=>{
       return(
         <div>
         <div >
         <div>{row.artist}</div>
         <div style={{width:"100px",height:"100px"}}><img style={{width:"100px", height:"auto"}} src={row.image} /></div >
         </div>
         <div style={{width:"100px",height:"100px"}}><img  style={{width:"100px", height:"auto"}} src={row.thumbnail_image} /></div>
         <div>{row.title}</div>
         <div><a href={row.url}></a></div>
         </div>
       )
     })}
      </div>
    );
  }
}
export default Hello;
