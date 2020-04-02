import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion, Card, Button, Col, Row} from "react-bootstrap";
import Item from "./Item"


const SubCategory = ({ subcategories }) => {
    return subcategories.map((subcategory, index) =>
        (
            <Accordion key={subcategory.name + index} defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link"
                                          eventKey={'subcategory' + subcategory.name + index}>
                            {subcategory.name}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={'subcategory' + subcategory.name + index}>
                        <Card.Body>
                            {subcategory.items[0].price ?
                                <Col xs={12} key={subcategory.name + index}>
                                    <Row>
                                        <Item items={subcategory.items}/>
                                    </Row>
                                </Col>
                                :
                                <SubCategory key={'subcategory' + subcategory.name + index}
                                subcategories={subcategory.items}/>
                            }
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        ))
}

export default SubCategory
