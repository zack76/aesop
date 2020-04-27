import React, { useEffect }  from 'react';
import { connect } from 'react-redux';
import { loadProducts } from '../reducers/product/loadProducts';
import { selectProduct } from '../reducers/selectedProduct/selectProduct';
import { removeSelectProduct } from "../reducers/selectedProduct/removeSelectProduct";
import ItemService from '../service/ItemService'
import NavBar from '../components/NavBar'
import ProductList from '../components/ProductList'
import LeftPane from '../components/LeftPane'
import 'react-sliding-pane/dist/react-sliding-pane.css';
import {AESOP_DATA} from '../constant'


const Home = ({products, selectedProduct, removeSelectProduct, loadProducts}) => {

    useEffect(() => {
        if (!products || products.length === 0) {
            loadProducts(AESOP_DATA)
            // ItemService.getItemDetail()
            //     .then(res => res.json())
            //     .then(resp => {
            //         this.props.loadProducts(resp)
            //     })
            // this.props.loadProducts(AESOP_DATA)
        }
    });

    return (
        <div>
            <div className="App">
                <div className="container">
                    <NavBar/>
                    <ProductList products={products}/>
                </div>
            </div>
            <LeftPane selectedProduct={selectedProduct}/>
        </div>
    )
}

export const mapStateToProps = ({ products, selectedProduct }) => {
    return {
        products: products,
        selectedProduct: selectedProduct
    }
}

export default connect(mapStateToProps , { loadProducts, selectProduct, removeSelectProduct })(Home);
