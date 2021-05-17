import React from 'react';
import { Button } from 'react-bootstrap';


class HornedBeast1 extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          numberOfVote: 0,
        }
      }
    
      increaseVotes = () => {
        this.setState({
          numberOfPets: this.state.numberOfVote + 1,
        })
      }
    render(){
        return(
            <div className='honers'>
               
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.img-Url} />
          <Card.Body>
            <Card.Title>{this.props.catName}</Card.Title>
            <Card.Text>
            💜 favorited : {this.state.numberOfVote}
            </Card.Text>
          </Card.Body>
          <Button onClick={this.increaseVotes}  variant="primary">Choose It</Button>
        </Card>
      </div>
        )
    }
} 
export default HornedBeast1;
