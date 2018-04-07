import React from 'react';
import { Row, Col, Alert } from 'reactstrap';

const PopUpAlert = ({ totalResults }) => {
    return <Row style={{paddingTop: '20px',}}>
             <Col sm={{ size: 40, offset: 3 }}>
                <Alert color="success">
                  <h2>We found { totalResults } stocks</h2>
               </Alert>
             </Col>
          </Row>
};

export default PopUpAlert;
