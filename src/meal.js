import React from "react";
import {Segment} from 'semantic-ui-react'


export const Meal = ({ data }) => {
    
    const mealList = data.map(
        (meal, index) => (<li key={index}>{meal}</li>)
    );

    return (
        <Segment>
            <ul>{mealList}</ul>
        </Segment>
    );
}

/*
class Meal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meals: []
        }
    }

    componentDidMount() {
        this.set()
    }

    set = () => {
        console.log(this.props)
        this.setState({
            meals: this.state.meals.concat(this.props)
        })
    }

    render() {
        const mealList = this.state.meals.map(
            (meal, index) => (<li key={index}>{meal}</li>)
        );

        return (
            // TODO : 배열 렌더링
            <Container frame>
                <ul>{mealList}</ul>
            </Container>
        );
    }
}
//*/
export default Meal;