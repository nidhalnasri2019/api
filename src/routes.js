import React,{Component} from 'react';
 import {Route} from 'react-router-dom'
 import './index.css'
 import './liste.css'
// import Liste from './liste'
class Routes extends Component{
      Home=()=>{
          return <img id="home-img" alt="" src="http://www.collab2.co.za/wp-content/uploads/2017/06/contact-us-background.jpg"/>
      }
    //   AddContact=()=>{
    //     //   return <Liste/>
    //   }
   
    render()
    {
        return <div>
            <div>
            <Route exact path="/" component={this.Home} />
            <Route exact path="/Add-Contact" component={this.AddContact} />
            <Route exact path="/contact-list" component={this.Contact} />

          </div>
        </div>
    }
}
export default Routes;
