import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadProducts } from '../reducers/product/loadProducts';
import { selectProduct } from '../reducers/selectedProduct/selectProduct';
import ItemService from '../service/ItemService'
import NavBar from '../components/NavBar'
import ProductList from '../components/ProductList'
import Modal from 'react-modal';
import LeftPane from '../components/LeftPane'
import 'react-sliding-pane/dist/react-sliding-pane.css';
import {AESOP_DATA} from '../constant'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        Modal.setAppElement(this.el);
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
            <div ref={ref => this.el = ref}>
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

const mapStateToProps = ({ products, selectedProduct }) => {
    return {
        products: products,
        selectedProduct: selectedProduct
    }
}

export default connect(mapStateToProps , { loadProducts, selectProduct })(Home);
