import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadProducts } from '../reducers/product/loadProducts';
import { selectProduct } from '../reducers/selectedProduct/selectProduct';
import ItemService from '../service/ItemService'
import NavBar from '../components/NavBar'
import ProductList from '../components/ProductList'
import LeftPane from '../components/LeftPane'
import 'react-sliding-pane/dist/react-sliding-pane.css';
import {AESOP_DATA} from '../constant'

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.loadProducts(AESOP_DATA)
        // ItemService.getItemDetail()
        //     .then(res => res.json())
        //     .then(resp => {
        //         this.props.loadProducts(resp)
        //     })
    }


    render() {
        const { products, selectedProduct } = this.props;
        return (
            <div>
                <div className="App">
                    <div className="container">
                        <NavBar />
                        <ProductList products={products} />
                    </div>
                </div>
                <LeftPane selectedProduct={selectedProduct} />
            </div>
        );
    }
}

export const mapStateToProps = ({ products, selectedProduct }) => {
    return {
        products: products,
        selectedProduct: selectedProduct
    }
}

export default connect(mapStateToProps , { loadProducts, selectProduct })(Home);
