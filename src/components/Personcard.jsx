import React, { Component } from 'react'; // import react and component so that we can use those to create a class based react component

class PersonCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };

        this.buttonHandler = () => {
            this.setState({age: this.state.age +1})
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.lastName }, {this.props.firstName}</h1>
                <h3>Age: {this.state.age}</h3>
                <h3>Hair Color: {this.props.hairColor}</h3>
                <button onClick = {this.buttonHandler}>Birthday Button for {this.props.lastName }, {this.props.firstName} &#9829;</button>
                <hr />
            </div>
        )
    }
}

export default PersonCard;