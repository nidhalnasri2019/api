import React,{Component} from 'react'
import {Card,Button} from 'react-bootstrap';
class Item extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render()
   
{ const {item,id,remove}=this.props
    return(<div>
        <Card id="cards" style={{ width: '18rem' }}>
  <Card.Img id='card-img' variant="top" src={item.image}/>
  <Card.Body>
    <Card.Title id="tt">{item.Name}</Card.Title>
    <Card.Title id="tt">{item.lastname}</Card.Title>
    <Card.Title id="tt">{item.Phone}</Card.Title>
   <Button variant="primary" id='btn-primary'>Edit</Button>
   <Button variant="primary" id='btn-primary'  onClick={()=>remove(id)}>Delete</Button>
  </Card.Body>
</Card>
    </div>

    )
}
}
export default Item;