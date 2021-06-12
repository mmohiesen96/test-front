import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export class Update extends Component {
    render() {
        return (
            <Form onSubmit={e => this.props.updateRecipe(e)} style={{width:'50%',margin:'25px auto'}}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Recipe Name</Form.Label>
                    <Form.Control type="text" value={this.props.label} onChange={this.props.updateLabel}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Recipe Image</Form.Label>
                    <Form.Control type="text" value={this.props.image} onChange={this.props.updateImage}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default Update
