
import React,{ Component } from 'react';

import Item from './itemtodo.js'
import {connect} from 'react-redux'
import './liste.css'


class Liste extends Component {
    

  
    render() { 
        console.log(this.props.tabtodo)
        const {tabtodo}=this.props
        return ( <div className='liste'>
                    {
                        tabtodo.map((el,index)=><Item item={el} key={index} id={index} remove={this.remove}
                         />)
                    }
        </div> );
    }
}

const mapStateToProps=(state)=>

{
    return {
    tabtodo:state.reducertodo
           }
}
 
export default connect(mapStateToProps)(Liste);
