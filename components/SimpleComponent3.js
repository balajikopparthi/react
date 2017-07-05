import React from 'react';

class SimpleComponent3 extends React.Component {
  constructor(){
    super() 
      this.state = {
        data: []
      }
    
  }
  componentDidMount() {
    $.ajax({
       url: "http://jsonplaceholder.typicode.com/posts",
       type: "GET",
       dataType: 'json',
       ContentType: 'application/json',
       success: function(data) {         
         this.setState({data: data});
       }.bind(this),
       error: function(jqXHR) {
         console.log(jqXHR);
       }.bind(this)
    })
  }
  render() {
    
        
    return (
	<div className="tabdiv">
      <table className="table table-hover tabwidth">
	  <thead>
	  <tr>
	  <th>No</th>
	  <th>Title</th>
	  <th>Sub</th>
	  </tr>
	  </thead>
      <tbody>{this.state.data.map(function(item, key) {
             
               return (
                  <tr key = {key}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.body}</td>
                  </tr>
                )
             
             })}</tbody>
       </table>
	   </div>
    )
  }
}

export default SimpleComponent3;