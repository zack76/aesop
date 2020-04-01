import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from './reducers/product/getProducts';
import ItemService from './service/ItemService'
import NavBar from './components/NavBar'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    componentDidMount() {
        ItemService.getItemDetail()
            .then(res => res.json())
            .then(resp => {
                console.log(resp)
                this.props.getProducts(resp)
            })
    }


    render() {
        return (
            <div className="App">
                <div className="container">
                    <NavBar />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ products }) => {
    return {
        products: products
    }
}

export default connect(mapStateToProps , { getProducts })(App);
