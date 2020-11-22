import React, {useState} from 'react';
import axios from 'axios';

import LeftSide from "../components/LeftSide";
import Base from './Base';
import RightSide from "../components/RightSide";
import { Row, Col, Form, Button} from 'react-bootstrap';


function Signinpage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErrorMessage ,setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");


  const login = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password
    }
    // HTTP Verbs: GET, POST, PUT, DELETE, PATCH, etc
    axios.post("/api/users/login", data)
    .then(response=> console.log(response.data))
    .catch(exception=> {
      setEmailErrorMessage(exception.response.data.email);
      setPasswordErrorMessage(exception.response.data.password);
    })
  }
  
  return(
      <Base>
        <Row className="landing">
          <Col>
            <div>
              <br/>
              <br/>
              <br/>
              <Form onSubmit={login} style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
                  <Form.Group >
                      <Form.Label>Email</Form.Label>
                      <Form.Control onChange={e=> setEmail(e.target.value)} value={email} type="text" />
                      <small class="text-danger">{emailErrorMessage}</small>
                  </Form.Group>
                  <Form.Group >
                      <Form.Label>Password</Form.Label>
                      <Form.Control onChange={e=> setPassword(e.target.value)} value={password} type="password" />
                      <small class="text-danger">{passwordErrorMessage}</small>
                      <p className="mt-3">Don't have an account <a href="https://google.com">Signup</a></p>
                  </Form.Group>
                  <Button type="submit">Submit</Button>
              </Form>
          </div>
          </Col>
          <Col ><RightSide /></Col>
        </Row>
      </Base>
  );
}

export default Signinpage;