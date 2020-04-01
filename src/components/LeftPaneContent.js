import React, { Component } from 'react';
import {Accordion, Button, Card, Table, Row} from "react-bootstrap";
import Item from "./Item";

const renderVariants = (variants) => {
    return variants.map(variant => {
        return (
            <Accordion key={variant.name || variant.sku} defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link"
                                          eventKey={'variant' + variant.name || variant.sku}>
                            {variant.name || variant.sku}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={'variant' + variant.name || variant.sku}>
                        <Card.Body>
                            {renderVariant(variant)}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    })
}

const renderVariant = (variant) => {
    var keys = Object.keys(variant)
    var values = Object.values(variant)
    return (
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>Variant</th>
                <th>Value</th>
            </tr>
            </thead>
            <tbody>
            {keys.map((key, index) => (
                <tr key={key}>
                    <td>{key}</td>
                    <td>{typeof values[index] === "boolean" ? values[index].toString() : values[index]}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    )
}

const LeftPaneContent = ({product}) => {
    if (product) {
        return  (
            <div>
                <h1>{product.name}</h1>
                {renderVariants(product.variants)}
            </div>
        )
    } else return null;
}

export default LeftPaneContent
