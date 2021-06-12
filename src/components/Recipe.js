import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class Recipe extends Component {
    render() {
        return (
            <>
                <Card style={{ width: '18rem'}} >
                    <Card.Img variant="top" src={this.props.recipe.image} />
                    <Card.Body>
                        <Card.Title>{this.props.recipe.label}</Card.Title>
                        <Card.Text>
                            <ul>
                                {this.props.recipe.ingredientLines.map(item => {
                                    return (
                                        <li>
                                            {item}
                                        </li>
                                    )
                                })}
                            </ul>
                        </Card.Text>
                        <Button variant="danger" onClick={() => this.props.addToFav(this.props.recipe)}>Add To Favorite</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default Recipe
