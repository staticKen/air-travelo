import React, { Component } from 'react';
 import {Dialog, DialogTitle, DialogContent} from '@material-ui/core';
 import './Popup.css';

//   import axios from 'axios';

 class Popup extends Component {

constructor(props) {
  super(props);
  this.state={};
  this.handleOpenDialog = this.handleOpenDialog.bind(this);

this.handleCloseDialog = this.handleCloseDialog.bind(this);
}
handleOpenDialog() {
  this.setState({
    openPopup: true
  });
}

handleCloseDialog() {
  this.setState({
    openPopup: false
  });
}

 render(){
    <button onClick={this.login} className="w-100 btn--outline" id="popupButton" type="submit">Sign in</button>

     return (
       <div>

       <button type="hidden" className='form-input-btn' onClick={this.handleOpenDialog}>Submit</button>
      
         <Dialog open={this.state.openPopup} onCancel={this.handleCloseDialog} className="shadow">
           <div className="popup-box"><button type="submit" onClick={this.handleCloseDialog} className="thex">X</button>
           <DialogTitle>
             <div className="centering width"> 
             </div>
             </DialogTitle>
             <DialogContent>
             <div className="centering width">
 		Thank you for booking a flight with us. An email has been sent with further instructions.
             </div>
           <button className="w-100 btn--outline" type="submit">Return to Home</button>

             </DialogContent>
             </div>
         </Dialog>

         </div>
     )
 }
 }
 export default Popup;




