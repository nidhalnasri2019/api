import React,{Component} from 'react';

import{Modal,Button} from 'react-bootstrap';
import {Link,Route} from 'react-router-dom';
import './index.css'

class Example extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
        image:'',
        Name:'',
        lastname:'',
        Phone:0
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
    handleChange=(event)=>
    {
         this.setState(
          
           { [event.target.name]:event.target.value} )  
                       
    }
    AddMycontact=()=>{
      this.props.addcontact(
        {
          image:this.state.image,
          Name:this.state.Name,
          lastname:this.state.lastname,
          Phone:this.state.Phone
      
        }
      )
        }
  
    render() {
      return (
        <>
          <Button id="btn2" variant="primary" onClick={this.handleShow}>
            Add-Contact
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body> <div>
               <Link  to="/Add-Contact"><input id='input' name='image' type="text" placeholder="http://"  onChange={this.handleChange}  value={this.state.image}/></Link><br/>
                <Link  to="/Add-Contact"><input id='input'  name='Name' type="text" placeholder="yourname"  onChange={this.handleChange}  value={this.state.Name}/></Link><br/>
                <Link  to="/Add-Contact"> <input id='input'  name='lastname' type="text" placeholder="lastname"  onChange={this.handleChange} value={this.state.lastname}/></Link><br/>
                <Link  to="/Add-Contact"><input id='input'  name='Phone' type="number" placeholder="yourphone"  onChange={this.handleChange}  value={this.state.Phone}/></Link><br/>

                <div>
            <Route exact path="/Add-Contact"  />
            <Route path="/Add-Contact" />
            <Route path="/Add-Contact" />
          </div>
               

           </div></Modal.Body>
            <Modal.Footer>
             <Link className="" to="/Contact-list">
             <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
             </Link> 
             <Link className="" to="/Contact-list">
             <Button variant="secondary"  onClick={this.AddMycontact}>
                Add
              </Button>
             </Link> 
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
 
  
  export default Example;