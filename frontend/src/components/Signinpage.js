import React from 'react';
import LeftSide from "./LeftSide";
import Menu from "./Menu";
import RightSide from "./RightSide";
import { Row, Col} from 'react-bootstrap';


function Signinpage() {
    return(
        <div>
             <Menu />
      <Row className="landing">
        <Col ><LeftSide /></Col>
        <Col ><RightSide /></Col>
      </Row>
        </div>
    );
}

export default Signinpage;