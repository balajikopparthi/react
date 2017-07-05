import React from 'react';

class SimpleComponent1 extends React.Component{
   render(){
     return(
	   <div>
	   <div className="btn-group btn-group-justified" role="group" aria-label="...">
  <div className="btn-group" role="group">
    <button type="button" className="btn btn-default">Home</button>
  </div>
  <div className="btn-group" role="group">
    <button type="button" className="btn btn-default">Employee List</button>
  </div>
  <div className="btn-group" role="group">
    <button type="button" className="btn btn-default">Add Employee</button>
  </div>
</div>
	   </div>
	 )
   }
}
export default SimpleComponent1;