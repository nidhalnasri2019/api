import React,{Component} from 'react';


import './index.css'
import {Navbar,Nav} from "react-bootstrap";
import {Link} from 'react-router-dom';
import Example from './modal.js'
import{Route} from 'react-router-dom'


class Navbars extends Component {
  Home=()=>{
    return <img id="home-img" alt="" src="http://www.collab2.co.za/wp-content/uploads/2017/06/contact-us-background.jpg"/>
}
    
render()
{ return (<div className="nav"> 
     <Navbar  variant="light">
    
    <Nav className="mr-auto">
      <Link  to ='/'><button id="btn1">Home</button>   </Link>
      <Link  to='/Add-Contact'> <Example  addcontact={(x)=>this.props.add(x)} /></Link>
      <Link  to='/Contact-list'><button id="btn3">Contact-list</button></Link>
    </Nav>
  </Navbar>
  <div>
  <Route exact path="/" component={this.Home} />
  <Route exact path="/Add-Contact" component={this.Home} />
  <Route exact path="/contact-list" component={this.Home} />

  </div>


</div>);

}


}
export default Navbars;