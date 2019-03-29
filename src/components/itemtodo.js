import React,{Component} from 'react'

import {connect} from 'react-redux'
import {Card,Button} from 'react-bootstrap';
class Item extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render()
   
{ const {item,deleteReducer,id}=this.props
    return(<div>
        <Card id="cards" style={{ width: '18rem' }}>
  <Card.Img id='card-img' variant="top" src={item.image}/>
  <Card.Body>
    <Card.Title id="tt">{item.Name}</Card.Title>
    <Card.Title id="tt">{item.lastname}</Card.Title>
    <Card.Title id="tt">{item.Phone}</Card.Title>
   <Button variant="primary" id='btn-primary'>Edit</Button>
   <Button variant="primary" id='btn-primary' onClick={()=>deleteReducer(id)}>Delete</Button>
  </Card.Body>
</Card>
    </div>

    )
}
}

const mapDispatchToProps=(dispatch)=>
{
    return {
        deleteReducer:id=>
        {
            dispatch({
                type:'DELETE_TODO',
                id //ES6

            })
        },
        
    }
}
export default connect(null,mapDispatchToProps)(Item);