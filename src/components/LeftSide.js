import React from 'react';
import {Form, Button} from 'react-bootstrap';

const LeftSide = () => {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <Form style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
                <Form.Group >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                    <p className="mt-3">Don't have an account <a href="https://google.com">Signup</a></p>
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default LeftSide;
